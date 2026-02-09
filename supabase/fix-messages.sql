-- FIX: Kør denne SQL i Supabase SQL Editor for at aktivere beskeder
-- Gå til: https://supabase.com/dashboard → dit projekt → SQL Editor → New query

-- 1. Opret tabellen (hvis den ikke findes)
create table if not exists public.contact_submissions (
  id uuid default uuid_generate_v4() primary key,
  name text not null,
  email text not null,
  phone text,
  subject text not null,
  message text not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- 2. Aktiver RLS
alter table public.contact_submissions enable row level security;

-- 3. Slet gamle policies (hvis de findes)
drop policy if exists "Anyone can create contact submission" on public.contact_submissions;
drop policy if exists "Authenticated users can view contact submissions" on public.contact_submissions;
drop policy if exists "Authenticated users can delete contact submissions" on public.contact_submissions;

-- 4. Opret nye policies
create policy "Anyone can create contact submission"
  on public.contact_submissions for insert
  to authenticated, anon
  with check (true);

create policy "Authenticated users can view contact submissions"
  on public.contact_submissions for select
  to authenticated
  using (true);

create policy "Authenticated users can delete contact submissions"
  on public.contact_submissions for delete
  to authenticated
  using (true);

-- Færdig! Nu skulle beskeder virke.
