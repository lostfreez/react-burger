import styles from "./ProfileEdit.module.css";
import { EmailInput } from "@ya.praktikum/react-developer-burger-ui-components";
import { logoutUser } from "../../services/actions/logoutAction";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import React from "react";
import { useSelector } from 'react-redux';


export default function ProfileEdit() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userData = useSelector(state => state.authentificate);
  const [value, setValue] = React.useState(userData.email)
  const onChange = e => {
    setValue(e.target.value)
  }
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
            className={`${styles.text} ${styles.link} text text_type_main-medium text_color_inactive`}
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
        <div>
          <EmailInput
            onChange={onChange}
            name={"email"}
            isIcon={false}
            placeholder={"Имя"}
            icon={"EditIcon"}
            value={value}
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
