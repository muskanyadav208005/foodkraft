# Fridge to Recipe

AI-powered React application that converts available ingredients into structured recipes using Gemini.

## Features

- Free-form ingredient input
- AI-generated structured recipes
- Interactive checklist
- Adjustable servings
- Ingredient swaps
- Loading state
- Error handling
- Retry option
- Handles malformed AI responses
- Mobile responsive

## Tech Stack

- React
- Express
- Gemini API
- Node.js

## Setup

Client

```bash
cd client
npm install
npm run dev
```

Server

```bash
cd server
npm install
npm start
```

Create a `.env` inside server

```
GEMINI_API_KEY=YOUR_KEY
```

## AI Usage

ChatGPT was used to assist with architecture, debugging, and implementation. All code was reviewed, integrated, and tested manually.

## Known Limitations

- AI output depends on model quality.
- Ingredient substitutions may require user verification.

## Time Spent

Approximately 8 hours.