import styles from "./Sign.module.css";
import { Input } from "@ya.praktikum/react-developer-burger-ui-components";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import React from "react";
import { authorisation } from "../../services/actions/authorisationAction";
import { useNavigate } from "react-router-dom";

export default function Sign() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [password, setPassword] = React.useState("");
  const [email, setEmail] = React.useState("");
  const handleClick = () => {
    dispatch(authorisation(email, password))
      .then(() => navigate("/"))
      .catch((error) => console.error("Authorization failed", error));
  };
  return (
    <div className={styles.sign}>
      <p className={`text text_type_main-medium`}>Вход</p>
      <Input
        type={"text"}
        placeholder={"E-mail"}
        name={"name"}
        errorText={"Ошибка"}
        size={"default"}
        extraClass="mt-6"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        type={"text"}
        placeholder={"Пароль"}
        name={"name"}
        errorText={"Ошибка"}
        size={"default"}
        extraClass="mt-6"
        icon={"ShowIcon"}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <Button
        htmlType="button"
        type="primary"
        size="medium"
        extraClass={`mt-6`}
        onClick={handleClick}
      >
        Войти
      </Button>

      <div className={`${styles.registration} mt-20`}>
        <p className="text text_type_main-default text_color_inactive mr-4">
          Вы — новый пользователь?
        </p>
        <Link to="/register">
          <Button
            htmlType="button"
            type="secondary"
            size="medium"
            extraClass={styles.button}
          >
            Зарегистрироваться
          </Button>
        </Link>
      </div>
      <div className={`${styles.registration} mt-4`}>
        <p className="text text_type_main-default text_color_inactive mr-4">
          Забыли пароль?
        </p>
        <Link to="/forgot-password">
          <Button
            htmlType="button"
            type="secondary"
            size="medium"
            extraClass={styles.button}
          >
            Восстановить пароль
          </Button>
        </Link>
      </div>
    </div>
  );
}
