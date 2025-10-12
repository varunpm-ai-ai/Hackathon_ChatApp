# Hackathon_ChatApp

A lightweight chat/demo application built during a hackathon. The project contains a Next.js React frontend (client) and a small Elixir backend (server) using Plug + Cowboy. The UI is inspired by Discord-style server/channel panels but kept intentionally simple for fast iteration.

This README documents how to run the app locally, what's inside the repository, and recommended next steps.

---

## Repository structure

- `client/` — Next.js (App Router) frontend using React + TailwindCSS. Contains UI components, pages, and client-only behaviour.
- `server/` — Elixir application (Mix project) using Plug and Cowboy to provide a minimal HTTP API (CORS enabled).
- other files: project metadata, README, and helper files.

## Tech stack

- Frontend: Next.js 15, React 19, TailwindCSS (v4), Radix UI primitives, lucide-react icons.
- Backend: Elixir (~> 1.18) with `plug_cowboy`, `jason`, and `cors_plug`.
- Build tools: npm (client), mix (server).

## Requirements

- Node.js (recommend >=18) and npm installed for the frontend.
- Elixir (>= 1.18) and Erlang/OTP installed for the backend if you want to run the server locally.

## Quick start (development)

Start the frontend (client):

```powershell
cd 'c:\Web development\Hackathon_ChatApp\client'
npm install
npm run dev
```

Open `http://localhost:3000` in your browser. The left sidebar contains small server icons; click one to open a simple server panel in the main area.

Start the backend (server):

```powershell
cd 'c:\Web development\Hackathon_ChatApp\server'
mix deps.get
mix run --no-halt
```

This starts a minimal Plug/Cowboy HTTP server. The server is lightweight and intended for demonstration; expand it with routes and websockets as needed.

## What I implemented (high-level)

- A scrollable navigation sidebar with hidden scrollbars (CSS utility).
- A simple `ServerProvider` context to store the currently selected server.
- A minimal `ServerPanel` UI that renders a side members list and a channel view for the selected server.

These features are intended to be a starting point for a chat UI prototype.

## Scripts

Client (`client/package.json`):
- `npm run dev` — start Next.js dev server
- `npm run build` — build production assets
- `npm run start` — start production server
- `npm run lint` — run ESLint

Server (Elixir):
- Use `mix` commands: `mix deps.get`, `mix run --no-halt`, `mix test` (if tests added)

## Development tips & next steps

- Persist selection in the URL: convert the server selection into a route like `/server/[id]` so the UI is linkable and bookmarkable.
- Add per-server in-memory message state and a message compose box to simulate chat behavior.
- Integrate WebSocket support (Phoenix or Cowboy websockets) for real-time messaging.
- Add tests for critical components (React testing library / Jest for client, ExUnit for server).
- Fix Tailwind/PostCSS lint warnings by ensuring your editor/CI is configured with the Tailwind plugin and PostCSS processing.

## Contributing

This repo is a hackathon project — lightweight and iterative. If you'd like to contribute:

1. Fork the repo and open a feature branch.
2. Add small, focused commits with clear messages.
3. Open a PR describing the change and how to test it.

## License

This project currently contains a `LICENSE` file at the repo root. Follow the license terms included there.

---

If you'd like, I can:

- Add a more detailed install guide for Windows-specific dev setup (Elixir/Erlang install steps).
- Implement route-based server URLs and a simple in-memory message store to demo messaging.
- Create a small `README` inside `client/` pointing to only the frontend instructions (or vice versa for the server).

Tell me which of the next tasks you want me to take on and I'll implement them.
