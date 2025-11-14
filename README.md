# AWS × MAIT Partnership Website

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Visit%20Site-success?style=for-the-badge)](https://aws-x-mait.vercel.app/)
[![GitHub](https://img.shields.io/badge/GitHub-Repository-black?style=for-the-badge&logo=github)](https://github.com/faisalquaiyum/aws-x-mait)
[![React](https://img.shields.io/badge/React-19.x-blue?style=for-the-badge&logo=react)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-7.x-purple?style=for-the-badge&logo=vite)](https://vitejs.dev/)
[![Node.js](https://img.shields.io/badge/Node.js-Backend-green?style=for-the-badge&logo=node.js)](https://nodejs.org/)

> **A modern, full-stack interactive website showcasing the partnership between Amazon Web Services (AWS) and Maharaja Agrasen Institute of Technology (MAIT). Features cutting-edge 3D animations, AI-powered chatbot, responsive design, and a sleek user interface.**

![AWS × MAIT Hero](https://aws-x-mait.vercel.app/hero-img.png)

## 🌟 Live Demo

**🔗 [Visit Live Website](https://aws-x-mait.vercel.app/)**

Experience the full interactive website with 3D floating clouds, smooth animations, and responsive design.

## ✨ Features

### 🎨 **Modern UI/UX**

- **Glassmorphism Design** - Modern glass-like UI elements with backdrop blur
- **Gradient Animations** - Smooth color transitions and animated gradients
- **Dark/Light Theme** - Toggle between themes with smooth transitions
- **Responsive Layout** - Perfect viewing on all devices (mobile, tablet, desktop)

### 🤖 **AI-Powered Chatbot**

- **Gemini AI Integration** - Google Generative AI powered chatbot
- **AWS Knowledge Base** - Specialized in answering AWS-related queries
- **Real-time Responses** - Instant AI-generated responses
- **Floating Chat Interface** - Accessible chatbot button on all pages
- **Retry Logic** - Automatic retry on service overload with exponential backoff

### 🌊 **3D Graphics & Animations**

- **Interactive 3D Clouds** - Floating cloud animations using Three.js
- **Starfield Background** - Dynamic star field with fade effects
- **Smooth Transitions** - Framer Motion animations throughout
- **Floating Elements** - Animated UI cards and components

### 📱 **Pages & Sections**

- **🏠 Home** - Hero section with 3D clouds and feature cards
- **☁️ About AWS** - Comprehensive AWS services and information
- **🎓 About MAIT** - Academic programs and campus details
- **👥 Teams** - Team member profiles and information
- **📞 Contact** - Interactive contact form with Google Maps integration
- **📊 Statistics** - Real-time partnership metrics

### 🛠 **Technical Features**

- **React Context API** - Centralized state management
- **React Router** - Client-side routing for smooth navigation
- **Three.js Integration** - 3D graphics and animations
- **Tailwind CSS** - Utility-first styling with custom configurations
- **Axios** - HTTP client for API requests
- **React Icons** - Professional iconography throughout
- **Framer Motion** - Advanced animations and transitions
- **Form Handling** - Interactive contact forms with validation

## 🚀 Tech Stack

### **Frontend**

| Technology            | Purpose                    | Version |
| --------------------- | -------------------------- | ------- |
| **React**             | Frontend Framework         | 19.x    |
| **Vite**              | Build Tool & Dev Server    | 7.x     |
| **Tailwind CSS**      | Styling & Design           | 3.x     |
| **Three.js**          | 3D Graphics                | 0.180.0 |
| **React Three Fiber** | React Three.js Integration | 9.x     |
| **React Router DOM**  | Client-side Routing        | 7.x     |
| **Framer Motion**     | Advanced Animations        | 12.x    |
| **Axios**             | HTTP Client                | 1.x     |
| **React Icons**       | Icon Library               | 5.x     |
| **AOS**               | Scroll Animations          | 2.x     |

### **Backend**

| Technology               | Purpose               | Version |
| ------------------------ | --------------------- | ------- |
| **Node.js**              | Runtime Environment   | Latest  |
| **Express**              | Web Framework         | 5.x     |
| **Google Generative AI** | AI Chatbot (Gemini)   | 0.24.x  |
| **CORS**                 | Cross-Origin Handling | 2.x     |
| **dotenv**               | Environment Variables | 17.x    |

## 📁 Project Structure

```
aws-x-mait/
├── 📁 backend/
│   ├── 📁 controllers/
│   │   └── 🤖 chatController.js     # Gemini AI chatbot logic
│   ├── 📁 routes/
│   │   └── 🛣️ chatbotRoutes.js      # API routes
│   ├── 🔧 server.js                 # Express server
│   ├── 🔐 .env                      # Environment variables
│   └── 📝 package.json
├── 📁 public/
│   ├── 📁 images/
│   │   ├── 🖼️ content/             # Content images
│   │   ├── 🖼️ event/               # Event photos
│   │   ├── 🖼️ faculty/             # Faculty images
│   │   ├── 🖼️ others/              # Miscellaneous
│   │   ├── 🖼️ PR/                  # PR materials
│   │   ├── 🖼️ social/              # Social media
│   │   └── 🖼️ technical/           # Technical content
├── 📁 src/
│   ├── 📁 components/
│   │   ├── 🤖 Chatbot.jsx          # AI chatbot interface
│   │   ├── ✨ Feature.jsx          # Feature cards
│   │   ├── 🧭 Navbar.jsx           # Navigation bar
│   │   └── 🦶 Footer.jsx           # Footer component
│   ├── 📁 context/
│   │   ├── 🔄 AppContext.jsx       # Context definition
│   │   └── 🔄 AppState.jsx         # Context provider & API logic
│   ├── 📁 pages/
│   │   ├── 🏠 Home.jsx             # Landing page
│   │   ├── ☁️ AboutAWS.jsx         # AWS information
│   │   ├── 🎓 AboutMAIT.jsx        # MAIT information
│   │   ├── 👥 Teams.jsx            # Team members
│   │   └── 📞 Contact.jsx          # Contact form
│   ├── 🎨 App.jsx                  # Main app component
│   ├── 🌙 ThemeContext.jsx         # Theme management
│   ├── 🎨 index.css                # Global styles
│   └── ⚡ main.jsx                 # App entry point
├── ⚙️ tailwind.config.js
├── ⚙️ vite.config.js
├── ⚙️ eslint.config.js
├── ⚙️ postcss.config.js
├── 🚀 vercel.json                  # Vercel deployment config
└── 📝 package.json
```

## 🛠️ Installation & Setup

### Prerequisites

- **Node.js** (v16+ recommended)
- **npm** or **yarn**
- **Google Gemini API Key** (for chatbot functionality)

### 🔧 Local Development

1. **Clone the repository**

   ```bash
   git clone https://github.com/faisalquaiyum/aws-x-mait.git
   cd aws-x-mait
   ```

2. **Install frontend dependencies**

   ```bash
   npm install
   ```

3. **Install backend dependencies**

   ```bash
   cd backend
   npm install
   ```

4. **Configure environment variables**

   Create a `.env` file in the `backend` folder:

   ```env
   GEMINI_API_KEY=your_google_gemini_api_key_here
   PORT=5000
   ```

   Create a `.env` file in the root folder (optional):

   ```env
   VITE_URL_API=http://localhost:5000
   ```

5. **Start backend server**

   ```bash
   cd backend
   npm run dev
   ```

6. **Start frontend development server** (in a new terminal)

   ```bash
   npm run dev
   ```

7. **Open in browser**
   ```
   Frontend: http://localhost:5173
   Backend: http://localhost:5000
   ```

### 🏗️ Build for Production

**Frontend:**

```bash
# Build the project
npm run build

# Preview production build
npm run preview
```

**Backend:**

```bash
cd backend
npm start
```

## 🎯 Key Components

### 🤖 **AI Chatbot**

- **Floating Button** - Bottom-right chatbot trigger with robot icon
- **Modal Interface** - Clean chat interface with message history
- **Gemini AI** - Powered by Google's Gemini 1.5 Flash model
- **AWS Expert** - Specialized in AWS-related queries
- **Error Handling** - Retry logic with exponential backoff for 503 errors
- **Responsive Design** - Mobile-optimized chat interface

### 🏠 **Home Page**

- **Hero Section** - "Cloud-Powered Education Excellence" with animated gradients
- **3D Canvas** - Interactive floating clouds with Three.js
- **Feature Cards** - Cloud Innovation, Academic Excellence, Future Ready
- **Statistics** - Partnership metrics and achievements

### ☁️ **About AWS**

- **AWS Services** - Comprehensive cloud services overview
- **Benefits** - Cost efficiency, scalability, security features
- **Leadership** - AWS partnership leadership section

### 🎓 **About MAIT**

- **Campus Information** - Beautiful campus imagery and details
- **Academic Programs** - Engineering departments and specializations
- **Mission & Vision** - Educational excellence and innovation focus

### 👥 **Teams**

- **Team Profiles** - Member information and roles
- **Interactive Cards** - Hover effects and animations

### 📞 **Contact**

- **Interactive Form** - Real-time form with validation
- **Google Maps** - Embedded campus location map
- **Contact Information** - Address, phone, email details

## 🎨 Design System

### 🎨 **Color Palette**

- **AWS Orange**: `#ff6b35` - Primary brand color
- **MAIT Blue**: `#3b82f6` - Secondary brand color
- **Gradients**: Dynamic color transitions
- **Glass Effects**: Semi-transparent backgrounds with blur

### ✨ **Animations**

- **Float Animation** - Gentle floating motion for cards
- **Gradient Animation** - Color transitions for text
- **3D Animations** - Cloud movements and rotations
- **Hover Effects** - Interactive component responses

## 🌐 Deployment

### ▲ **Frontend - Vercel**

- **Live URL**: [https://aws-x-mait.vercel.app/](https://aws-x-mait.vercel.app/)
- **Auto-deploy** from main branch
- **Performance optimized** with Vite
- **Environment Variables**: `VITE_URL_API` (backend URL)

### 🚀 **Backend - Render**

- **API URL**: [https://aws-x-mait.onrender.com](https://aws-x-mait.onrender.com)
- **Deployment**: Automatic from GitHub
- **Environment Variables**: `GEMINI_API_KEY`, `PORT`
- **Features**: CORS configured, retry logic for API calls

### 🚀 **Alternative Deployment Options**

**Frontend:**

- **Netlify** - `npm run build` then deploy `dist/` folder
- **GitHub Pages** - Using `gh-pages` package
- **AWS S3 + CloudFront** - Static website hosting

**Backend:**

- **Heroku** - Node.js deployment
- **AWS EC2** - Full server control
- **Railway** - Simple deployment
- **DigitalOcean** - App Platform

## 📊 Performance Features

- ⚡ **Fast Loading** - Vite's optimized bundling
- 📱 **Mobile Optimized** - Responsive design for all devices
- 🎯 **SEO Friendly** - Proper meta tags and structure
- ♿ **Accessible** - ARIA labels and semantic HTML
- 🔧 **Optimized Assets** - Compressed images and lazy loading
- 🤖 **AI Chatbot** - Real-time responses with error handling
- 🔄 **Context Management** - Centralized state with React Context
- 🔁 **Retry Logic** - Automatic retries on service overload

## 🔑 Environment Variables

### **Frontend (.env)**

```env
VITE_URL_API=http://localhost:5000  # Backend API URL
```

### **Backend (.env)**

```env
GEMINI_API_KEY=your_google_gemini_api_key  # Google Gemini AI API key
PORT=5000                                    # Server port
```

## 🔌 API Endpoints

### **Chatbot API**

**POST** `/api/chat`

- **Description**: Send message to AI chatbot
- **Request Body**:
  ```json
  {
    "message": "What is AWS Lambda?"
  }
  ```
- **Response**:
  ```json
  {
    "reply": "AWS Lambda is a serverless computing service..."
  }
  ```
- **Error Response**:
  ```json
  {
    "error": "The AI service is currently busy. Please try again in a moment."
  }
  ```

## 🤝 Contributing

1. **Fork the repository**
2. **Create feature branch** (`git checkout -b feature/amazing-feature`)
3. **Commit changes** (`git commit -m 'Add amazing feature'`)
4. **Push to branch** (`git push origin feature/amazing-feature`)
5. **Open Pull Request**

## 📧 Contact

**Md Faisal Quaiyum**

- 🐙 **GitHub**: [@faisalquaiyum](https://github.com/faisalquaiyum)
- 🌐 **Website**: [AWS × MAIT Partnership](https://aws-x-mait.vercel.app/)
- 📧 **Email**: [Contact via website form](https://aws-x-mait.vercel.app/contact)

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **AWS** - For cloud technology partnership
- **MAIT** - For academic excellence and collaboration
- **React Community** - For amazing development tools
- **Three.js** - For powerful 3D capabilities
- **Tailwind CSS** - For beautiful utility-first styling

---
