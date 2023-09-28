import Main from "../components/Main/Main";
import React from "react";
import { fetchIngredients } from "../services/actions/ingredientsAction";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { AppDispatch } from "../services/store";
import { IngredientsState } from "../services/types/types";

const BurgerConstructor: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const response = useSelector(
    (state: { getIngredients: IngredientsState }) =>
      state.getIngredients.ingredients
  );
  React.useEffect(() => {
    if (!response.success) {
      dispatch(fetchIngredients());
    }
  }, [dispatch, response.success]);

  if (!response.success) {
    return null;
  }

  return <Main />;
};

export default BurgerConstructor;
