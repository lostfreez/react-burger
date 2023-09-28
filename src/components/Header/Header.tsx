import { Logo } from "@ya.praktikum/react-developer-burger-ui-components";
import { BurgerIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { ListIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { ProfileIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./Header.module.css";
import Link from "../Link/Link";
import { useNavigate } from "react-router-dom";

const Header: React.FC = () => {
  const navigate = useNavigate();

  return (
    <header className={styles.Header}>
      <div className={styles.Header__container}>
        <Link
          onClick={() => navigate("/")}
          IconComponent={BurgerIcon}
          linkText="Конструктор"
          route="/"
        />
        <Link IconComponent={ListIcon} linkText="Лента&nbsp;заказов" />
      </div>
      <Logo />
      <Link
        onClick={() => {
          navigate("/profile");
        }}
        IconComponent={ProfileIcon}
        linkText="Личный&nbsp;кабинет"
        route="/profile"
      />
    </header>
  );
};

export default Header;
