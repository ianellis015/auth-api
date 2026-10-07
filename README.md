# Auth API Demo

A tiny Next.js (App Router) app demonstrating a simplified login API.

> Educational demo only: plaintext passwords in a JSON file are not suitable for production.

## Setup & run

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Demo users

| Email            | Password    |
| ---------------- | ----------- |
| taylor@email.com | demo123     |
| ian@email.com    | password123 |
| jordan@email.com | welcome123  |

## Key files

- `app/page.js` – login form, success and error states
- `app/api/login/route.js` – `POST /api/login` (returns profile without password, or 401)
- `data/users.json` – demo users

## Production build

```bash
npm run build
npm start
```
