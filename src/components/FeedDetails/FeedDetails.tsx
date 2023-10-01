import styles from "./FeedDetails.module.css";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { useAppSelector } from "../../services/types/typedHooks";
import { Order } from "../../services/types/types";
import { formatStatus } from "../../services/format/formatStatus";
import truncateText from "../../services/format/formatText";
import formatDate from "../../services/format/formatDate";
import { Ingredient } from "../../services/types/types";
import React from "react";

interface Props {
  order: Order;
}

const FeedDetails: React.FC<Props> = ({ order }) => {
  const ingredientsData = useAppSelector(
    (state) => state.getIngredients.ingredients?.data
  );
  const matchedIngredients = order.ingredients
    .map((ingredientId) =>
      ingredientsData.find((ingredient) => ingredient._id === ingredientId)
    )
    .filter(Boolean) as Ingredient[];

  const groupedIngredients = matchedIngredients.reduce((acc, ingredient) => {
    if (!acc[ingredient._id]) {
      acc[ingredient._id] = {
        ...ingredient,
        count: 0,
      };
    }

    acc[ingredient._id].count += 1;

    return acc;
  }, {} as Record<string, Ingredient & { count: number }>);
  const totalCost = Object.values(groupedIngredients).reduce(
    (acc, ingredient) => acc + ingredient.price * ingredient.count,
    0
  );

  return (
    <div className={styles.page}>
      <div className={styles.window}>
        <div className={`${styles.head} text text_type_digits-medium`}>
          #{order.number}
        </div>
        <div className="text text_type_main-medium mt-10">
          {truncateText(order.name, 50)}
        </div>
        <div
          className={`${styles.text} ${
            order.status === "done" ? styles.textDone : ""
          } text text_type_main-default mt-3`}
        >
          {formatStatus(order.status)}
        </div>
        <div className="text text_type_main-medium mt-15 mb-6">Состав:</div>
        <div className={`${styles.ingredients} custom-scroll`}>
          {Object.values(groupedIngredients).map((ingredientData) => (
            <div className={styles.ingredient} key={ingredientData._id}>
              <div className={styles.imgWrap}>
                <img
                  className={styles.img}
                  alt={ingredientData.name}
                  src={ingredientData.image_mobile}
                />
              </div>
              <div
                className={`${styles.name} text text_type_main-default ml-4`}
              >
                {ingredientData.name}
              </div>
              <div className="text text_type_digits-default ml-4 mr-2">
                {ingredientData.count}&nbsp;&times;&nbsp;{ingredientData.price}
              </div>
              <CurrencyIcon type="primary" />
            </div>
          ))}
        </div>
        <div className={styles.datePrice}>
          <div className={`${styles.date} text text_type_main-default`}>
            {formatDate(order.updatedAt)}
          </div>
          <div className={styles.priceContainer}>
            <div className={`${styles.price} text text_type_digits-default`}>
              {totalCost}
            </div>
            <CurrencyIcon type="primary" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(FeedDetails);
