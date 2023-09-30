import styles from "./LastOrders.module.css";
import { FeedState } from "../../services/types/types";
import { useSelector } from "react-redux";

function LastOrders() {
  const { orders } = useSelector((state: { feed: FeedState }) => state.feed);
  const lastDoneOrders = orders
    .filter((order) => order.status === "done")
    .slice(0, 5);
  return (
    <div className={styles.queueEnd}>
      {lastDoneOrders.map((order) => (
        <p
          key={order.number}
          className={`${styles.queueText} text text_type_digits-default`}
        >
          {order.number}
        </p>
      ))}
    </div>
  );
}

export default LastOrders;
