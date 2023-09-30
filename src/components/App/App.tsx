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
import { AppDispatch } from "../../services/store";
import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { IngredientsState } from "../../services/types/types";
import { fetchIngredients } from "../../services/actions/ingredientsAction";
import FeedDetails from "../FeedDetails/FeedDetails";
import MyOrder from "../MyOrder/MyOrder";

const App: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const response = useSelector(
    (state: { getIngredients: IngredientsState }) => state.getIngredients.ingredients
  );

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
        <Route path="/profile/orders" element={<MyOrder />} />
        <Route path="/feedtest" element={<FeedDetails />} />
        <Route path="*" element={<NotFound404 />} />
      </Routes>
    </Router>
  );
};

export default App;
