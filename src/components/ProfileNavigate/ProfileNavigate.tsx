import styles from "./ProfileNavigate.module.css";
import { logoutUser } from "../../services/actions/logoutAction";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useAppDispatch } from "../../services/types/typedHooks";

function ProfileNavigate() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const isActiveRoute = (route: string) => {
    return location.pathname === route;
  };

  return (
    <div className={`${styles.window} mr-15`}>
      <p
        className={`${styles.link} ${
          isActiveRoute("/profile")
            ? "text_color_primary"
            : "text_color_inactive"
        } text text_type_main-medium`}
        onClick={() => {
          navigate("/profile");
        }}
      >
        Профиль
      </p>
      <p
        className={`${styles.link} ${
          isActiveRoute("/profile/orders")
            ? "text_color_primary"
            : "text_color_inactive"
        } text text_type_main-medium`}
        onClick={() => {
          navigate("/profile/orders");
        }}
      >
        История заказов
      </p>
      <p
        className={`${styles.link}   text text_type_main-medium text_color_inactive`}
        onClick={() => {
          dispatch(logoutUser(navigate));
        }}
      >
        Выход
      </p>
      <p className="text text_type_main-default text_color_inactive mt-20">
        В этом разделе вы можете изменить&nbsp;свои персональные данные
      </p>
    </div>
  );
}

export default ProfileNavigate;
