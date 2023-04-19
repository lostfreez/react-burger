import React from "react";
import styles from "./Link.module.css";

export default function Link({ IconComponent, linkText, className, type }) {
  return (
    <div className={styles.link}>
      <IconComponent type={type} />
      <p className={`${className}  `}>{linkText}</p>
    </div>
  );
}
