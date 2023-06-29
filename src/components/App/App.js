import Main from "../Main/Main";
import React from "react";
import Header from "../Header/Header";
import { fetchIngredients } from "../../services/actions/ingredientsAction";
import { useDispatch } from "react-redux";


export default function App() {
  const [ingredients, setIngredients] = React.useState([]);
  const dispatch = useDispatch();
  
 

  React.useEffect(() => {
    dispatch(fetchIngredients());
  }, [dispatch]);
  return (
    <>
      <Header />
      <Main />
      <div id="modal-root"></div>
    </>
  );
}
