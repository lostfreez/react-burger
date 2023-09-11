import { Logo } from "@ya.praktikum/react-developer-burger-ui-components";
import { BurgerIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { ListIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { ProfileIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./Header.module.css";
import Link from "../Link/Link";
import { useNavigate } from "react-router-dom";
import { clearCount } from "../../services/actions/actionsTypes";
import { clearIngredients } from "../../services/actions/actionsTypes";
import { useDispatch } from "react-redux";

export default function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function clearSection() {
    dispatch(clearCount());
    dispatch(clearIngredients());
  }

  return (
    <header className={styles.Header}>
      <div className={styles.Header__container}>
        <Link
          onClick={() => navigate("/")}
          IconComponent={BurgerIcon}
          linkText="Конструктор"
        />
        <Link IconComponent={ListIcon} linkText="Лента&nbsp;заказов" />
      </div>
      <Logo />
      <Link
        onClick={() => {
          clearSection();
          navigate("/profile");
        }}
        IconComponent={ProfileIcon}
        linkText="Личный&nbsp;кабинет"
      />
    </header>
  );
}
