import BurgerConstructor from "../../pages/BurgerConstructor";
import Login from "../../pages/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "../../pages/Register";
import ForgotPassword from "../../pages/ForgotPassword";
import ResetPassword from "../../pages/ResetPassword";
import Profile from "../../pages/Profile";
import NotFound404 from "../../pages/NotFound404";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import IngredientPage from "../../pages/IngredientPage";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BurgerConstructor />} />
        <Route
          path="/login"
          element={<ProtectedRoute isAuth={true} element={<Login />} />}
        />
        <Route
          path="/register"
          element={<ProtectedRoute isAuth={true} element={<Register />} />}
        />
        <Route
          path="/forgot-password"
          element={
            <ProtectedRoute isAuth={true} element={<ForgotPassword />} />
          }
        />
        <Route
          path="/reset-password"
          element={
            <ProtectedRoute
              isAuth={true}
              allowReset={true}
              element={<ResetPassword />}
            />
          }
        />
        <Route
          path="/profile"
          element={<ProtectedRoute element={<Profile />} />}
        />
        <Route path="/ingredients/:id" element={<IngredientPage />} />
        <Route path="*" element={<NotFound404 />} />
      </Routes>
    </Router>
  );
}
