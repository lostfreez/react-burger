import styles from "./ProfileEdit.module.css";
import { EmailInput } from "@ya.praktikum/react-developer-burger-ui-components";
import { getProfile } from "../../services/actions/getProfileAction";
import React from "react";
import { useDispatch } from "react-redux";

export default function ProfileEdit() {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(getProfile());
  }, [dispatch]);
  return (
    <div className={styles.page}>
      <div className={styles.profile}>
        <div className={`${styles.window} mr-15`}>
          <p className={`${styles.text} text text_type_main-medium`}>Профиль</p>
          <p
            className={`${styles.text} text text_type_main-medium text_color_inactive`}
          >
            История заказов
          </p>
          <p
            className={`${styles.text} text text_type_main-medium text_color_inactive`}
          >
            Выход
          </p>
          <p className="text text_type_main-default text_color_inactive mt-20">
            В этом разделе вы можете изменить&nbsp;свои персональные данные
          </p>
        </div>
        <div>
          <EmailInput
            name={"email"}
            isIcon={false}
            placeholder={"Имя"}
            icon={"EditIcon"}
          />
          <EmailInput
            name={"email"}
            isIcon={false}
            extraClass={`mt-6`}
            placeholder={"Логин"}
            icon={"EditIcon"}
          />
          <EmailInput
            name={"email"}
            isIcon={false}
            extraClass={`mt-6`}
            placeholder={"Пароль"}
            icon={"EditIcon"}
          />
        </div>
      </div>
    </div>
  );
}
