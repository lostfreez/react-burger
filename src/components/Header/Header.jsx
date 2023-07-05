import { Logo } from "@ya.praktikum/react-developer-burger-ui-components";
import { BurgerIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { ListIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { ProfileIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./Header.module.css";
import Link from "../Link/Link";

export default function Header() {
  return (
    <div className={styles.Header}>
      <div className={styles.Header__container}>
        <Link
          IconComponent={BurgerIcon}
          type={"primary"}
          linkText="Конструктор"
          className={"text text_type_main-default text_color_primary ml-2"}
        />
        <Link
          IconComponent={ListIcon}
          type={"secondary"}
          linkText="Лента&nbsp;заказов"
          className={"text text_type_main-default text_color_inactive ml-2"}
        />
      </div>
      <Logo />
      <Link
        IconComponent={ProfileIcon}
        type={"secondary"}
        linkText="Личный&nbsp;кабинет"
        className={"text text_type_main-default text_color_inactive ml-2"}
      />
    </div>
  );
}
