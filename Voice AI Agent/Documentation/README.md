# 📚 Zaibten Voice AI Agent — Documentation

> Complete technical documentation for the Zaibten Voice AI Agent project — a full-stack AI-powered voice application.

-------------------------------------------------------------------------------
📋 Table of Contents
-------------------------------------------------------------------------------

1. Project Overview
2. System Architecture
3. Technology Stack
4. Installation & Setup
5. Backend Documentation
6. Frontend Documentation
7. API Reference
8. Database Schema
9. Deployment Guide
10. Security Guidelines
11. Development Workflow
12. Testing
13. Troubleshooting
14. Contributing Guidelines
15. License & Credits

-------------------------------------------------------------------------------
1. 📖 Project Overview
-------------------------------------------------------------------------------

Zaibten Voice AI Agent is an intelligent, AI-powered voice assistant developed by Zaibten. The application enables natural voice-based interaction with an AI agent, processing spoken input through advanced AI models and delivering intelligent responses through voice output.

The platform is built with a modular and scalable architecture, allowing for future expansion with additional AI agents, tools, APIs, and voice capabilities.

-------------------------------------------------------------------------------
🎯 Core Features
-------------------------------------------------------------------------------

- 🎙️ Natural voice-based interaction
- 🤖 Intelligent AI voice agent
- 🧠 AI-powered request processing
- 🗣️ Speech-to-Text conversion
- 🔊 Text-to-Speech conversion
- ⚡ Fast and responsive interactions
- 🔐 Secure API key management
- 📈 Scalable architecture
- ☁️ Local and production deployment support

-------------------------------------------------------------------------------
2. 🏗️ System Architecture
-------------------------------------------------------------------------------

┌─────────────────────────────────────────────────────────────────────┐
│                          🎙️ USER                                  │
└─────────────────────────────────────────────────────────────────────┘
                                    │
                                    ▼
┌─────────────────────────────────────────────────────────────────────┐
│                   React Frontend (TypeScript/Vite)                 │
│                     Modern Responsive UI                          │
└─────────────────────────────────────────────────────────────────────┘
                                    │
                                    │ REST API / Axios
                                    ▼
┌─────────────────────────────────────────────────────────────────────┐
│                  Node.js Backend (Express.js)                     │
│                      REST API Server                             │
└─────────────────────────────────────────────────────────────────────┘
                                    │
                    ┌───────────────┼───────────────┐
                    ▼               ▼               ▼
┌───────────────────────┐ ┌─────────────────┐ ┌─────────────────────┐
│    🤖 AI API          │ │   🗄️ MongoDB    │ │   🔊 Voice Service  │
│   (OpenAI/LLMs)       │ │   (Database)    │ │   (STT/TTS)        │
└───────────────────────┘ └─────────────────┘ └─────────────────────┘
                                    │
                                    ▼
                          ┌─────────────────┐
                          │  📊 Data Storage │
                          └─────────────────┘

-------------------------------------------------------------------------------
🔁 Data Flow
-------------------------------------------------------------------------------

1. User speaks into microphone
2. Frontend captures audio and converts to text (STT)
3. Text is sent to backend via REST API
4. Backend processes text using AI/LLM
5. AI generates intelligent response
6. Backend returns response to frontend
7. Frontend converts response to speech (TTS)
8. User hears AI response through speakers

-------------------------------------------------------------------------------
3. 🛠️ Technology Stack
-------------------------------------------------------------------------------

🎨 Frontend:
├── ⚛️ React 18.x - UI library
├── 📘 TypeScript 5.x - Type-safe JavaScript
├── ⚡ Vite 5.x - Build tool and dev server
├── 🔗 Axios 1.x - HTTP client
└── 🎨 CSS Modules - Component styling

⚙️ Backend:
├── 🟢 Node.js 16+ - JavaScript runtime
├── 🚂 Express.js 4.x - Web framework
├── 🍃 MongoDB 6.x - NoSQL database
├── 🧩 Mongoose 7.x - ODM library
├── 🔐 JWT - Authentication
├── 🔑 dotenv - Environment management
├── 🌐 CORS - Cross-origin support
├── 📋 Morgan - HTTP logging
└── 🔄 Nodemon - Development auto-restart

🤖 AI & Voice:
├── 🎤 Speech-to-Text - Voice recognition services
├── 🧠 OpenAI API - LLM processing
├── 🔊 Text-to-Speech - Voice synthesis
├── 🤖 AI Agents - Intelligent assistants
└── 💬 Conversational AI - Dialogue management

☁️ Deployment:
├── 💻 Local Development - On-premise testing
└── ☁️ Vercel - Production hosting

-------------------------------------------------------------------------------
4. 📥 Installation & Setup
-------------------------------------------------------------------------------

📋 Prerequisites
-------------------------------
Before installation, ensure you have:

- Node.js (v16.0.0 or higher)
- npm (v7.0.0 or higher) or yarn
- MongoDB (local installation or MongoDB Atlas)
- OpenAI API Key (or equivalent AI service)
- Git (for version control)

🔧 Installation Steps
-------------------------------

Step 1: Clone Repository
-------------------------------
git clone <YOUR_GITHUB_REPOSITORY_URL>
cd voice-ai-agent

Step 2: Backend Setup
-------------------------------
cd backend
npm install
cp .env.example .env  # Copy environment template
# Edit .env with your configuration
npm run dev

Step 3: Frontend Setup
-------------------------------
cd frontend
npm install
cp .env.example .env  # Copy environment template
# Edit .env with your configuration
npm run dev

-------------------------------------------------------------------------------
5. ⚙️ Backend Documentation
-------------------------------------------------------------------------------

📁 Directory Structure
-------------------------------
backend/
│
├── 📁 controllers/          - Request handlers
│   ├── authController.js    - Authentication logic
│   ├── chatController.js    - Chat processing
│   └── healthController.js  - Health checks
│
├── 📁 models/               - Database models
│   ├── User.js              - User schema
│   ├── Conversation.js      - Conversation schema
│   └── Agent.js             - AI agent schema
│
├── 📁 routes/               - API routes
│   ├── authRoutes.js        - Authentication endpoints
│   ├── chatRoutes.js        - Chat endpoints
│   └── healthRoutes.js      - Health check endpoints
│
├── 📁 middleware/           - Middleware functions
│   ├── auth.js              - JWT authentication
│   ├── errorHandler.js      - Error handling
│   └── rateLimiter.js       - Rate limiting
│
├── 📁 services/             - Business logic
│   ├── aiService.js         - AI integration
│   ├── voiceService.js      - Voice processing
│   └── dbService.js         - Database operations
│
├── 📄 index.js              - Server entry point
├── 📄 package.json          - Dependencies
├── 📄 vercel.json           - Vercel deployment config
├── 🔐 .env                  - Environment variables
└── 📄 README.md             - Backend documentation

🔐 Environment Variables
-------------------------------
Create a .env file:

PORT=5000
NODE_ENV=development

# Database
MONGODB_URI=mongodb://localhost:27017/voice-ai-agent

# AI Services
OPENAI_API_KEY=your_openai_api_key

# JWT (optional for future auth)
JWT_SECRET=your_jwt_secret_key

# CORS
FRONTEND_URL=http://localhost:5173

-------------------------------------------------------------------------------
6. 💻 Frontend Documentation
-------------------------------------------------------------------------------

📁 Directory Structure
-------------------------------
frontend/
│
├── 📁 src/
│   ├── 📁 components/       - Reusable UI components
│   │   ├── VoiceButton.tsx  - Voice input button
│   │   ├── ChatInterface.tsx - Chat display
│   │   └── AudioVisualizer.tsx - Voice visualization
│   │
│   ├── 📁 pages/            - Page components
│   │   ├── Home.tsx         - Home page
│   │   └── Settings.tsx     - Settings page
│   │
│   ├── 📁 services/         - API service layer
│   │   └── api.ts           - Axios configuration
│   │
│   ├── 📁 hooks/            - Custom React hooks
│   │   ├── useVoice.ts      - Voice functionality
│   │   └── useChat.ts       - Chat functionality
│   │
│   ├── 📁 utils/            - Utility functions
│   │   └── constants.ts     - Application constants
│   │
│   ├── 📄 App.tsx           - Main application
│   └── 📄 main.tsx          - Entry point
│
├── 📄 index.html            - HTML template
├── 📄 package.json          - Dependencies
├── 📄 tsconfig.json         - TypeScript config
├── 📄 vite.config.ts        - Vite config
├── 🔐 .env                  - Environment variables
└── 📄 README.md             - Frontend documentation

🔐 Environment Variables
-------------------------------
Create a .env file:

VITE_API_URL=http://localhost:5000

-------------------------------------------------------------------------------
7. 📚 API Reference
-------------------------------------------------------------------------------

Base URL: http://localhost:5000

📌 Authentication Endpoints
-------------------------------

POST /api/auth/register
Description: Register a new user
Request Body:
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "securepassword123"
}
Response:
{
  "success": true,
  "message": "User registered successfully",
  "user": {
    "id": "user_id",
    "name": "John Doe",
    "email": "john@example.com"
  }
}

POST /api/auth/login
Description: Login user
Request Body:
{
  "email": "john@example.com",
  "password": "securepassword123"
}
Response:
{
  "success": true,
  "token": "jwt_token",
  "user": {
    "id": "user_id",
    "name": "John Doe",
    "email": "john@example.com"
  }
}

📌 Chat Endpoints
-------------------------------

POST /api/chat/send
Description: Send a message to AI agent
Request Body:
{
  "message": "Hello, how are you?",
  "conversationId": "optional_conversation_id"
}
Response:
{
  "success": true,
  "message": "I'm doing well, thank you for asking!",
  "conversationId": "conversation_id"
}

GET /api/chat/history/:conversationId
Description: Get conversation history
Response:
{
  "success": true,
  "conversation": {
    "id": "conversation_id",
    "messages": [
      {
        "role": "user",
        "content": "Hello",
        "timestamp": "2026-08-25T00:00:00.000Z"
      },
      {
        "role": "assistant",
        "content": "Hi there!",
        "timestamp": "2026-08-25T00:00:01.000Z"
      }
    ]
  }
}

📌 Health Endpoints
-------------------------------

GET /
Description: Root endpoint
Response:
{
  "success": true,
  "message": "Voice AI Agent Backend is running successfully!"
}

GET /api/health
Description: Health check
Response:
{
  "success": true,
  "server": "Running",
  "database": "Connected",
  "timestamp": "2026-08-25T00:00:00.000Z"
}

GET /api/database
Description: Database connectivity check
Response:
{
  "success": true,
  "message": "Database connection is healthy",
  "database": "Connected"
}

-------------------------------------------------------------------------------
8. 🗄️ Database Schema
-------------------------------------------------------------------------------

MongoDB Collections:

👤 Users Collection
-------------------------------
{
  _id: ObjectId,
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }, // Hashed
  profilePicture: { type: String, default: null },
  preferences: {
    language: { type: String, default: "en" },
    voice: { type: String, default: "default" }
  },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
}

💬 Conversations Collection
-------------------------------
{
  _id: ObjectId,
  userId: { type: ObjectId, ref: "User", required: true },
  agentId: { type: String, default: "default" },
  messages: [
    {
      role: { type: String, enum: ["user", "assistant"], required: true },
      content: { type: String, required: true },
      timestamp: { type: Date, default: Date.now }
    }
  ],
  metadata: {
    duration: Number,
    messageCount: Number,
    tokensUsed: Number
  },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
}

🤖 AI Agents Collection
-------------------------------
{
  _id: ObjectId,
  agentId: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  description: { type: String },
  personality: { type: String },
  model: { type: String, default: "gpt-3.5-turbo" },
  systemPrompt: { type: String },
  isActive: { type: Boolean, default: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
}

-------------------------------------------------------------------------------
9. ☁️ Deployment Guide
-------------------------------------------------------------------------------

💻 Local Deployment
-------------------------------
1. Start MongoDB locally:
   mongod --dbpath /path/to/data

2. Configure .env files with local settings

3. Run backend:
   cd backend && npm run dev

4. Run frontend:
   cd frontend && npm run dev

5. Access application:
   Frontend: http://localhost:5173
   Backend: http://localhost:5000

☁️ Vercel Deployment
-------------------------------

Backend Deployment:
-------------------------------
1. Navigate to backend directory:
   cd backend

2. Install Vercel CLI:
   npm install -g vercel

3. Deploy:
   vercel

4. Configure environment variables:
   - MONGODB_URI
   - OPENAI_API_KEY
   - JWT_SECRET
   - NODE_ENV=production
   - FRONTEND_URL

Frontend Deployment:
-------------------------------
1. Navigate to frontend directory:
   cd frontend

2. Build application:
   npm run build

3. Deploy:
   vercel

4. Configure environment variables:
   - VITE_API_URL=https://your-backend.vercel.app

📦 MongoDB Atlas Setup
-------------------------------
1. Create MongoDB Atlas account
2. Create a new cluster
3. Whitelist IP addresses
4. Create database user
5. Get connection string
6. Add to Vercel environment variables

-------------------------------------------------------------------------------
10. 🔒 Security Guidelines
-------------------------------------------------------------------------------

🔐 API Key Management
-------------------------------
- Store all API keys in environment variables
- Never commit .env files to version control
- Use different keys for development and production
- Rotate keys periodically
- Use Vercel environment variables for production

🔑 Authentication Security
-------------------------------
- Use JWT for user authentication
- Hash passwords using bcrypt
- Implement token expiration
- Use HTTPS in production
- Enable CORS with specific origins only

🛡️ Application Security
-------------------------------
- Validate all user inputs
- Sanitize database queries
- Implement rate limiting
- Enable request logging
- Use security headers (Helmet)
- Regular security audits

📊 Data Protection
-------------------------------
- Encrypt sensitive data
- Backup MongoDB data regularly
- Use MongoDB authentication
- Implement proper error handling
- Don't expose stack traces in production

-------------------------------------------------------------------------------
11. 🔄 Development Workflow
-------------------------------------------------------------------------------

📋 Git Workflow
-------------------------------
1. Create feature branch:
   git checkout -b feature/feature-name

2. Make changes and commit:
   git add .
   git commit -m "Description of changes"

3. Push to remote:
   git push origin feature/feature-name

4. Create pull request
5. Review and merge

🔧 Development Best Practices
-------------------------------
- Write clean, readable code
- Use TypeScript for type safety
- Follow ESLint and Prettier rules
- Write unit tests for critical functions
- Update documentation with changes
- Use meaningful commit messages
- Regular code reviews

🧪 Testing Strategy
-------------------------------
- Unit tests for business logic
- Integration tests for API endpoints
- End-to-end tests for user flows
- Performance testing for AI services
- Security testing for vulnerabilities

-------------------------------------------------------------------------------
12. 🧪 Testing
-------------------------------------------------------------------------------

🏃 Running Tests
-------------------------------
Backend Tests:
cd backend
npm test

Frontend Tests:
cd frontend
npm test

🔍 Manual Testing
-------------------------------
1. Start backend server:
   cd backend && npm run dev

2. Start frontend application:
   cd frontend && npm run dev

3. Test endpoints:
   - http://localhost:5000
   - http://localhost:5000/api/health
   - http://localhost:5000/api/database

4. Test voice functionality:
   - Click voice button
   - Speak into microphone
   - Verify response

-------------------------------------------------------------------------------
13. 🔧 Troubleshooting
-------------------------------------------------------------------------------

❌ Common Issues and Solutions

Issue: Backend fails to start
Solution:
- Check MongoDB connection string
- Verify all dependencies are installed
- Check for port conflicts (5000 in use)
- Ensure .env file exists and is configured

Issue: Frontend cannot connect to backend
Solution:
- Verify VITE_API_URL in .env
- Ensure backend is running
- Check CORS settings
- Verify network connectivity

Issue: MongoDB connection error
Solution:
- Verify MONGODB_URI is correct
- Check network connectivity
- Ensure MongoDB is running
- Check firewall settings

Issue: AI API key error
Solution:
- Verify OPENAI_API_KEY in .env
- Ensure API key is valid
- Check API key permissions
- Verify API key is not expired

Issue: Voice functionality not working
Solution:
- Check microphone permissions
- Verify browser supports Web Audio API
- Check console for errors
- Test with different browsers

-------------------------------------------------------------------------------
14. 🤝 Contributing Guidelines
-------------------------------------------------------------------------------

📋 How to Contribute
-------------------------------
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Write tests for your changes
5. Update documentation
6. Submit a pull request

📝 Code Guidelines
-------------------------------
- Use TypeScript for all new code
- Follow the existing project structure
- Write clear and descriptive commit messages
- Document your code using JSDoc
- Write tests for new features
- Follow ESLint configuration

🐛 Reporting Issues
-------------------------------
- Use GitHub Issues
- Provide a clear description
- Include steps to reproduce
- Add relevant logs and screenshots
- Mention browser and OS information

-------------------------------------------------------------------------------
15. 📄 License & Credits
-------------------------------------------------------------------------------

📄 License
-------------------------------
This project is intended for development and research purposes.

👨‍💻 Developed By
-------------------------------
🚀 Zaibten
Building intelligent, practical, and scalable AI solutions for the future.

⭐ Acknowledgments
-------------------------------
- OpenAI for AI models and APIs
- MongoDB for database services
- Vercel for hosting platform
- React and Node.js communities

-------------------------------------------------------------------------------
📊 Project Status
-------------------------------
🚧 Active Development
The project is being continuously developed and expanded with new AI capabilities, voice features, and system improvements.

-------------------------------------------------------------------------------
📞 Support
-------------------------------
For support, please:
- Open an issue on GitHub
- Contact the development team
- Refer to the project documentation

-------------------------------------------------------------------------------
Built with ❤️ + 🤖 by Zaibten
-------------------------------------------------------------------------------