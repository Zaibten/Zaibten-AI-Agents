# 🎙️ Zaibten Voice AI Agent

> An intelligent, AI-powered voice assistant developed by Zaibten to understand human speech, process requests using artificial intelligence, and respond naturally through voice output.

-------------------------------------------------------------------------------
📋 Table of Contents
-------------------------------------------------------------------------------

1. About The Project
2. Core Objectives
3. System Architecture
4. Technology Stack
5. Folder Structure
6. Installation Guide
7. Environment Configuration
8. API Endpoints
9. Deployment Guide
10. Upcoming Features
11. Security Measures
12. Development Guide
13. Current Status
14. License & Credits

-------------------------------------------------------------------------------
🌟 About The Project
-------------------------------------------------------------------------------

Zaibten Voice AI Agent is a comprehensive full-stack AI-powered voice application engineered to deliver seamless and intelligent voice-based interactions.

Users can communicate with the AI agent using natural speech. The system captures spoken input, transmits it to the backend for AI processing, and generates intelligent responses that are converted back into natural-sounding speech.

The platform is built with a modular and scalable architecture, allowing for the integration of additional AI agents, third-party tools, APIs, and enhanced voice capabilities in future iterations.

-------------------------------------------------------------------------------
🎯 Core Objectives
-------------------------------------------------------------------------------

- 🎙️ Facilitate natural voice-based human-computer interaction
- 🤖 Develop an intelligent and responsive AI voice agent
- 🧠 Process user queries using advanced AI models
- 🗣️ Convert speech to text with high accuracy
- 🔊 Transform AI responses into lifelike speech
- ⚡ Ensure fast, low-latency interactions
- 🔐 Maintain strict security for API keys and sensitive data
- 📈 Create a scalable foundation for future AI agents
- ☁️ Support both local development and production deployment

-------------------------------------------------------------------------------
🏗️ System Architecture
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

🎨 Frontend Technologies:
├── ⚛️ React - UI library for building interfaces
├── 📘 TypeScript - Type-safe JavaScript
├── ⚡ Vite - Next-generation build tool
├── 🔗 Axios - HTTP client for API requests
└── 🎨 Modern Responsive UI - Mobile-first design

⚙️ Backend Technologies:
├── 🟢 Node.js - JavaScript runtime
├── 🚂 Express.js - Web framework
├── 🍃 MongoDB - NoSQL database
├── 🧩 Mongoose - ODM for MongoDB
├── 🔐 JWT - Authentication tokens
├── 🔑 dotenv - Environment variable management
├── 🌐 CORS - Cross-origin resource sharing
├── 📋 Morgan - HTTP request logging
└── 🔄 Nodemon - Auto-restart during development

🤖 AI & Voice Technologies:
├── 🎤 Speech-to-Text - Voice recognition
├── 🧠 AI/LLM Processing - Natural language understanding
├── 🔊 Text-to-Speech - Voice synthesis
├── 🤖 AI Agents - Intelligent assistants
├── 🛠️ External Tools & APIs - Third-party integrations
└── 💬 Conversational AI - Dialogue management

☁️ Deployment Platforms:
├── 💻 Local Development - On-premise testing
└── ☁️ Vercel - Production hosting

-------------------------------------------------------------------------------
📁 Folder Structure
-------------------------------------------------------------------------------

voice-ai-agent/
│
├── 📁 frontend/
│   ├── 📁 src/
│   │   ├── 📁 components/     - Reusable UI components
│   │   ├── 📁 pages/          - Page views
│   │   ├── 📁 services/       - API service layer
│   │   ├── 📁 hooks/          - Custom React hooks
│   │   ├── 📁 utils/          - Utility functions
│   │   ├── 📄 App.tsx         - Main application
│   │   └── 📄 main.tsx        - Entry point
│   ├── 📁 public/             - Static assets
│   ├── 📄 package.json        - Dependencies
│   ├── 📄 vite.config.ts      - Vite configuration
│   └── 📄 README.md           - Frontend documentation
│
├── 📁 backend/
│   ├── 📁 controllers/        - Request handlers
│   ├── 📁 models/             - Database models
│   ├── 📁 routes/             - API routes
│   ├── 📁 middleware/         - Middleware functions
│   ├── 📁 services/           - Business logic
│   ├── 📄 index.js            - Server entry point
│   ├── 📄 package.json        - Dependencies
│   ├── 📄 vercel.json         - Vercel configuration
│   └── 📄 README.md           - Backend documentation
│
├── 📄 .gitignore              - Git ignore file
└── 📄 README.md               - Project documentation

-------------------------------------------------------------------------------
📥 Installation Guide
-------------------------------------------------------------------------------

📋 System Prerequisites
-------------------------------
- Node.js (v16.0.0 or higher)
- npm (v7.0.0 or higher) or yarn
- MongoDB (local installation or MongoDB Atlas account)
- OpenAI API Key (or equivalent AI service)

🔧 Step-by-Step Installation
-------------------------------

Step 1: Clone the Repository
-------------------------------
git clone <YOUR_GITHUB_REPOSITORY_URL>
cd voice-ai-agent

Step 2: Set Up Backend
-------------------------------
cd backend
npm install
npm run dev

The backend server will start at: http://localhost:5000

Step 3: Set Up Frontend
-------------------------------
Open a new terminal window:

cd frontend
npm install
npm run dev

The frontend application will be available at: http://localhost:5173

-------------------------------------------------------------------------------
🔐 Environment Configuration
-------------------------------------------------------------------------------

Backend Configuration
-------------------------------
Create a .env file inside the backend directory:

backend/.env

Required variables:
PORT=5000
NODE_ENV=development
MONGODB_URI=your_mongodb_connection_string
OPENAI_API_KEY=your_openai_api_key

⚠️ IMPORTANT: Never commit the .env file to version control.

Frontend Configuration
-------------------------------
Create a .env file inside the frontend directory:

frontend/.env

Required variables:
VITE_API_URL=http://localhost:5000

-------------------------------------------------------------------------------
🔌 API Endpoints
-------------------------------------------------------------------------------

Root Endpoint
-------------------------------
GET /

Response:
{
  "success": true,
  "message": "Voice AI Agent Backend is running successfully!"
}

Health Check
-------------------------------
GET /api/health

Response:
{
  "success": true,
  "server": "Running",
  "database": "Connected",
  "timestamp": "2026-08-25T00:00:00.000Z"
}

Database Status
-------------------------------
GET /api/database

Response:
{
  "success": true,
  "message": "Database connection is healthy",
  "database": "Connected"
}

-------------------------------------------------------------------------------
☁️ Deployment Guide
-------------------------------------------------------------------------------

Local Development
-------------------------------
Frontend: Vite development server (http://localhost:5173)
Backend: Node.js with Express (http://localhost:5000)
Database: MongoDB (local or Atlas)

Production Deployment
-------------------------------
Frontend: Deploy to Vercel
Backend: Deploy to Vercel (serverless functions)
Database: MongoDB Atlas (cloud-hosted)

Vercel Environment Variables
-------------------------------

Backend (configure in Vercel dashboard):
- MONGODB_URI - MongoDB connection string
- OPENAI_API_KEY - OpenAI API key
- NODE_ENV - Set to "production"

Frontend (configure in Vercel dashboard):
- VITE_API_URL - Backend API URL (e.g., https://your-backend.vercel.app)

-------------------------------------------------------------------------------
🧠 Upcoming Features
-------------------------------------------------------------------------------

- 🎤 Real-time voice conversations with low latency
- 🗣️ Advanced Speech-to-Text with multiple language support
- 🔊 Natural Text-to-Speech with voice customization
- 🧠 Memory-enabled AI agents with context retention
- 👤 User authentication and profile management
- 💬 Conversation history and search
- 📊 AI usage analytics and insights
- 🧰 Tool/function calling for external actions
- 🌐 Support for multiple languages
- 🎭 Multiple AI personalities to choose from
- 🤖 Specialized AI agents for different domains
- 📱 Mobile application for on-the-go access
- ⚡ Streaming AI responses for real-time feedback

-------------------------------------------------------------------------------
🔒 Security Measures
-------------------------------------------------------------------------------

- 🔐 API keys and secrets stored securely in environment variables
- 🛡️ AI API access restricted to backend only
- 🚫 .env files excluded from Git version control
- 🌐 Proper CORS configuration to prevent unauthorized access
- 🔑 Authentication-ready architecture for future implementation
- 🗄️ Secure MongoDB connection with authentication
- 🛡️ Input validation and sanitization
- 📊 Request logging for monitoring and debugging

-------------------------------------------------------------------------------
👨‍💻 Development Guide
-------------------------------------------------------------------------------

Starting the Backend Server
-------------------------------
cd backend
npm run dev

Starting the Frontend Application
-------------------------------
cd frontend
npm run dev

Development Workflow
-------------------------------
1. Both applications must run simultaneously
2. Frontend communicates with backend via REST API
3. Backend connects to MongoDB database
4. Backend integrates with AI services
5. All API requests are logged for debugging

-------------------------------------------------------------------------------
📌 Current Status
-------------------------------------------------------------------------------

🚧 Active Development Phase

The project is under continuous development and enhancement. New AI capabilities, voice features, and system improvements are being added regularly.

-------------------------------------------------------------------------------
👨‍💻 Developed By
-------------------------------------------------------------------------------

🚀 Zaibten
Zaibten AI Agents Division
Building intelligent, practical, and scalable AI solutions for the future.

-------------------------------------------------------------------------------
📄 License
-------------------------------------------------------------------------------

This project is intended for development and research purposes only.

-------------------------------------------------------------------------------
⭐ Show Your Support
-------------------------------------------------------------------------------

If you find this project valuable, please consider giving the repository a star to show your support!

-------------------------------------------------------------------------------
Built with ❤️ + 🤖 by Zaibten
-------------------------------------------------------------------------------