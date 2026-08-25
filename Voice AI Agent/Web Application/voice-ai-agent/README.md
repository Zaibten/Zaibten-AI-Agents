🎙️ Zaibten Voice AI Agent

An intelligent, AI-powered voice assistant built by Zaibten to understand human speech, process requests using AI, and respond naturally through voice.

-------------------------------------------------------------------------------
🌟 About The Project
-------------------------------------------------------------------------------

Zaibten Voice AI Agent is a full-stack AI-powered voice application designed to provide natural and intelligent voice interactions.

The system allows users to communicate with an AI agent using their voice. The application processes spoken input, sends it to the backend for AI processing, and returns an intelligent response that can be converted back into speech.

The project is designed with a scalable architecture so that additional AI agents, tools, APIs, and voice capabilities can be added in the future.

-------------------------------------------------------------------------------
🎯 Project Goals
-------------------------------------------------------------------------------

- 🎙️ Enable natural voice-based interaction
- 🤖 Build an intelligent AI voice agent
- 🧠 Process user requests using AI
- 🗣️ Convert speech to text
- 🔊 Convert AI responses back to speech
- ⚡ Provide fast and responsive interactions
- 🔐 Keep API keys and sensitive data secure
- 📈 Build a scalable architecture for future AI agents
- ☁️ Support both local and production deployment

-------------------------------------------------------------------------------
🏗️ Architecture
-------------------------------------------------------------------------------

                    🎙️ USER
                       │
                       ▼
              ┌─────────────────┐
              │  React Frontend │
              │ TypeScript/Vite │
              └────────┬────────┘
                       │
                       │ REST API / Axios
                       ▼
              ┌─────────────────┐
              │ Node.js Backend │
              │ Express.js      │
              └────────┬────────┘
                       │
             ┌─────────┼─────────┐
             ▼         ▼         ▼
         🤖 AI API   🗄️ MongoDB  🔊 Voice
                       │
                       ▼
                 📊 Data Storage

-------------------------------------------------------------------------------
🛠️ Technology Stack
-------------------------------------------------------------------------------

🎨 Frontend:
- ⚛️ React
- 📘 TypeScript
- ⚡ Vite
- 🔗 Axios
- 🎨 Modern responsive UI

⚙️ Backend:
- 🟢 Node.js
- 🚂 Express.js
- 🍃 MongoDB
- 🧩 Mongoose
- 🔐 JWT
- 🔑 dotenv
- 🌐 CORS
- 📋 Morgan
- 🔄 Nodemon

🤖 AI & Voice:
- 🎤 Speech-to-Text
- 🧠 AI/LLM processing
- 🔊 Text-to-Speech
- 🤖 AI Agents
- 🛠️ External tools and APIs
- 💬 Conversational AI

-------------------------------------------------------------------------------
📁 Project Structure
-------------------------------------------------------------------------------

voice-ai-agent/
│
├── 📁 frontend/
│   ├── 📁 src/
│   ├── 📁 public/
│   ├── 📄 package.json
│   ├── 📄 vite.config.ts
│   └── 📄 README.md
│
├── 📁 backend/
│   ├── 📁 controllers/
│   ├── 📁 models/
│   ├── 📁 routes/
│   ├── 📁 middleware/
│   ├── 📄 index.js
│   ├── 📄 package.json
│   ├── 📄 vercel.json
│   └── 📄 README.md
│
├── 📄 .gitignore
└── 📄 README.md

-------------------------------------------------------------------------------
🚀 Getting Started
-------------------------------------------------------------------------------

1️⃣ Clone the Repository
-------------------------------

git clone <YOUR_GITHUB_REPOSITORY_URL>
cd voice-ai-agent

2️⃣ Setup Backend
-------------------------------

cd backend
npm install
npm run dev

Backend will run at: http://localhost:5000

3️⃣ Setup Frontend
-------------------------------

Open another terminal:

cd frontend
npm install
npm run dev

Frontend will run at: http://localhost:5173

-------------------------------------------------------------------------------
🔐 Environment Variables
-------------------------------------------------------------------------------

Backend
-------------------------------

Create a .env file in the backend/ directory:

backend/.env

Example:

PORT=5000
NODE_ENV=development

MONGODB_URI=your_mongodb_connection_string
OPENAI_API_KEY=your_openai_api_key

⚠️ Never commit your .env file to GitHub.

-------------------------------------------------------------------------------
🌍 Deployment
-------------------------------------------------------------------------------

💻 Local:
- Frontend → Vite
- Backend → Node.js + Express
- Database → MongoDB

☁️ Production:
- Frontend → Vercel
- Backend → Vercel
- Database → MongoDB Atlas

-------------------------------------------------------------------------------
🔌 Backend API
-------------------------------------------------------------------------------

🏠 Root
-------------------------------

GET /

Returns:
{
  "success": true,
  "message": "Voice AI Agent Backend is running successfully!"
}

❤️ Health Check
-------------------------------

GET /api/health

🗄️ Database Check
-------------------------------

GET /api/database

-------------------------------------------------------------------------------
🧠 Future Features
-------------------------------------------------------------------------------

- 🎤 Real-time voice conversations
- 🗣️ Advanced Speech-to-Text
- 🔊 Natural Text-to-Speech
- 🧠 Memory-enabled AI agents
- 👤 User authentication
- 💬 Conversation history
- 📊 AI usage analytics
- 🧰 Tool/function calling
- 🌐 Multiple language support
- 🎭 Multiple AI personalities
- 🤖 Multiple specialized AI agents
- 📱 Mobile application
- ⚡ Streaming AI responses

-------------------------------------------------------------------------------
🔒 Security
-------------------------------------------------------------------------------

- 🔐 API keys stored in environment variables
- 🛡️ Backend-only AI API access
- 🚫 .env excluded from Git
- 🌐 CORS configuration
- 🔑 Authentication-ready architecture
- 🗄️ Secure MongoDB connection

-------------------------------------------------------------------------------
👨‍💻 Development
-------------------------------------------------------------------------------

Start Backend:
-------------------------------
cd backend
npm run dev

Start Frontend:
-------------------------------
cd frontend
npm run dev

-------------------------------------------------------------------------------
📌 Project Status
-------------------------------------------------------------------------------

🚧 Currently in active development.
The project is being continuously developed and expanded with new AI and voice capabilities.

-------------------------------------------------------------------------------
👨‍💻 Developed By
-------------------------------------------------------------------------------

🚀 Zaibten
Zaibten AI Agents
Building intelligent, practical, and scalable AI agents for the future.

-------------------------------------------------------------------------------
📄 License
-------------------------------------------------------------------------------

This project is currently intended for development and research purposes.

-------------------------------------------------------------------------------

⭐ If you find this project interesting, consider giving the repository a star!

Built with ❤️ + 🤖 by Zaibten