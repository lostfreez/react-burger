import Header from "../components/Header/Header";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import IngredientWindow from "../components/IngredientWindow/IngredientWindow";
import { fetchIngredients } from "../services/actions/ingredientsAction";
import React from "react";
import Loader from "../components/Loader/Loader";
import Modal from "../components/Modal/Modal";
import IngredientDetails from "../components/IngredientDetails/IngredientDetails";
import { AppDispatch } from "../services/store";

interface IngredientsState {
  data: Data[];
}
interface Data {
  _id: string;
  image_large: string;
  name: string;
  calories: number;
  proteins: number;
  fat: number;
  carbohydrates: number;
}

const IngredientPage: React.FC = () => {
  const { id } = useParams();
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();

  const ingredients = useSelector(
    (state: { getIngredients: { ingredients: IngredientsState } }) =>
      state.getIngredients.ingredients.data
  );
  React.useEffect(() => {
    if (!ingredients || ingredients.length === 0) {
        dispatch(fetchIngredients());
    }
}, [dispatch, ingredients]);

  const ingredient = ingredients
    ? ingredients.find((item: Data) => item._id === id)
    : null;
  const isModal = useLocation().state?.modal;

  React.useEffect(() => {
    if (ingredients && !ingredient) {
      navigate("*");
    }
  }, [ingredients, ingredient, navigate]);

  if (!ingredients) {
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
};

export default IngredientPage;
