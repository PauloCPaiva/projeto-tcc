import { Link } from "react-router-dom";
import styles from "./ButtonRed.module.css";

const Button = ({ children, link }) => {
  return (
    <div className={styles.btnWrapper}>
      <Link to={link} className={styles.linkBtn}>
        {children}
      </Link>
    </div>
  );
};

export default Button;