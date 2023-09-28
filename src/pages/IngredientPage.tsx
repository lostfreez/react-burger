import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import IngredientWindow from "../components/IngredientWindow/IngredientWindow";
import { fetchIngredients } from "../services/actions/ingredientsAction";
import React from "react";
import { AppDispatch } from "../services/store";
import { IngredientsState } from "../services/types/types";
import NotFound404 from "./NotFound404";
import { Ingredient } from "../services/types/types";

const IngredientPage: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const { id } = useParams();
  const ingredientsData = useSelector(
    (state: { getIngredients: IngredientsState }) =>
      state.getIngredients.ingredients?.data
  );
  const [isLoading, setIsLoading] = React.useState(true);
  const [ingredient, setIngredient] = React.useState<Ingredient | null>(null);

  const findIngredientById = React.useCallback(() => {
    const foundIngredient = ingredientsData.find((item) => item._id === id);
    if (foundIngredient) {
      setIngredient(foundIngredient);
    }
  }, [ingredientsData, id]);

  React.useEffect(() => {
    if (ingredientsData.length === 0) {
      dispatch(fetchIngredients()).then(() => {
        findIngredientById();
        setIsLoading(false);
      });
    } else {
      findIngredientById();
      setIsLoading(false);
    }
  }, [ingredientsData, dispatch, findIngredientById]);

  if (isLoading) {
    return null;
  }
  if (ingredient) {
    return <IngredientWindow ingredient={ingredient} />;
  }
  if (!ingredient) {
    return <NotFound404 />;
  }
  return null;
};

export default IngredientPage;
