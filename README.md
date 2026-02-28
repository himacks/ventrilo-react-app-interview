# Intern React Interview Exercise

A chat app skeleton built with React + TypeScript + Vite. The layout and navigation work, but most functionality is missing — that's the exercise.

## Prerequisites

- [Node.js](https://nodejs.org/) v18 or later
- npm (comes with Node)

## Setup

```bash
# 1. Clone the repo
git clone <repo-url>
cd intern-react-app

# 2. Install dependencies
npm install

# 3. Start the dev server
npm run dev
```

The app will be running at **http://localhost:5173**.

## Project Structure

```
src/
├── App.tsx                  # Root component — renders Sidebar, ChatArea, SettingsDialog
├── App.css                  # All styles
├── components/
│   ├── Sidebar.tsx          # Chat list + user profile button
│   ├── ChatArea.tsx         # Chat area
│   └── SettingsDialog.tsx   # Settings panel
├── data/
│   └── mockChats.ts         # Static chat data with messages
└── main.tsx                 # Entry point
```

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server with hot reload |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |

## Tech Stack

- [React](https://react.dev/) 19
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vite.dev/) 7
