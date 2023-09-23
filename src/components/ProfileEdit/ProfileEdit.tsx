import styles from "./ProfileEdit.module.css";
import {
  EmailInput,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { logoutUser } from "../../services/actions/logoutAction";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import React from "react";
import { useSelector } from "react-redux";
import { getUserData } from "../../services/actions/getUserDataAction";
import Loader from "../Loader/Loader";
import { AppDispatch } from "../../services/store";

import { AuthState } from "../../services/types/types";

const ProfileEdit: React.FC<{}> = () => {
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();
  const userData = useSelector(
    (state: { authentificate: AuthState }) => state.authentificate
  );
  const [name, setName] = React.useState(userData.name || "");
  const [email, setEmail] = React.useState(userData.email || "");
  const [password, setPassword] = React.useState("");

  React.useEffect(() => {
    const fetchData = async () => {
      await dispatch(getUserData());
    };
    if (!userData.name || !userData.email) {
      fetchData();
    }
  }, [dispatch, userData]);

  React.useEffect(() => {
    setName(userData.name || "");
    setEmail(userData.email || "");
  }, [userData]);

  if (!name && !email) {
    return <Loader />;
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
            name={"email"}
            placeholder={"Имя"}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <EmailInput
            name={"email"}
            extraClass={`mt-6`}
            placeholder={"Логин"}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <PasswordInput
            value={password}
            name={"password"}
            extraClass={`mt-6`}
            placeholder={"Пароль"}
            icon={"EditIcon"}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default ProfileEdit;
