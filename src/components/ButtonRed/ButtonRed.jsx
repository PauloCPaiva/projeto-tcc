import styles from "./ButtonRed.module.css";

const Button = (props, link) => {
  return (
    <div className={styles.btnWrapper}>
            <a href={link} className={styles.linlBtn} {...props}></a>
    </div>
  );
};
export default Button;
