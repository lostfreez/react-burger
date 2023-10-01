import styles from "./QueueOrders.module.css";
import { useAppSelector } from "../../services/types/typedHooks";

function QueueOrders() {
  const { orders } = useAppSelector((state) => state.feed);
  const lastDoneOrders = orders
    .filter((order) => order.status !== "done")
    .slice(0, 10);

  const firstColumnOrders = lastDoneOrders.slice(0, 5);
  const secondColumnOrders = lastDoneOrders.slice(5);

  return (
    <div className={styles.queueEnd}>
      <div className={styles.firstColumn}>
        {firstColumnOrders.map((order) => (
          <p
            key={order.number}
            className={`${styles.queueText} text text_type_digits-default`}
          >
            {order.number}
          </p>
        ))}
      </div>
      <div className={styles.secondColumn}>
        {secondColumnOrders.map((order) => (
          <p
            key={order.number}
            className={`${styles.queueText} text text_type_digits-default`}
          >
            {order.number}
          </p>
        ))}
      </div>
    </div>
  );
}

export default QueueOrders;
