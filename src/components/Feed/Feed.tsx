import styles from "./Feed.module.css";
import {
  useAppDispatch,
  useAppSelector,
} from "../../services/types/typedHooks";
import { Order, Ingredient } from "../../services/types/types";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import extraIngredientsImage from "../../image/cheese.svg";
import truncateText from "../../services/format/formatText";
import formatDate from "../../services/format/formatDate";
import { useLocation } from "react-router-dom";
import { formatStatus } from "../../services/format/formatStatus";
import { viewOrder } from "../../services/reducers/orderViewReducer";
import { openModal } from "../../services/reducers/modalReducers";

const Feed: React.FC = () => {
  const dispatch = useAppDispatch();
  const location = useLocation();
  const isProfileOrdersPath = location.pathname === "/profile/orders";
  const { orders } = useAppSelector((state) => state.feed);
  const ingredientsData = useAppSelector(
    (state) => state.getIngredients.ingredients?.data
  );
  const handleClick = (order: Order) => {
    dispatch(viewOrder(order));
    dispatch(openModal("orderId"));
    const newPath = isProfileOrdersPath
      ? `/profile/orders/${order._id}`
      : `/feed/${order._id}`;
    window.history.pushState(null, "", newPath);
  };

  return (
    <div className={`${styles.orders} custom-scroll`}>
      {(isProfileOrdersPath ? orders.slice().reverse() : orders).map(
        (order: Order) => {
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
            <div
              className={`${styles.order}`}
              key={order._id}
              onClick={() => handleClick(order)}
            >
              <div className={`${styles.id} text text_type_main-medium `}>
                {order.number}
              </div>
              <div className={`${styles.date} text text_type_main-default  `}>
                {formatDate(order.updatedAt)}
              </div>
              <div
                className={`${styles.burgerName} text text_type_main-medium mt-6`}
              >
                {truncateText(order.name, 34)}
              </div>
              {isProfileOrdersPath && (
                <div
                  className={`${styles.orderStatus} ${
                    order.status === "done" ? styles.textDone : ""
                  } text text_type_main-default mt-2`}
                >
                  {formatStatus(order.status)}
                </div>
              )}
              <div className={`${styles.components} mt-6`}>
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
                {displayedIngredients
                  .slice()
                  .reverse()
                  .map((ingredient, index) => (
                    <div
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
              </div>
              <div className={styles.price}>
                <div className="text text_type_digits-default mr-2">
                  {orderTotalPrice}
                </div>
                <CurrencyIcon type="primary" />
              </div>
            </div>
          );
        }
      )}
    </div>
  );
};

export default Feed;
