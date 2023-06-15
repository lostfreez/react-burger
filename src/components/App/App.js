import Main from '../Main/Main';
import React from 'react';
import Header from "../Header/Header";

const API_URL = 'https://norma.nomoreparties.space/api/ingredients';

export default function App() {
  const [ingredients, setIngredients] = React.useState([]);

  React.useEffect(() => {
    fetch(API_URL)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Ошибка при получении данных с API');
        }
      })
      .then((response) => {
        setIngredients(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error('Ошибка при получении данных с API:', error);
      });
  }, []);
  return (
    <>
    <Header />
    <Main ingredients={ingredients} />
    <div id='modal-root'></div>
    </>
  );
}




