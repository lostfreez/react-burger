import styles from "./PasswordRecovery.module.css";
import { Input } from "@ya.praktikum/react-developer-burger-ui-components";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { Link } from "react-router-dom";
import { recoverPassword } from "../../services/actions/recoverPasswordAction";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import React from "react";
import { AppDispatch } from "../../services/store";

const PasswordRecovery: React.FC = () => {
  const navigate = useNavigate();
  const dispatch: AppDispatch = useDispatch();
  const [email, setEmail] = React.useState("");
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = await dispatch(recoverPassword(email));
    if (result?.success) {
      localStorage.setItem("allowResetPassword", "true");
      navigate("/reset-password");
    }
  };

  return (
    <div className={styles.sign}>
      <p className={`text text_type_main-medium`}>Восстановление пароля</p>
      <form onSubmit={handleSubmit} className={styles.form}>
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
          htmlType="submit"
          type="primary"
          size="medium"
          extraClass={`mt-6`}
        >
          Восстановить
        </Button>
      </form>
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
};

export default PasswordRecovery;
