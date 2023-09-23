import { Link } from "react-router-dom";
import styles from "./NotFound404.module.css";

export default function NotFound404() {
  return (
    <div className={styles.page}>
      <h1 className="text text_type_main-large">Oops! 404 Error</h1>
      <p className="text text_type_main-large">
        The page you requested does not exist
      </p>
      <br />
      <br />
      <p className="text text_type_main-large">
        check the address or try <Link to="/">homepage</Link>
      </p>
    </div>
  );
}
