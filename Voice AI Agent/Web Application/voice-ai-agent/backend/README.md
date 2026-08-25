⚙️ Zaibten Voice AI Agent — Backend

🧠 Node.js + Express backend powering the Zaibten Voice AI Agent.

-------------------------------------------------------------------------------
🌟 About
-------------------------------------------------------------------------------

This is the backend API for the Zaibten Voice AI Agent.

It provides the server-side infrastructure required for:

- 🤖 AI integrations
- 🎙️ Voice processing
- 🗄️ MongoDB database operations
- 🔐 Authentication
- 🌐 REST APIs
- 🔗 Frontend communication
- ☁️ Vercel deployment

The backend is designed to run both locally and as a serverless application on Vercel.

-------------------------------------------------------------------------------
🛠️ Technology Stack
-------------------------------------------------------------------------------

- 🟢 Node.js
- 🚂 Express.js
- 🍃 MongoDB
- 🧩 Mongoose
- 🔐 JSON Web Token
- 🔑 dotenv
- 🌐 CORS
- 📋 Morgan
- 🔄 Nodemon
- ☁️ Vercel

-------------------------------------------------------------------------------
📁 Structure
-------------------------------------------------------------------------------

backend/
│
├── 📁 controllers/
│   └── Controller files
│
├── 📁 models/
│   └── MongoDB models
│
├── 📁 routes/
│   └── API routes
│
├── 📁 middleware/
│   └── Middleware functions
│
├── 📄 index.js
├── 📄 package.json
├── 📄 package-lock.json
├── 📄 vercel.json
├── 🔐 .env
└── 📄 README.md

-------------------------------------------------------------------------------
🚀 Installation
-------------------------------------------------------------------------------

From the backend directory:

npm install

-------------------------------------------------------------------------------
▶️ Development
-------------------------------------------------------------------------------

Start the development server:

npm run dev

Nodemon automatically restarts the server whenever source files change.

-------------------------------------------------------------------------------
▶️ Production
-------------------------------------------------------------------------------

Run:

npm start

-------------------------------------------------------------------------------
🌐 Local Server
-------------------------------------------------------------------------------

The backend runs by default on:

http://localhost:5000

-------------------------------------------------------------------------------
🔌 API Endpoints
-------------------------------------------------------------------------------

🏠 Root
-------------------------------

GET /

Example response:

{
  "success": true,
  "message": "Voice AI Agent Backend is running successfully!"
}

❤️ Health Check
-------------------------------

GET /api/health

Example:

{
  "success": true,
  "server": "Running",
  "database": "Connected",
  "timestamp": "2026-08-25T00:00:00.000Z"
}

🗄️ Database Check
-------------------------------

GET /api/database

This endpoint verifies the MongoDB connection.

-------------------------------------------------------------------------------
🔐 Environment Variables
-------------------------------------------------------------------------------

Create a .env file in the backend directory:

.env

Example:

PORT=5000
NODE_ENV=development

MONGODB_URI=your_mongodb_connection_string
OPENAI_API_KEY=your_openai_api_key

⚠️ Never commit .env to GitHub.

-------------------------------------------------------------------------------
🗄️ MongoDB
-------------------------------------------------------------------------------

The backend uses MongoDB through Mongoose.

Connection example:

mongoose.connect(process.env.MONGODB_URI);

For production, MongoDB Atlas is recommended.

-------------------------------------------------------------------------------
🌍 Vercel Deployment
-------------------------------------------------------------------------------

The backend supports Vercel serverless deployment.

1. Install Vercel CLI:
npm install -g vercel

2. Deploy from the backend folder:
vercel

☁️ Vercel Environment Variables
-------------------------------

Configure these variables inside Vercel:

- MONGODB_URI
- OPENAI_API_KEY
- NODE_ENV

Set NODE_ENV=production

Do not upload your .env file.

-------------------------------------------------------------------------------
🔄 Development Flow
-------------------------------------------------------------------------------

Frontend
   │
   │ Axios
   ▼
Express API
   │
   ├── 🤖 AI Services
   │
   ├── 🗄️ MongoDB
   │
   └── 🔐 Authentication

-------------------------------------------------------------------------------
🧠 Future Backend Features
-------------------------------------------------------------------------------

- 🎙️ Speech-to-Text APIs
- 🔊 Text-to-Speech APIs
- 🤖 AI Agent orchestration
- 🧠 Conversation memory
- 👤 Authentication
- 💬 Chat history
- 🛠️ AI function calling
- 📊 Usage tracking
- ⚡ Streaming responses
- 🔌 Third-party API integrations

-------------------------------------------------------------------------------
🧪 Testing
-------------------------------------------------------------------------------

Start the server:

npm run dev

Test endpoints:

http://localhost:5000

Health check:

http://localhost:5000/api/health

Database check:

http://localhost:5000/api/database

-------------------------------------------------------------------------------
👨‍💻 Maintained By
-------------------------------------------------------------------------------

Zaibten

🚀 Building intelligent AI agents for the future.