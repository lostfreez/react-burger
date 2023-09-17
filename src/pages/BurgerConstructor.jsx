import Main from "../components/Main/Main";
import React from "react";
import Header from "../components/Header/Header";
import { fetchIngredients } from "../services/actions/ingredientsAction";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/es/hooks/useSelector";

export default function BurgerConstructor() {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(fetchIngredients());
  }, [dispatch]);
  const ingredients = useSelector((state) => state.getIngredients.ingredients);

  return (
    <>
      <Header />
      {!ingredients || ingredients.length === 0 ? null : <Main />}
    </>
  );
}
