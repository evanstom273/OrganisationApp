# Warmspace Scaffold

Frontend-only foundation built with:

- React
- TypeScript
- Vite
- Tailwind CSS
- React Router

It includes routing, a responsive app shell, desktop and mobile navigation, IndexedDB-backed settings persistence, and light/dark/system theming.

## Run

```bash
npm install
npm run dev
```

Useful commands:

```bash
npm run check
npm run lint
npm run build
```

## Structure

```text
src/
  components/
    layout/
    navigation/
    settings/
  db/
  hooks/
  lib/
  pages/
  routes/
  services/
  styles/
  types/
```

## Notes

- Routing lives in `src/routes/`
- The app shell lives in `src/components/layout/AppShell.tsx`
- Navigation is data-driven from `src/components/navigation/navigationItems.ts`
- Settings are stored in IndexedDB through `src/db/database.ts` and `src/services/settingsService.ts`
