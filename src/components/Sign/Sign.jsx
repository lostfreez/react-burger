import React from "react";
import styles from "./Sign.module.css";
import { Input } from "@ya.praktikum/react-developer-burger-ui-components";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";

export default function Sign() {
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
      />
      <Input
        type={"text"}
        placeholder={"Пароль"}
        name={"name"}
        errorText={"Ошибка"}
        size={"default"}
        extraClass="mt-6"
        icon={"ShowIcon"}
      />
      <Button
        htmlType="button"
        type="primary"
        size="medium"
        extraClass={`mt-6`}
      >
        Войти
      </Button>
      <div className={`${styles.registration} mt-20`}>
        <p className="text text_type_main-default text_color_inactive mr-4">
          Вы — новый пользователь?
        </p>
        <Button
          htmlType="button"
          type="secondary"
          size="medium"
          extraClass={styles.button}
        >
          Зарегистрироваться
        </Button>
      </div>
      <div className={`${styles.registration} mt-4`}>
        <p className="text text_type_main-default text_color_inactive mr-4">
          Забыли пароль?
        </p>
        <Button
          htmlType="button"
          type="secondary"
          size="medium"
          extraClass={styles.button}
        >
          Восстановить пароль
        </Button>
      </div>
    </div>
  );
}
