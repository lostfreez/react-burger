import styles from "./Link.module.css";
import { useLocation } from "react-router-dom";

interface IconProps {
  type: "primary" | "secondary";
}
interface Props {
  onClick?: () => void;
  route?: string;
  IconComponent: React.ComponentType<IconProps>;
  linkText: string;
}

const Link: React.FC<Props> = ({ onClick, IconComponent, linkText, route }) => {
  const location = useLocation();
  const isActiveRoute = (route?: string) => {
    return route ? location.pathname === route : false;
  };

  return (
    <div onClick={onClick} className={styles.link}>
      <IconComponent type={isActiveRoute(route) ? "primary" : "secondary"} />
      <p
        className={`text text_type_main-default ${
          isActiveRoute(route) ? "text_color_primary" : "text_color_inactive"
        } ml-2`}
      >
        {linkText}
      </p>
    </div>
  );
};

export default Link;
