# Supabase Setup Guide - The Office

Denne guide viser dig hvordan du sætter Supabase op til booking-systemet.

## Trin 1: Opret Supabase Projekt

1. Gå til [supabase.com](https://supabase.com)
2. Klik **Start your project** (eller log ind hvis du har en konto)
3. Klik **New project**
4. Udfyld:
   - **Name:** `the-office` (eller hvad du vil)
   - **Database Password:** Vælg et stærkt password (gem det!)
   - **Region:** Vælg `West EU (Ireland)` for bedste hastighed i DK
5. Klik **Create new project** - vent ca. 2 minutter

## Trin 2: Hent dine API Keys

1. Gå til **Project Settings** (tandhjul i venstre side)
2. Klik på **API** i menuen
3. Kopier disse værdier:
   - **Project URL** (starter med `https://`)
   - **anon public** key (under "Project API keys")

## Trin 3: Opdater .env.local

Åbn filen `.env.local` i projektets rod og indsæt dine værdier:

```
NEXT_PUBLIC_SUPABASE_URL=https://DIT_PROJEKT_ID.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=din_anon_key_her
```

## Trin 4: Kør Database Schema

1. I Supabase, gå til **SQL Editor** (i venstre menu)
2. Klik **New query**
3. Kopier HELE indholdet fra filen `supabase/schema.sql` i dette projekt
4. Klik **Run** (eller Cmd+Enter)
5. Du skulle se "Success. No rows returned"

## Trin 5: Aktiver Email Auth

1. Gå til **Authentication** → **Providers**
2. Sørg for at **Email** er aktiveret
3. Under **Authentication** → **Settings**:
   - Sæt **Site URL** til `http://localhost:3000` (til udvikling)
   - Tilføj `http://localhost:3000` til **Redirect URLs**

## Trin 6: Test det virker

1. Genstart dev serveren: `npm run dev`
2. Gå til `http://localhost:3000/opret-konto`
3. Opret en testkonto
4. Tjek din email for bekræftelse (eller deaktiver email bekræftelse i Supabase)
5. Log ind og prøv at booke et lokale

## Fejlfinding

### "Invalid API key"
- Tjek at du har kopieret hele anon key (den er lang!)
- Sørg for ingen mellemrum før/efter i .env.local

### "relation does not exist"
- Du har ikke kørt schema.sql - gå til Trin 4

### Kan ikke logge ind
- Tjek at Email provider er aktiveret
- Tjek spam-mappe for bekræftelsesmail

### Bookinger gemmes ikke
- Tjek browser console for fejl
- Sørg for at du er logget ind

## Produktion

Når du skal i produktion:
1. Opdater **Site URL** i Supabase til dit rigtige domæne
2. Tilføj dit domæne til **Redirect URLs**
3. Opdater `.env.local` på din hosting (Vercel, Netlify, etc.)

## Database Tabeller

Skemaet opretter disse tabeller:
- `profiles` - Brugerdata (navn, telefon, medlemsstatus)
- `rooms` - Lokaler (mødelokale, podcast studie, kontor)
- `bookings` - Alle bookinger
- `contact_submissions` - Kontaktformular beskeder

---

Har du brug for hjælp? Åbn en issue på GitHub eller kontakt os.
