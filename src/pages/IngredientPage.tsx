import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import IngredientWindow from "../components/IngredientWindow/IngredientWindow";
import React from "react";
import { IngredientsState } from "../services/types/types";
import NotFound404 from "./NotFound404";

const IngredientPage: React.FC = () => {
  const { id } = useParams();
  const ingredientsData = useSelector(
    (state: { getIngredients: IngredientsState }) =>
      state.getIngredients.ingredients?.data
  );

  const ingredient = ingredientsData.find((item) => item._id === id);

  if (!ingredient) {
    return <NotFound404 />;
  }

  return <IngredientWindow ingredient={ingredient} />;
};

export default IngredientPage;
