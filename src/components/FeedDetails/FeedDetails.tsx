import styles from "./FeedDetails.module.css";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { useSelector } from "react-redux";
import { IngredientsState } from "../../services/types/types";

function FeedDetails() {
  const ingredientsData = useSelector(
    (state: { getIngredients: IngredientsState }) =>
      state.getIngredients.ingredients?.data
  );
  return (
    <div className={styles.page}>
      <div className={styles.window}>
        <div className={`${styles.head} text text_type_digits-medium`}>
          #034533
        </div>
        <div className="text text_type_main-medium mt-10">
          #Black Hole Singularity острый бургер
        </div>
        <div className={`${styles.text} text text_type_main-default mt-3`}>
          Выполнен
        </div>
        <div className="text text_type_main-medium mt-15 mb-6">Состав:</div>
        <div className={`${styles.ingredients} custom-scroll`}>
          <div className={styles.ingredient}>
            <div className={styles.imgWrap}>
              <img
                className={styles.img}
                alt={ingredientsData[0].name}
                src={ingredientsData[0].image_mobile}
              />
            </div>
            <div className={`${styles.name} text text_type_main-default ml-4`}>
              Флюоресцентная булка R2-D3
            </div>
            <div className="text text_type_digits-default ml-4 mr-2">
              2&nbsp;&times;&nbsp;20
            </div>
            <CurrencyIcon type="primary" />
          </div>
          <div className={styles.ingredient}>
            <div className={styles.imgWrap}>
              <img
                className={styles.img}
                alt={ingredientsData[0].name}
                src={ingredientsData[0].image_mobile}
              />
            </div>
            <div className={`${styles.name} text text_type_main-default ml-4`}>
              Флюоресцентная булка R2-D3
            </div>
            <div className="text text_type_digits-default ml-4 mr-2">
              2&nbsp;&times;&nbsp;20
            </div>
            <CurrencyIcon type="primary" />
          </div>
          <div className={styles.ingredient}>
            <div className={styles.imgWrap}>
              <img
                className={styles.img}
                alt={ingredientsData[0].name}
                src={ingredientsData[0].image_mobile}
              />
            </div>
            <div className={`${styles.name} text text_type_main-default ml-4`}>
              Флюоресцентная булка R2-D3
            </div>
            <div className="text text_type_digits-default ml-4 mr-2">
              2&nbsp;&times;&nbsp;20
            </div>
            <CurrencyIcon type="primary" />
          </div>
          <div className={styles.ingredient}>
            <div className={styles.imgWrap}>
              <img
                className={styles.img}
                alt={ingredientsData[0].name}
                src={ingredientsData[0].image_mobile}
              />
            </div>
            <div className={`${styles.name} text text_type_main-default ml-4`}>
              Флюоресцентная булка R2-D3
            </div>
            <div className="text text_type_digits-default ml-4 mr-2">
              2&nbsp;&times;&nbsp;20
            </div>
            <CurrencyIcon type="primary" />
          </div>
          <div className={styles.ingredient}>
            <div className={styles.imgWrap}>
              <img
                className={styles.img}
                alt={ingredientsData[0].name}
                src={ingredientsData[0].image_mobile}
              />
            </div>
            <div className={`${styles.name} text text_type_main-default ml-4`}>
              Флюоресцентная булка R2-D3
            </div>
            <div className="text text_type_digits-default ml-4 mr-2">
              2&nbsp;&times;&nbsp;20
            </div>
            <CurrencyIcon type="primary" />
          </div>
        </div>
        <div className={styles.datePrice}>
          <div className={`${styles.date} text text_type_main-default`}>
            Вчера, 13:50 i-GMT+3
          </div>
          <div className={styles.priceContainer}>
            <div className={`${styles.price} text text_type_digits-default`}>
              510
            </div>
            <CurrencyIcon type="primary" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeedDetails;
