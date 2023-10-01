import React from "react";
import styles from "./Registration.module.css";
import { Input } from "@ya.praktikum/react-developer-burger-ui-components";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { Link } from "react-router-dom";
import { register } from "../../services/actions/registerAction";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../services/types/typedHooks";

const Registration: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [userName, setName] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [email, setEmail] = React.useState("");

  const handeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(register(userName, password, email, navigate));
  };

  return (
    <div className={styles.sign}>
      <p className={`text text_type_main-medium`}>Регистрация</p>
      <form onSubmit={handeSubmit} className={styles.form}>
        <Input
          type={"text"}
          placeholder={"Имя"}
          name={"name"}
          errorText={"Ошибка"}
          size={"default"}
          extraClass="mt-6"
          value={userName}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          type={"email"}
          placeholder={"E-mail"}
          name={"name"}
          errorText={"Ошибка"}
          size={"default"}
          extraClass="mt-6"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type={"password"}
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
          htmlType="submit"
          type="primary"
          size="medium"
          extraClass={`mt-6`}
        >
          Зарегистрироваться
        </Button>
      </form>
      <div className={`${styles.registration} mt-20`}>
        <p className="text text_type_main-default text_color_inactive mr-4">
          Уже зарегистрированы?
        </p>
        <Link to="/login">
          <Button
            htmlType="button"
            type="secondary"
            size="medium"
            extraClass={styles.button}
          >
            Войти
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Registration;
