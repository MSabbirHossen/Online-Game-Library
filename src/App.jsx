import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthProvider } from "./context/AuthContext";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import ForgotPassword from "./pages/Auth/ForgotPassword";
import GameDetails from "./pages/GameDetails";
import MyProfile from "./pages/MyProfile";
import UpdateProfile from "./pages/UpdateProfile";
import NotFound from "./pages/NotFound";
import ProtectedRoute from "./components/ProtectedRoute";
import ExploreGames from "./pages/ExploreGames";

function AppContent() {
  const location = useLocation();

  useEffect(() => {
    // Update page title based on current route
    const getTitleFromPath = (path) => {
      const pathMap = {
        "/": "Gamehub - Discover Indie Games",
        "/login": "Login - Gamehub",
        "/register": "Register - Gamehub",
        "/forgot-password": "Forgot Password - Gamehub",
        "/my-profile": "My Profile - Gamehub",
        "/update-profile": "Update Profile - Gamehub",
        "/explore": "Explore Games - Gamehub",
      };

      for (const [route, title] of Object.entries(pathMap)) {
        if (path.startsWith(route)) {
          return title;
        }
      }
      return "Gamehub - Discover Indie Games";
    };

    document.title = getTitleFromPath(location.pathname);
  }, [location]);

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/explore" element={<ExploreGames />} />
        <Route
          path="/game/:id"
          element={
            <ProtectedRoute>
              <GameDetails />
            </ProtectedRoute>
          }
        />
        <Route
          path="/my-profile"
          element={
            <ProtectedRoute>
              <MyProfile />
            </ProtectedRoute>
          }
        />
        <Route
          path="/update-profile"
          element={
            <ProtectedRoute>
              <UpdateProfile />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

function App() {
  return (
    <AuthProvider>
      <AppContent />
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </AuthProvider>
  );
}

export default App;
