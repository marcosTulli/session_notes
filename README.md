# Session Notes

A React-based application for managing client session notes with Supabase backend integration.

## Features

- Create, read, update, and delete session notes
- Track client information, session dates, and durations
- Quick notes with character limits (500 chars)
- Material-UI design system
- Supabase for data persistence

## Tech Stack

- **Frontend**: React 19, TypeScript, Vite
- **UI**: Material-UI (MUI)
- **State Management**: Zustand, TanStack Query
- **Backend**: Supabase
- **Routing**: React Router v7
- **Testing**: Vitest
- **Code Quality**: ESLint, Prettier, Husky

## Getting Started

### Prerequisites

- Node.js (v18+)
- npm or yarn
- Supabase account and project

### Installation

1. Use the correct Node.js version (if using nvm):
```bash
nvm use
```

2. Install dependencies:
```bash
npm install
```

3. Copy `.env.example` to `.env` and fill in your Supabase credentials:
```bash
cp .env.example .env
```

### Development

```bash
npm run dev
```

### Build

```bash
npm run build
```

### Testing

```bash
npm test          # Watch mode
npm run ci-test   # CI mode
```

### Code Quality

```bash
npm run lint      # Type check and lint
npm run format    # Format code
```
## Supabase 

Project URL: [https://supabase.com/dashboard/project/uhifgefyzxlymrejdhky]

## Scripts

- `dev` - Start development server
- `build` - Build for production
- `preview` - Preview production build
- `test` - Run tests in watch mode
- `ci-test` - Run tests once for CI
- `lint` - Run TypeScript and ESLint checks
- `format` - Format code with Prettier

## Git Hooks

Pre-commit hooks are configured via Husky to run linting and tests automatically.
