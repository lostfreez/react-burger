import styles from "./Feed.module.css";
import { useSelector } from "react-redux";
import { FeedState } from "../../services/types/types";
import { Order } from "../../services/types/types";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { IngredientsState } from "../../services/types/types";
import { Ingredient } from "../../services/types/types";
import extraIngredientsImage from "../../image/cheese.svg";
import truncateText from "../../services/format/formatText";

const Feed: React.FC = () => {
  const { orders } = useSelector((state: { feed: FeedState }) => state.feed);
  const ingredientsData = useSelector(
    (state: { getIngredients: IngredientsState }) =>
      state.getIngredients.ingredients?.data
  );

  return (
    <div className={`${styles.orders} custom-scroll`}>
      {orders.map((order: Order) => {
        const matchedIngredients = order.ingredients
          .map((ingredientId) =>
            ingredientsData.find(
              (ingredient) => ingredient._id === ingredientId
            )
          )
          .filter(Boolean) as Ingredient[];
        const orderTotalPrice = matchedIngredients.reduce(
          (acc, ingredient) => acc + ingredient.price,
          0
        );
        const displayedIngredients = matchedIngredients.slice(0, 5);
        const extraIngredientsCount = matchedIngredients.length - 5;

        return (
          <div className={styles.order} key={order._id}>
            <div className={`${styles.id} text text_type_main-medium `}>
              {order.number}
            </div>
            <div className={`${styles.date} text text_type_main-default  `}>
              Сегодня, 16:20 i-GMT+3
            </div>
            <div className={`${styles.burgerName} text text_type_main-medium `}>
            {truncateText(order.name, 34)}
            </div>
            <div className={styles.components}>
              {displayedIngredients.map((ingredient, index) => (
                <div
                  style={{ zIndex: displayedIngredients.length - index }}
                  className={styles.imgWrap}
                  key={`${order._id}-${ingredient._id}-${index}`}
                >
                  <img
                    className={styles.img}
                    alt={ingredient.name}
                    src={ingredient.image_mobile}
                  />
                </div>
              ))}

              {extraIngredientsCount > 0 && (
                <div className={styles.darkOverlay}>
                  <img
                    className={styles.img}
                    alt="Extra ingredients"
                    src={extraIngredientsImage}
                  />
                  <div
                    className={`${styles.extraCount} text text_type_digits-default`}
                  >
                    +{extraIngredientsCount}
                  </div>
                </div>
              )}
            </div>
            <div className={styles.price}>
              <div className="text text_type_digits-default mr-2">
                {orderTotalPrice}
              </div>
              <CurrencyIcon type="primary" />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Feed;
