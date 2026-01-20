-- The Office - Database Schema for Supabase
-- Run this SQL in your Supabase SQL Editor to set up the database

-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- Users table (extends Supabase auth.users)
create table public.profiles (
  id uuid references auth.users on delete cascade primary key,
  email text not null,
  full_name text,
  phone text,
  is_member boolean default false,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Rooms table
create table public.rooms (
  id uuid default uuid_generate_v4() primary key,
  name text not null,
  type text not null check (type in ('meeting', 'podcast', 'office')),
  description text,
  capacity integer not null default 1,
  amenities text[] default '{}',
  images text[] default '{}',
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Bookings table
create table public.bookings (
  id uuid default uuid_generate_v4() primary key,
  user_id uuid references public.profiles(id) on delete cascade not null,
  room_id uuid references public.rooms(id) on delete cascade not null,
  start_time timestamp with time zone not null,
  end_time timestamp with time zone not null,
  status text not null default 'pending' check (status in ('pending', 'confirmed', 'cancelled')),
  total_price integer not null default 0,
  notes text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Contact form submissions
create table public.contact_submissions (
  id uuid default uuid_generate_v4() primary key,
  name text not null,
  email text not null,
  phone text,
  subject text not null,
  message text not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Insert default rooms
insert into public.rooms (name, type, description, capacity, amenities) values
  ('Mødelokale', 'meeting', 'Professionelt mødelokale med plads til 8 personer', 8, '{"Whiteboard", "Projektor", "Videokonference", "Kaffe & te"}'),
  ('Podcast Studie', 'podcast', 'Fuldt udstyret podcast studie med professionel lydkvalitet', 4, '{"Professionelle mikrofoner", "Lydtæt rum", "Hovedtelefoner", "Mixer"}'),
  ('Kontorrum', 'office', 'Dedikeret kontorrum med 4 arbejdspladser', 4, '{"Hæve-sænke borde", "Ergonomiske stole", "Skærmplads", "Opbevaring"}');

-- Row Level Security (RLS)
alter table public.profiles enable row level security;
alter table public.rooms enable row level security;
alter table public.bookings enable row level security;
alter table public.contact_submissions enable row level security;

-- Profiles policies
create policy "Users can view own profile"
  on public.profiles for select
  using (auth.uid() = id);

create policy "Users can update own profile"
  on public.profiles for update
  using (auth.uid() = id);

-- Rooms policies (everyone can view rooms)
create policy "Anyone can view rooms"
  on public.rooms for select
  to authenticated, anon
  using (true);

-- Bookings policies
create policy "Users can view all bookings"
  on public.bookings for select
  to authenticated
  using (true);

create policy "Users can create own bookings"
  on public.bookings for insert
  to authenticated
  with check (auth.uid() = user_id);

create policy "Users can update own bookings"
  on public.bookings for update
  to authenticated
  using (auth.uid() = user_id);

-- Contact submissions (anyone can create)
create policy "Anyone can create contact submission"
  on public.contact_submissions for insert
  to authenticated, anon
  with check (true);

-- Function to handle new user creation
create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, email, full_name, phone, is_member)
  values (
    new.id,
    new.email,
    new.raw_user_meta_data->>'full_name',
    new.raw_user_meta_data->>'phone',
    coalesce((new.raw_user_meta_data->>'is_member')::boolean, false)
  );
  return new;
end;
$$ language plpgsql security definer;

-- Trigger for new user creation
drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();

-- Function to update updated_at timestamp
create or replace function public.update_updated_at_column()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

-- Triggers for updated_at
create trigger update_profiles_updated_at
  before update on public.profiles
  for each row execute procedure public.update_updated_at_column();

create trigger update_bookings_updated_at
  before update on public.bookings
  for each row execute procedure public.update_updated_at_column();
