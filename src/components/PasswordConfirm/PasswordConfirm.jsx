import styles from "./PasswordConfirm.module.css";
import { Input } from "@ya.praktikum/react-developer-burger-ui-components";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";

export default function PasswordConfirm() {
  return (
    <div className={styles.sign}>
      <p className={`text text_type_main-medium`}>Восстановление пароля</p>
      <Input
        type={"text"}
        placeholder={"Введите новый пароль"}
        name={"name"}
        errorText={"Ошибка"}
        size={"default"}
        extraClass="mt-6"
        icon={"ShowIcon"}
      />
      <Input
        type={"text"}
        placeholder={"Введите код из письма"}
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
        Сохранить
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
