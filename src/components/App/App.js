import BurgerConstructor from "../../pages/BurgerConstructor";
import Login from "../../pages/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "../../pages/Register";
import ForgotPassword from "../../pages/ForgotPassword";
import ResetPassword from "../../pages/ResetPassword";
import Profile from "../../pages/Profile";
import IngredientPage from "../../pages/IngredientPage";
import NotFound404 from "../../pages/NotFound404";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/"  element={<ProtectedRoute element={<BurgerConstructor />}/>}/>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/ingredients" element={<IngredientPage />} />
        <Route path="*" element={<NotFound404/>}/>
      </Routes>
    </Router>
  );
}


