# ThinkBoard - Notes Application

🚀 **Live Demo**: [https://thinkboard-t6bl.onrender.com/](https://thinkboard-t6bl.onrender.com/)

ThinkBoard is a full-stack notes application built with modern web technologies. It allows users to create, read, update, and delete notes with a clean, responsive interface and built-in rate limiting for security.

This project was inspired by and built following tutorials from **freeCodeCamp YouTube** channel, implementing best practices for full-stack development.

## 🛠️ Tech Stack

### Frontend
- **React 19** - Modern React with hooks
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **DaisyUI** - Component library for Tailwind CSS
- **React Router** - Client-side routing
- **Axios** - HTTP client for API requests
- **Lucide React** - Beautiful & consistent icon toolkit
- **React Hot Toast** - Toast notifications

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework for Node.js
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **Upstash Redis** - Rate limiting with Redis
- **CORS** - Cross-origin resource sharing
- **dotenv** - Environment variables management

## ✨ Features

- 📝 Create, read, update, and delete notes
- 🎨 Modern, responsive UI with dark theme
- ⚡ Fast performance with Vite
- 🔒 Rate limiting (150 requests per minute)
- 📱 Mobile-friendly design
- 🚀 Real-time toast notifications
- 🗂️ Organized note management
- 🔍 Search and filter capabilities

## 📋 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/notes` | Get all notes |
| GET | `/api/notes/:id` | Get note by ID |
| POST | `/api/notes` | Create new note |
| PUT | `/api/notes/:id` | Update note |
| DELETE | `/api/notes/:id` | Delete note |

## 🚀 Installation & Setup

### Prerequisites

Before running this project, make sure you have the following installed:

- **Node.js** (v18 or higher)
- **npm** or **yarn** package manager
- **MongoDB** (local or cloud instance like MongoDB Atlas)
- **Upstash Redis** account (for rate limiting)

### Environment Variables

Create a `.env` file in the `Backend/` directory with the following variables:

```env
MONGO_URI=your_mongodb_connection_string
UPSTASH_REDIS_REST_URL=your_upstash_redis_rest_url
UPSTASH_REDIS_REST_TOKEN=your_upstash_redis_rest_token
PORT=5001
NODE_ENV=development
```

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd thinkpad
   ```

2. **Install Backend Dependencies**
   ```bash
   cd Backend
   npm install
   ```

3. **Install Frontend Dependencies**
   ```bash
   cd ../Frontend/vite-project
   npm install
   ```

4. **Set up environment variables** (see above)

5. **Start the development servers**

   **Backend** (from Backend directory):
   ```bash
   npm run dev
   ```

   **Frontend** (from Frontend/vite-project directory):
   ```bash
   npm run dev
   ```

6. **Open your browser** and navigate to `http://localhost:5173`

## 🏗️ Project Structure

```
thinkpad/
├── Backend/
│   ├── src/
│   │   ├── config/
│   │   │   ├── db.js          # MongoDB connection
│   │   │   └── upstash.js     # Redis rate limiting config
│   │   ├── controllers/
│   │   │   └── notesController.js # CRUD operations
│   │   ├── middleware/
│   │   │   └── rateLimiter.js # Rate limiting middleware
│   │   ├── model/
│   │   │   └── Note.js        # MongoDB schema
│   │   ├── routes/
│   │   │   └── notesRoute.js  # API routes
│   │   └── server.js          # Express server setup
│   ├── package.json
│   └── .env
├── Frontend/
│   └── vite-project/
│       ├── src/
│       │   ├── components/
│       │   │   ├── Navbar.jsx
│       │   │   ├── NoteCard.jsx
│       │   │   ├── NotesNotFound.jsx
│       │   │   └── RateLimitedUI.jsx
│       │   ├── lib/
│       │   │   ├── axios.jsx  # API client configuration
│       │   │   └── Utils.jsx
│       │   ├── Pages/
│       │   │   ├── CreatePage.jsx
│       │   │   ├── HomePage.jsx
│       │   │   └── NoteDetailPage.jsx
│       │   ├── App.jsx
│       │   ├── main.jsx
│       │   └── index.css
│       ├── package.json
│       ├── vite.config.js
│       └── tailwind.config.js
└── README.md
```

## 🎯 Usage

1. **View Notes**: The home page displays all your existing notes in a grid layout
2. **Create Note**: Click the "Create Note" button to add a new note with title and content
3. **Edit Note**: Click on any note card to view and edit the note details
4. **Delete Note**: Use the delete button on note cards to remove notes
5. **Rate Limiting**: The app includes rate limiting to prevent abuse (150 requests per minute)

## 🔧 Development Scripts

### Backend Scripts
- `npm run dev` - Start development server with nodemon
- `npm start` - Start production server

### Frontend Scripts
- `npm run dev` - Start Vite development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🌐 Deployment

The application is deployed on **Render** with:
- Backend: Node.js environment
- Frontend: Static site hosting
- Database: MongoDB Atlas
- Rate Limiting: Upstash Redis

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request


