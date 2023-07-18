import React from "react";
import styles from "./Registration.module.css";
import { Input } from "@ya.praktikum/react-developer-burger-ui-components";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";

export default function Registration() {
  return (
    <div className={styles.sign}>
      <p className={`text text_type_main-medium`}>Регистрация</p>
      <Input
        type={"text"}
        placeholder={"Имя"}
        name={"name"}
        errorText={"Ошибка"}
        size={"default"}
        extraClass="mt-6"
      />
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
        Зарегистрироваться
      </Button>
      <div className={`${styles.registration} mt-20`}>
        <p className="text text_type_main-default text_color_inactive mr-4">
          Уже зарегистрированы?
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
