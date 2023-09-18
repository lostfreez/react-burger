import Header from "../components/Header/Header";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import IngredientWindow from "../components/IngredientWindow/IngredientWindow";
import { fetchIngredients } from "../services/actions/ingredientsAction";
import React from "react";
import Loader from "../components/Loader/Loader";
import Modal from "../components/Modal/Modal";
import IngredientDetails from "../components/IngredientDetails/IngredientDetails";

export default function IngredientPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  React.useEffect(() => {
    dispatch(fetchIngredients());
  }, [dispatch]);
  const ingredients = useSelector(
    (state) => state.getIngredients.ingredients.data
  );
  const ingredient = ingredients
    ? ingredients.find((item) => item._id === id)
    : null;
  const isModal = useLocation().state?.modal;

  React.useEffect(() => {
    if (ingredients && !ingredient) {
      navigate("*");
    }
  }, [ingredients, ingredient, navigate]);

  if (!ingredients || ingredients.length === 0) {
    return <Loader />;
  }

  if (!ingredient) {
    return null;
  }

  return (
    <>
      <Header />
      {isModal ? (
        <Modal>
          <IngredientDetails />
        </Modal>
      ) : (
        <IngredientWindow ingredient={ingredient} />
      )}
    </>
  );
}
