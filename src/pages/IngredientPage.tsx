import Header from "../components/Header/Header";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import IngredientWindow from "../components/IngredientWindow/IngredientWindow";
import { fetchIngredients } from "../services/actions/ingredientsAction";
import React from "react";
import { AppDispatch } from "../services/store";
import { IngredientsState } from "../services/types/types";
import NotFound404 from "./NotFound404";

const IngredientPage: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const { id } = useParams();
  const ingredientsData = useSelector(
    (state: { getIngredients: IngredientsState }) =>
      state.getIngredients.ingredients?.data
  );
  const ingredient = ingredientsData.find((item) => item._id === id);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    if (ingredientsData.length === 0) {
      dispatch(fetchIngredients()).then(() => {
        setIsLoading(false);
      });
    } else {
      setIsLoading(false);
    }
  }, [ingredientsData, dispatch]);

  if (isLoading) {
    return null;
  }

  return (
    <>
      <Header />
      {ingredient ? (
        <IngredientWindow ingredient={ingredient} />
      ) : (
        <NotFound404 />
      )}
    </>
  );
};

export default IngredientPage;
