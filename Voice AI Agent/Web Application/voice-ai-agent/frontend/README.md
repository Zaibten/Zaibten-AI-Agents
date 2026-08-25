💻 Zaibten Voice AI Agent — Frontend

🎙️ Modern React + TypeScript frontend for the Zaibten Voice AI Agent.

-------------------------------------------------------------------------------
🌟 About
-------------------------------------------------------------------------------

This is the frontend application for the Zaibten Voice AI Agent.

The application provides the user interface for interacting with the AI voice assistant and communicates with the backend through REST APIs.

The frontend is designed to provide a clean, modern, responsive, and scalable experience.

-------------------------------------------------------------------------------
🛠️ Technology Stack
-------------------------------------------------------------------------------

- ⚛️ React
- 📘 TypeScript
- ⚡ Vite
- 🔗 Axios
- 🎨 CSS / UI Components
- ☁️ Vercel

-------------------------------------------------------------------------------
📁 Project Structure
-------------------------------------------------------------------------------

frontend/
│
├── 📁 public/
│
├── 📁 src/
│   ├── 📁 components/
│   ├── 📁 pages/
│   ├── 📁 layouts/
│   ├── 📁 services/
│   ├── 📁 hooks/
│   ├── 📁 utils/
│   ├── 📄 App.tsx
│   ├── 📄 main.tsx
│   └── 📄 ...
│
├── 📄 index.html
├── 📄 package.json
├── 📄 tsconfig.json
├── 📄 vite.config.ts
└── 📄 README.md

-------------------------------------------------------------------------------
🚀 Installation
-------------------------------------------------------------------------------

From the frontend directory:

npm install

-------------------------------------------------------------------------------
▶️ Development
-------------------------------------------------------------------------------

Run:

npm run dev

Vite will provide a local URL similar to:

http://localhost:5173

-------------------------------------------------------------------------------
🔗 Backend Connection
-------------------------------------------------------------------------------

The frontend communicates with the backend using Axios.

Create a .env file in the frontend directory:

.env

Example:

VITE_API_URL=http://localhost:5000

-------------------------------------------------------------------------------
🔌 Axios Configuration
-------------------------------------------------------------------------------

Example configuration:

import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;

-------------------------------------------------------------------------------
🎙️ Voice AI Flow
-------------------------------------------------------------------------------

The frontend will eventually follow this flow:

🎙️ User Speaks
       │
       ▼
🎤 Microphone
       │
       ▼
📝 Speech-to-Text
       │
       ▼
🤖 AI Backend
       │
       ▼
🧠 AI Processing
       │
       ▼
🔊 Text-to-Speech
       │
       ▼
🎧 User Hears Response

-------------------------------------------------------------------------------
🤖 AI Features
-------------------------------------------------------------------------------

The frontend architecture is designed to support:

- 🎙️ Voice input
- 🔊 Voice output
- 💬 AI conversations
- 🧠 Conversation history
- ⚡ Streaming responses
- 🎭 AI personalities
- 🌐 Multiple languages
- 🤖 Multiple AI agents
- 🛠️ AI tools

-------------------------------------------------------------------------------
🧩 Components
-------------------------------------------------------------------------------

Future components may include:

- 🎙️ VoiceButton
- 🎧 AudioVisualizer
- 💬 ChatInterface
- 🤖 AIResponse
- 📝 Transcript
- 🔊 VoicePlayer
- ⚙️ Settings
- 👤 UserProfile
- 📜 ConversationHistory

-------------------------------------------------------------------------------
🌍 Production Environment
-------------------------------------------------------------------------------

For Vercel deployment, configure:

VITE_API_URL=https://your-backend.vercel.app

⚠️ Important: Never put private API keys such as OpenAI keys in frontend environment variables.

Only public configuration should use the VITE_ prefix.

-------------------------------------------------------------------------------
☁️ Deployment
-------------------------------------------------------------------------------

Build the application:

npm run build

Preview the production build locally:

npm run preview

Deploy to Vercel:

vercel

-------------------------------------------------------------------------------
🔄 Application Architecture
-------------------------------------------------------------------------------

┌──────────────────────────┐
│      React Frontend      │
│      TypeScript + Vite   │
└────────────┬─────────────┘
             │
             │ Axios
             ▼
┌──────────────────────────┐
│      Express Backend     │
│       Node.js API        │
└────────────┬─────────────┘
             │
       ┌─────┴─────┐
       ▼           ▼
   🤖 AI APIs   🗄️ MongoDB

-------------------------------------------------------------------------------
🧪 Development
-------------------------------------------------------------------------------

Start frontend:

npm run dev

Start backend separately:

cd ../backend
npm run dev

Both applications should be running simultaneously during development.

-------------------------------------------------------------------------------
🎨 Development Guidelines
-------------------------------------------------------------------------------

- Use TypeScript for new components
- Keep components reusable
- Keep API calls inside service/API files
- Do not expose private API keys
- Keep UI responsive
- Use environment variables for API URLs
- Follow a modular folder structure

-------------------------------------------------------------------------------
🚧 Project Status
-------------------------------------------------------------------------------

🚧 Active Development

The frontend is currently being developed as part of the larger Zaibten Voice AI Agent project.

-------------------------------------------------------------------------------
👨‍💻 Maintained By
-------------------------------------------------------------------------------

Zaibten

🚀 Building intelligent, practical, and scalable AI agents.