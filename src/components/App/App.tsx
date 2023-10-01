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
import Header from "../Header/Header";
import OrderFeed from "../OrderFeed/OrderFeed";
import React from "react";
import { fetchIngredients } from "../../services/actions/ingredientsAction";
import OrderPage from "../../pages/OrderPage";
import MyOrder from "../MyOrder/MyOrder";
import { useAppSelector } from "../../services/types/typedHooks";
import { useAppDispatch } from "../../services/types/typedHooks";

const App: React.FC = () => {
  const dispatch = useAppDispatch();
  const response = useAppSelector((state) => state.getIngredients.ingredients);

  React.useEffect(() => {
    if (!response.success) {
      dispatch(fetchIngredients());
    }
  }, [dispatch, response.success]);

  if (!response.success) {
    return null;
  }
  return (
    <Router>
      <Header />
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
        <Route path="/feed" element={<OrderFeed />} />
        <Route
          path="/profile/orders"
          element={<ProtectedRoute element={<MyOrder />} />}
        />
        <Route
          path="/profile/orders/:id"
          element={<ProtectedRoute element={<OrderPage />} />}
        />
        <Route path="/feed/:id" element={<OrderPage />} />
        <Route path="*" element={<NotFound404 />} />
      </Routes>
    </Router>
  );
};

export default App;
