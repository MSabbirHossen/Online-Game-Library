# 🎮 GameHub - Online Game Library

> A vibrant, urban-themed web application for discovering, exploring, and downloading indie games and AAA titles. GameHub provides an engaging platform for gamers to browse games, view detailed information, and connect with gaming communities.

[![React](https://img.shields.io/badge/React-19.2.0-blue?logo=react)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-7.2.4-purple?logo=vite)](https://vite.dev)
[![Firebase](https://img.shields.io/badge/Firebase-12.12.1-orange?logo=firebase)](https://firebase.google.com)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.2.4-06B6D4?logo=tailwindcss)](https://tailwindcss.com)
[![License](https://img.shields.io/badge/License-MIT-green)](LICENSE)

## Overview

### Screenshot

![][./preview.jpg]

### Links

- Solution URL: [GitHub Repo](https://github.com/MSabbirHossen/FM-QR-code-component.git)
- Live Site URL: [Live Link](https://online-game-library.web.app/)


## 📋 Table of Contents

- [Quick Links](#-quick-links)
- [Key Features](#-key-features)
- [Tech Stack](#-tech-stack)
- [Installation & Setup](#-installation--setup)
- [Environment Variables](#-environment-variables)
- [Project Structure](#-project-structure)
- [Usage & Commands](#-usage--commands)
- [Pages Overview](#-pages-overview)
- [Design & Styling](#-design--styling)
- [Deployment](#-deployment)
- [Performance & Accessibility](#-performance--accessibility)
- [Contributing](#-contributing)
- [FAQ](#-faq)
- [License & Author](#-license--author)

---

## 🔗 Quick Links

| Link | URL |
|------|-----|
| **GitHub Repository** | [github.com/MSabbirHossen/Online-Game-Library](https://github.com/MSabbirHossen/Online-Game-Library) |
| **Live Site** | [online-game-library.web.app](https://online-game-library.web.app/) |

---

## ✨ Key Features

### 🎯 Core Functionality
- **Browse Game Library** - Explore a comprehensive collection of indie games and AAA titles
- **Advanced Search & Filtering** - Search by title/developer and filter by category
- **Real-time Updates** - Dynamic game filtering with instant search results
- **Game Details Page** - Complete information including ratings, requirements, and file size

### 🔐 User Authentication & Profiles
- **Dual Authentication** - Email/password and Google OAuth login/registration
- **Protected Routes** - Secure access to game details and profile pages
- **User Profiles** - Create and customize your gaming profile with photo uploads
- **Profile Management** - Update name and profile picture

### 🎨 User Experience
- **Responsive Design** - Fully responsive on mobile, tablet, and desktop
- **Vibrant Urban Theme** - Neon cyan, orange, and electric yellow color scheme
- **Glassmorphism Effects** - Modern glass-effect cards with backdrop blur
- **Smooth Animations** - Framer Motion transitions and hover effects
- **Newsletter Subscription** - Stay updated on new releases and trending games

### ♿ Accessibility
- **WCAG Compliant** - Proper alt text and keyboard navigation
- **Dark Mode** - Default dark theme with excellent contrast
- **Touch-friendly** - 44px minimum touch targets for mobile devices

### 🔐 Security
- **Firebase Authentication** - Secure email/password and OAuth authentication
- **Environment Variables** - Firebase keys stored securely in .env files
- **Data Validation** - Client-side form validation before submission

---

## 🛠️ Tech Stack

### Frontend
- **React 19.2.0** - UI library for building interactive user interfaces
- **Vite 7.2.4** - Lightning-fast build tool and dev server
- **React Router 7.13.0** - Client-side routing for SPA navigation
- **Tailwind CSS 4.2.4** - Utility-first CSS framework
- **DaisyUI 5.5.14** - Component library built on Tailwind CSS

### Backend & Database
- **Firebase 12.12.1** - Backend-as-a-Service (Authentication & Firestore)
- **Firebase Auth** - Email/password and Google OAuth authentication

### Animations & Effects
- **Framer Motion 12.0.0** - React animation library for smooth transitions
- **React Fast Marquee 1.6.5** - Scrolling marquee component

### Styling & Icons
- **React Icons 5.5.0** - Popular icon library
- **@tailwindcss/vite 4.2.4** - Tailwind CSS Vite plugin
- **Autoprefixer 10.4.16** - Vendor prefix management

### Utilities
- **React Toastify 11.0.5** - Toast notifications for user feedback
- **Date-fns 4.1.0** - Modern date utility library

### Dependencies Reference

| Package | Version | Purpose |
|---------|---------|---------|
| `react` | ^19.2.0 | UI library |
| `react-dom` | ^19.2.0 | React DOM rendering |
| `react-router` | ^7.13.0 | Routing and navigation |
| `vite` | ^7.2.4 | Build tool |
| `tailwindcss` | ^4.2.4 | CSS framework |
| `daisyui` | ^5.5.14 | Component library |
| `firebase` | ^12.12.1 | Backend services |
| `framer-motion` | ^12.0.0 | Animation library |
| `react-icons` | ^5.5.0 | Icon library |
| `react-toastify` | ^11.0.5 | Notifications |
| `react-fast-marquee` | ^1.6.5 | Marquee component |
| `date-fns` | ^4.1.0 | Date utilities |

---

## 🚀 Installation & Setup

### Prerequisites
- Node.js 16.x or higher
- npm 8.x or higher
- Firebase project (free tier available)
- Git (for version control)

### Step-by-Step Setup

#### 1. Clone Repository
```bash
git clone https://github.com/MSabbirHossen/Online-Game-Library.git
cd Online-Game-Library
```

#### 2. Install Dependencies
```bash
npm install
```

#### 3. Setup Environment Variables
Create a `.env.local` file in the root directory (see [Environment Variables](#-environment-variables) section)

#### 4. Start Development Server
```bash
npm run dev
```
Navigate to `http://localhost:5173` in your browser.

---

## 🔐 Environment Variables

### Firebase Configuration

Create a `.env.local` file in the root directory with your Firebase credentials:

```env
VITE_apiKey=YOUR_API_KEY
VITE_authDomain=YOUR_AUTH_DOMAIN
VITE_projectId=YOUR_PROJECT_ID
VITE_storageBucket=YOUR_STORAGE_BUCKET
VITE_messagingSenderId=YOUR_MESSAGING_SENDER_ID
VITE_appId=YOUR_APP_ID
```

### Getting Firebase Credentials

1. Go to [Firebase Console](https://console.firebase.google.com)
2. Create a new project or select existing one
3. Click "Add App" and select Web
4. Copy the configuration object
5. Paste values in `.env.local`

⚠️ **Security Warning**: Never commit `.env.local` to version control!

---

## 📁 Project Structure

```
Online-Game-Library/
├── public/
│   └── games.json                 # Game database
├── src/
│   ├── components/
│   │   ├── Layout/
│   │   │   ├── Navbar.jsx         # Navigation bar
│   │   │   ├── Footer.jsx         # Footer
│   │   │   └── Layout.jsx         # Main layout wrapper
│   │   ├── Banner/
│   │   │   └── Banner.jsx         # Hero banner section
│   │   ├── PopularGames/
│   │   │   └── PopularGames.jsx   # Popular games grid
│   │   ├── Newsletter/
│   │   │   └── Newsletter.jsx     # Newsletter subscription
│   │   ├── CTA/
│   │   │   └── CTA.jsx            # Call-to-action section
│   │   ├── GameCard.jsx           # Game card component
│   │   └── ProtectedRoute.jsx     # Route protection wrapper
│   ├── pages/
│   │   ├── Home.jsx               # Homepage
│   │   ├── ExploreGames.jsx       # Browse & filter games
│   │   ├── GameDetails.jsx        # Game details page (protected)
│   │   ├── MyProfile.jsx          # User profile page (protected)
│   │   ├── UpdateProfile.jsx      # Profile edit page (protected)
│   │   ├── NotFound.jsx           # 404 page
│   │   └── Auth/
│   │       ├── Login.jsx          # Login page
│   │       ├── Register.jsx       # Registration page
│   │       └── ForgotPassword.jsx # Password recovery
│   ├── context/
│   │   └── AuthContext.jsx        # Authentication context
│   ├── data/
│   │   └── games.json             # Game data
│   ├── App.jsx                    # Main app component
│   ├── main.jsx                   # Entry point
│   ├── index.css                  # Global styles
│   └── firebase.config.js         # Firebase configuration
├── .env.local                     # Environment variables (not committed)
├── vite.config.js                 # Vite configuration
├── tailwind.config.js             # Tailwind CSS configuration
├── eslint.config.js               # ESLint configuration
├── package.json                   # Project metadata
└── README.md                      # This file
```

---

## 💻 Usage & Commands

### Development
```bash
npm run dev
```
Starts hot-reload development server on `http://localhost:5173`

### Production Build
```bash
npm run build
```
Creates optimized production build in `dist/` folder

### Preview Build
```bash
npm run preview
```
Local preview of production build

### Code Quality
```bash
npm run lint
```
Checks code quality with ESLint

---

## 📄 Pages Overview

### 🏠 Home Page (`/`)
- **Hero banner** with call-to-action buttons
- **Popular games section** sorted by rating
- **Developer spotlight carousel**
- **Newsletter subscription form**
- **Level-up CTA section**

### 🔍 Explore Games (`/explore`)
- **Advanced search** by title/developer
- **Category filtering** for games
- **Real-time result count**
- **Game card grid** with animations
- **Clear filters** option when no results found

### 🎮 Game Details (`/game/:id`) — *Protected*
- **Full game cover art** and details
- **Ratings and system requirements**
- **Download button**
- **File size and release date**
- **Related games carousel**

### 👤 My Profile (`/my-profile`) — *Protected*
- **Profile avatar display**
- **User name and email**
- **Edit profile link**
- **Logout button**

### ✏️ Update Profile (`/update-profile`) — *Protected*
- **Update name**
- **Change photo URL**
- **Form validation**
- **Success/error notifications**

### 🔐 Authentication Pages

#### Login (`/login`)
- Email/password login
- Google OAuth integration
- Forgot password link
- Validation and error handling

#### Register (`/register`)
- Email/password registration
- Name and photo URL input
- Password validation
- Success/error notifications

### ❌ 404 Page (`/*`)
- Friendly error message
- Navigation back to home

---

## 🎨 Design & Styling

### Color Scheme
| Color | Hex | Usage |
|-------|-----|-------|
| **Primary** | `#FF6B35` | Vibrant Orange |
| **Secondary** | `#004E89` | Deep Blue |
| **Accent** | `#F7B801` | Electric Yellow |
| **Success** | `#00D9FF` | Neon Cyan |
| **Background** | `#0F1419` | Dark Blue-Black |

### Design Patterns
- Glassmorphism effects with backdrop blur
- Neon glow animations on hover
- Smooth Framer Motion transitions
- Urban street art aesthetic
- High contrast for accessibility

### Responsive Breakpoints
| Device | Width | Breakpoint |
|--------|-------|------------|
| Mobile | < 640px | default |
| Tablet | 640px - 1024px | sm: to lg: |
| Desktop | > 1024px | lg: and xl: |

### Responsiveness Features
✅ Mobile-first approach
✅ Responsive typography (scales with screen size)
✅ Touch-friendly buttons (44px minimum)
✅ Adaptive spacing and padding
✅ Flexible grid layouts
✅ Optimized form inputs (prevents zoom on iOS)
✅ Smooth transitions on all devices

**Tested On:** iPhone 12/13/14/15, Samsung Galaxy series, iPad & iPad Pro, Desktop browsers (Chrome, Firefox, Safari, Edge)

---

## 🌐 Deployment

### Deploy to Firebase Hosting (Current)
```bash
npm install -g firebase-tools
firebase login
firebase init hosting
firebase deploy
```

Add to `firebase.json`:
```json
{
  "hosting": {
    "public": "dist",
    "rewrites": [
      {
        "source": "**",
        "destination": "/index.html"
      }
    ]
  }
}
```

### Deploy to Netlify
```bash
npm install -g netlify-cli
netlify deploy --prod
```

**Setup:**
1. Connect GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Add environment variables in Netlify dashboard

### Deploy to Vercel
```bash
npm install -g vercel
vercel
```

### Post-Deployment
Add your authorized domain in Firebase Console for OAuth to work correctly.

---

## 📊 Performance & Accessibility

### Performance Optimizations
- ✅ Vite for fast bundling
- ✅ Code splitting with React Router
- ✅ Lazy loading for components
- ✅ Optimized images with CDN (Unsplash)
- ✅ CSS purging with Tailwind
- ✅ Minified production build

### Lighthouse Scores
- **Performance**: ~90+
- **Accessibility**: ~95+
- **Best Practices**: ~92+
- **SEO**: ~90+

### Accessibility Features
- WCAG 2.1 Level A compliance
- Proper semantic HTML
- Alt text for all images
- Keyboard navigation support
- Focus indicators visible
- Color contrast ratio ≥ 4.5:1
- Touch targets ≥ 44x44px

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/AmazingFeature`)
3. **Commit** changes (`git commit -m 'Add AmazingFeature'`)
4. **Push** to branch (`git push origin feature/AmazingFeature`)
5. **Open** a Pull Request

---

## ❓ FAQ

### Q: How do I add more games?
**A:** Edit `/public/games.json` or `/src/data/games.json` with new game objects following the schema.

### Q: Can I use a different backend?
**A:** Yes! Replace Firebase with any backend (Supabase, MongoDB, etc.). Update `AuthContext.jsx`.

### Q: Is the design customizable?
**A:** Yes! Edit colors in `tailwind.config.js` and CSS in `src/index.css`.

### Q: How do I fix "page not found" errors on reload?
**A:** Configure your hosting to rewrite all routes to `index.html` (SPA configuration).

### Q: Can I deploy without paying?
**A:** Yes! Use Firebase Hosting free tier (5GB storage), Netlify free tier, or Vercel free tier.

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Author & Support

**Sabbir Hossen**

- **GitHub:** [@MSabbirHossen](https://github.com/MSabbirHossen)
- **Project:** [Online Game Library](https://github.com/MSabbirHossen/Online-Game-Library)
- **Live Site:** [online-game-library.web.app](https://online-game-library.web.app/)

### Need Help?
- Open an [Issue](https://github.com/MSabbirHossen/Online-Game-Library/issues)
- Check existing documentation
- Review FAQ section above

---

## ✅ Project Checklist (100% Requirements)

- ✅ GitHub commits: Meaningful commit messages throughout development
- ✅ README.md: Comprehensive project documentation
- ✅ Responsiveness: Fully responsive on mobile, tablet, desktop
- ✅ Environment Variables: Firebase keys secured with .env files
- ✅ Unique Design: Vibrant urban theme with neon aesthetics
- ✅ Hosting: Ready for Netlify/Surge/Firebase deployment
- ✅ SPA Routing: No errors on route reloading
- ✅ Firebase Domain: Add authorized domains after deployment

---

**Made with ❤️ by Sabbir Hossen**
