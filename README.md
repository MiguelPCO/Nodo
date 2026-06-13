# Archivo NODO

Web de marketing y aplicación privada para **Archivo NODO** — cápsulas del tiempo familiares que unen lo físico y lo digital.

## Qué es

Archivo NODO permite a las familias crear cápsulas del tiempo con fotos, notas y audios vinculados mediante QR a objetos físicos. Sin feed, sin likes, sin desconocidos.

## Tech Stack

- **Next.js 16** — App Router, Server Components, Server Actions
- **TypeScript** — strict mode
- **Tailwind CSS v4** — design tokens propios (paper, walnut, sage, terracotta, ink)
- **Supabase** — auth (magic link), PostgreSQL + RLS, Storage
- **Framer Motion** — animaciones `Reveal` en marketing
- **MDX** — journal/blog con `next-mdx-remote-client`
- **pnpm** — gestor de paquetes

## Estructura

```
src/
  app/
    (marketing)/     # Páginas públicas (/, /memory-box, /regalos, /como-funciona, /archivo, /journal/*)
    (app)/           # App autenticada (/dashboard, /capsule/new, /capsule/[id])
    auth/            # Magic link (/auth/login, /auth/verify)
    api/             # /api/auth/callback, /api/waitlist
  components/
    app/             # AppShell, CapsuleCard, MemoryUploader, MemoryGrid, wizard/*
    marketing/       # Hero, ProductCard, CTASection, PricingTiers...
    ui/              # Button, DateSeal, QRBadge, Modal...
    layout/          # Header, Footer, Section, Container
    illustrations/   # SVGs inline
  lib/
    actions/         # Server Actions: capsule.ts, memory.ts
    supabase-server.ts
    supabase-browser.ts
    auth.ts
supabase/
  migrations/        # 001_families, 002_family_members, 003_capsules, 004_memories
```

## Base de datos

| Tabla | Descripción |
|---|---|
| `families` | Familia asociada a un usuario |
| `family_members` | Miembros con roles: owner / editor / viewer |
| `capsules` | Cápsulas del tiempo (ocasión, nombre, fecha apertura) |
| `memories` | Recuerdos: fotos (Storage) o notas de texto |

RLS activo en todas las tablas. Usuarios solo ven sus propios datos.

## Auth

Magic link vía Supabase. Flujo:

1. `/auth/login` → email → `signInWithOtp`
2. `/auth/verify` → pantalla de confirmación
3. `/api/auth/callback` → PKCE exchange → redirect `/dashboard`
4. `(app)/layout.tsx` → gate: sin sesión redirige a `/auth/login`

## Storage

Bucket privado `capsule-media`. Path: `{family_id}/{capsule_id}/{uuid}.ext`

Políticas RLS en `storage.objects` — solo miembros de la familia pueden leer/escribir.

## Variables de entorno

```env
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
```

## Instalación

```bash
pnpm install
pnpm dev        # http://localhost:3000
pnpm build      # build de producción
```

## Migraciones Supabase

Ejecutar en orden en Supabase SQL Editor:

```
supabase/migrations/001_families.sql
supabase/migrations/002_family_members.sql
supabase/migrations/003_capsules.sql
supabase/migrations/004_memories.sql
```

## Despliegue

Configurado para Vercel. Variables de entorno requeridas: `NEXT_PUBLIC_SUPABASE_URL` y `NEXT_PUBLIC_SUPABASE_ANON_KEY`.

Añadir en Supabase → Authentication → URL Configuration:
- Site URL: `https://tu-dominio.vercel.app`
- Redirect URLs: `https://tu-dominio.vercel.app/**`
