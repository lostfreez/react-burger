import OrderMyOrder from "../OrderMyOrder/OrderMyOrder";
import ProfileNavigate from "../ProfileNavigate/ProfileNavigate";
import styles from "./MyOrder.module.css";

function MyOrder() {
  return (
    <div className={styles.page}>
      <ProfileNavigate />
      <OrderMyOrder />
    </div>
  );
}

export default MyOrder;
