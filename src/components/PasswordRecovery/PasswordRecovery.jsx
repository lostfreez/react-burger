import styles from "./PasswordRecovery.module.css";
import { Input } from "@ya.praktikum/react-developer-burger-ui-components";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";

export default function PasswordRecovery() {
  return (
    <div className={styles.sign}>
      <p className={`text text_type_main-medium`}>Восстановление пароля</p>
      <Input
        type={"text"}
        placeholder={"Укажите e-mail"}
        name={"name"}
        errorText={"Ошибка"}
        size={"default"}
        extraClass="mt-6"
      />
      <Button
        htmlType="button"
        type="primary"
        size="medium"
        extraClass={`mt-6`}
      >
        Восстановить
      </Button>
      <div className={`${styles.registration} mt-20`}>
        <p className="text text_type_main-default text_color_inactive mr-4">
          Вспомнили пароль?
        </p>
        <Button
          htmlType="button"
          type="secondary"
          size="medium"
          extraClass={styles.button}
        >
          Войти
        </Button>
      </div>
    </div>
  );
}
