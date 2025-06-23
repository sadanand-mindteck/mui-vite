# Project Bolt

A modern, minimal, and scalable React + TypeScript dashboard application starter built with Vite, MUI, Tailwind CSS, and best-in-class libraries.

## Features
- Vite + React + TypeScript
- Material UI (MUI) with custom minimal theme
- Tailwind CSS utility classes
- Responsive sidebar with persistent/overlay modes
- Modern AppBar and layout
- Dashboard with charts (ApexCharts: Area, Pie, Bar, Line)
- Data tables (Material React Table)
- Date pickers, dropdowns, and filters
- React Router v6
- React Hook Form (RHF) for forms
- Zod for schema validation
- React Query for data fetching/caching
- Axios for HTTP requests
- Toast/snackbar notifications
- Error boundaries
- Prettier, ESLint, Husky, lint-staged for code quality
- Mock login/logout flow

## Getting Started

1. **Install dependencies:**
   ```sh
   npm install
   # or
   yarn install
   ```

2. **Run the app in development:**
   ```sh
   npm run dev
   # or
   yarn dev
   ```

3. **Build for production:**
   ```sh
   npm run build
   # or
   yarn build
   ```

## Folder Structure
- `src/` — Main source code
  - `components/` — Reusable UI components (charts, layout, forms, etc.)
  - `pages/` — Route pages (Dashboard, Analytics, Login, etc.)
  - `data/` — Mock data
  - `theme.ts` — MUI theme customization
  - `App.tsx` — Main app entry

## Scripts
- `dev` — Start development server
- `build` — Build for production
- `preview` — Preview production build
- `lint` — Run ESLint

## Standard Libraries Used
- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Material UI](https://mui.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [ApexCharts](https://apexcharts.com/)
- [React Hook Form](https://react-hook-form.com/)
- [Zod](https://zod.dev/)
- [React Query](https://tanstack.com/query/latest)
- [Axios](https://axios-http.com/)
- [React Router](https://reactrouter.com/)
- [Prettier](https://prettier.io/)
- [Husky](https://typicode.github.io/husky/)
- [Lint-staged](https://github.com/okonet/lint-staged)

## License
MIT
