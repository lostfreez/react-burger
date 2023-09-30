import styles from "./Feed.module.css";
import { useSelector } from "react-redux";
import { FeedState } from "../../services/types/types";
import { Order } from "../../services/types/types";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { IngredientsState } from "../../services/types/types";
import { Ingredient } from "../../services/types/types";

const Feed: React.FC = () => {
  const { orders } = useSelector((state: { feed: FeedState }) => state.feed);
  const ingredientsData = useSelector(
    (state: { getIngredients: IngredientsState }) =>
      state.getIngredients.ingredients?.data
  );

  return (
    <div className={`${styles.orders} custom-scroll`}>
      {orders.map((order: Order) => {
        
        const matchedIngredients = order.ingredients.map(ingredientId =>
          ingredientsData.find(ingredient => ingredient._id === ingredientId)
        ).filter(Boolean) as Ingredient[]; 
        const orderTotalPrice = matchedIngredients.reduce(
          (acc, ingredient) => acc + ingredient.price, 
          0
        );

        return (
          <div className={styles.order} key={order._id}>
            <div className={`${styles.id} text text_type_main-medium `}>
              {order.number}
            </div>
            <div className={`${styles.date} text text_type_main-default  `}>
              Сегодня, 16:20 i-GMT+3
            </div>
            <div className={`${styles.burgerName} text text_type_main-medium `}>
              {order.name}
            </div>
            <div className={styles.components}>
              {matchedIngredients.map(ingredient => (
                <div className={styles.imgWrap} key={ingredient._id}>
                  <img
                    className={styles.img}
                    alt={ingredient.name}
                    src={ingredient.image_mobile}
                  />
                </div>
              ))}
            </div>
            <div className={styles.price}>
              <div className="text text_type_digits-default mr-2">{orderTotalPrice}</div>
              <CurrencyIcon type="primary" />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Feed;
