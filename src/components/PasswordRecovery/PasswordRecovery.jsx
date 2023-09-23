import styles from "./PasswordRecovery.module.css";
import { Input } from "@ya.praktikum/react-developer-burger-ui-components";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { Link } from "react-router-dom";
import { recoverPassword } from "../../services/actions/recoverPasswordAction";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import React from "react";

export default function PasswordRecovery() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = React.useState("");
  const handleClick = async () => {
    const result = await dispatch(recoverPassword(email));
    if (result && result.success) {
      localStorage.setItem("allowResetPassword", true);
      navigate("/reset-password");
    }
  };

  return (
    <div className={styles.sign}>
      <p className={`text text_type_main-medium`}>Восстановление пароля</p>
      <Input
        type={"email"}
        placeholder={"Укажите e-mail"}
        name={"name"}
        errorText={"Ошибка"}
        size={"default"}
        extraClass="mt-6"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Button
        htmlType="button"
        type="primary"
        size="medium"
        extraClass={`mt-6`}
        onClick={handleClick}
      >
        Восстановить
      </Button>
      <div className={`${styles.registration} mt-20`}>
        <p className="text text_type_main-default text_color_inactive mr-4">
          Вспомнили пароль?
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
}
