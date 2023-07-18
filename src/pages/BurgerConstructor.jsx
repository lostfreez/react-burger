import Main from "../components/Main/Main";
import React from "react";
import Header from "../components/Header/Header";
import { fetchIngredients } from "../services/actions/ingredientsAction";
import { useDispatch } from "react-redux";

export default function BurgerConstructor() {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(fetchIngredients());
  }, [dispatch]);
  return (
    <>
      <Header />
      <Main />
    </>
  );
}
