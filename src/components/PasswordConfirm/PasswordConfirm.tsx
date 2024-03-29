import styles from "./PasswordConfirm.module.css";
import { Input } from "@ya.praktikum/react-developer-burger-ui-components";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { useNavigate } from "react-router-dom";
import { savePassword } from "../../services/actions/savePasswordAction";
import { Link } from "react-router-dom";
import React from "react";
import { useAppDispatch } from "../../services/types/typedHooks";

const PasswordConfirm: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [password, setPassword] = React.useState("");
  const [token, setToken] = React.useState("");
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = await dispatch(savePassword(password, token));
    if (result?.success === true) {
      navigate("/login");
    }
  };

  return (
    <div className={styles.sign}>
      <p className={`text text_type_main-medium`}>Восстановление пароля</p>
      <form onSubmit={handleSubmit} className={styles.form}>
        <Input
          type={"password"}
          placeholder={"Введите новый пароль"}
          name={"name"}
          errorText={"Ошибка"}
          size={"default"}
          extraClass="mt-6"
          icon={"ShowIcon"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Input
          type={"text"}
          placeholder={"Введите код из письма"}
          name={"name"}
          errorText={"Ошибка"}
          size={"default"}
          extraClass="mt-6"
          value={token}
          onChange={(e) => setToken(e.target.value)}
        />
        <Button
          htmlType="submit"
          type="primary"
          size="medium"
          extraClass={`mt-6`}
        >
          Сохранить
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

export default PasswordConfirm;
