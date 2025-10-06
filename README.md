# AWS × MAIT Partnership Website

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Visit%20Site-success?style=for-the-badge)](https://aws-x-mait.vercel.app/)
[![GitHub](https://img.shields.io/badge/GitHub-Repository-black?style=for-the-badge&logo=github)](https://github.com/faisalquaiyum/aws-x-mait)
[![React](https://img.shields.io/badge/React-18.x-blue?style=for-the-badge&logo=react)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-5.x-purple?style=for-the-badge&logo=vite)](https://vitejs.dev/)

> **A modern, interactive website showcasing the partnership between Amazon Web Services (AWS) and Maharaja Agrasen Institute of Technology (MAIT). Features cutting-edge 3D animations, responsive design, and a sleek user interface.**

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

### 🌊 **3D Graphics & Animations**

- **Interactive 3D Clouds** - Floating cloud animations using Three.js
- **Starfield Background** - Dynamic star field with fade effects
- **Smooth Transitions** - CSS animations and React transitions
- **Floating Elements** - Animated UI cards and components

### 📱 **Pages & Sections**

- **🏠 Home** - Hero section with 3D clouds and feature cards
- **☁️ About AWS** - Comprehensive AWS services and information
- **🎓 About MAIT** - Academic programs and campus details
- **📞 Contact** - Interactive contact form with Google Maps integration
- **📊 Statistics** - Real-time partnership metrics

### 🛠 **Technical Features**

- **React Router** - Client-side routing for smooth navigation
- **Three.js Integration** - 3D graphics and animations
- **Tailwind CSS** - Utility-first styling with custom configurations
- **React Icons** - Professional iconography throughout
- **Form Handling** - Interactive contact forms with validation

## 🚀 Tech Stack

| Technology            | Purpose                    | Version |
| --------------------- | -------------------------- | ------- |
| **React**             | Frontend Framework         | 18.x    |
| **Vite**              | Build Tool & Dev Server    | 5.x     |
| **Tailwind CSS**      | Styling & Design           | 3.x     |
| **Three.js**          | 3D Graphics                | Latest  |
| **React Three Fiber** | React Three.js Integration | Latest  |
| **React Router DOM**  | Client-side Routing        | 6.x     |
| **React Icons**       | Icon Library               | Latest  |

## 📁 Project Structure

```
aws-x-mait/
├── 📁 public/
│   ├── 🖼️ aws-logo.png
│   ├── 🖼️ mait-logo.png
│   ├── 🖼️ aws-campus.png
│   ├── 🖼️ mait-campus.jpg
│   └── 🖼️ awxXmaitWithTeachers.png
├── 📁 src/
│   ├── 📁 components/
│   │   ├── 🏠 Home.jsx
│   │   ├── ☁️ AboutAWS.jsx
│   │   ├── 🎓 AboutMAIT.jsx
│   │   ├── 📞 Contact.jsx
│   │   ├── 🧭 Navbar.jsx
│   │   └── 🦶 Footer.jsx
│   ├── 🎨 App.jsx
│   ├── 🌙 ThemeContext.jsx
│   ├── 🎨 index.css
│   └── ⚡ main.jsx
├── ⚙️ tailwind.config.js
├── ⚙️ vite.config.js
└── 📝 package.json
```

## 🛠️ Installation & Setup

### Prerequisites

- **Node.js** (v16+ recommended)
- **npm** or **yarn**

### 🔧 Local Development

1. **Clone the repository**

   ```bash
   git clone https://github.com/faisalquaiyum/aws-x-mait.git
   cd aws-x-mait
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

### 🏗️ Build for Production

```bash
# Build the project
npm run build

# Preview production build
npm run preview
```

## 🎯 Key Components

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

### ▲ **Vercel (Current)**

- **Live URL**: [https://aws-x-mait.vercel.app/](https://aws-x-mait.vercel.app/)
- **Auto-deploy** from main branch
- **Performance optimized** with Vite

### 🚀 **Alternative Deployment Options**

- **Netlify** - `npm run build` then deploy `dist/` folder
- **GitHub Pages** - Using `gh-pages` package
- **AWS S3** - Static website hosting

## 📊 Performance Features

- ⚡ **Fast Loading** - Vite's optimized bundling
- 📱 **Mobile Optimized** - Responsive design for all devices
- 🎯 **SEO Friendly** - Proper meta tags and structure
- ♿ **Accessible** - ARIA labels and semantic HTML
- 🔧 **Optimized Assets** - Compressed images and lazy loading

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


