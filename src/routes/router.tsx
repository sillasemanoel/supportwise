// Dependencies
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
// Components
import LoginPage from "../pages/auth/login/login";
import RegisterPage from "../pages/auth/register/register";
import ForgotThePasswordPage from "../pages/auth/forgotThePassword/forgotThePassword";
import HomePage from "../pages/main/home";

export default function AppRouter() {
  const isLoggedInLocalStorage = !!localStorage.getItem("isLoggedIn");
  const isLoggedInSessionStorage = !!sessionStorage.getItem("isLoggedIn");
  const isLoggedIn = isLoggedInLocalStorage || isLoggedInSessionStorage;

  return (
    <Router>
      <Routes>
        <Route
          path="*"
          element={
            isLoggedIn ? (
              <Navigate to="/home" replace />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />
        <Route
          path="/home"
          element={isLoggedIn ? <HomePage /> : <Navigate to="/login" replace />}
        />
        <Route
          path="/login"
          element={isLoggedIn ? <Navigate to="/home" replace /> : <LoginPage />}
        />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/forgotThePassword" element={<ForgotThePasswordPage />} />
      </Routes>
    </Router>
  );
}
