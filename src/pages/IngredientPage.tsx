import { useParams } from "react-router-dom";
import IngredientWindow from "../components/IngredientWindow/IngredientWindow";
import React from "react";
import NotFound404 from "./NotFound404";
import { useAppSelector } from "../services/types/typedHooks";

const IngredientPage: React.FC = () => {
  const { id } = useParams();
  const ingredientsData = useAppSelector(
    (state) => state.getIngredients.ingredients?.data
  );

  const ingredient = ingredientsData.find((item) => item._id === id);

  if (!ingredient) {
    return <NotFound404 />;
  }

  return <IngredientWindow ingredient={ingredient} />;
};

export default IngredientPage;
