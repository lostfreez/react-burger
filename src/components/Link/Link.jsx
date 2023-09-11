import styles from "./Link.module.css";
import { useLocation } from "react-router-dom";

export default function Link({ onClick, IconComponent, linkText }) {
  const location = useLocation();
  const isActiveRoute = (route) => {
    return location.pathname === route;
  };

  let activeRoute = "";
  if (onClick) {
    activeRoute = onClick.toString().split('"')[1];
  }

  return (
    <div onClick={onClick} className={styles.link}>
      <IconComponent
        type={isActiveRoute(activeRoute) ? "primary" : "secondary"}
      />
      <p
        className={`text text_type_main-default ${
          isActiveRoute(activeRoute)
            ? "text_color_primary"
            : "text_color_inactive"
        } ml-2`}
      >
        {linkText}
      </p>
    </div>
  );
}
