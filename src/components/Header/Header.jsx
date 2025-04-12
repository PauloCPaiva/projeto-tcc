import { useState } from "react";
import styles from "../Header/Header.module.css";
import LogoHeader from "../../assets/img/procode-logo.svg";
import iconCloser from "../../assets/img/menu-closer.svg";
import iconBars from "../../assets/img/menu-togle.svg";
import ButtonRed from "../ButtonRed/ButtonRed";

const Header = () => {
  const [menuActive, setMenuActive] = useState(false);
  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };
  return (
    <header className={`${styles.Header} ${menuActive ? styles.active : ""}`}>
      <div className={styles.wrapperHeader}>
        <div>
          <button>
            <img src={LogoHeader} alt="" />
          </button>
        </div>
        <button onClick={toggleMenu} id={styles.buttonMobile}>
          <img
            src={menuActive ? iconCloser : iconBars}
            id={styles.menuIcons}
            alt=""
          />
        </button>
        <nav className={`${styles.navMenu} ${menuActive ? styles.active : ""}`}>
          <ul className={styles.ulMenu}>
            <li className={styles.navLi}>
              <a href="#hero">Apresentação</a>
            </li>
            <li className={styles.navLi}>
              <a href="#cursos">Cursos</a>
            </li>
            <li className={styles.navLi}>
              <a href="#gallery">Galeria</a>
            </li>
            <li className={styles.navLi}>
              <a href="#valores">Valores</a>
            </li>
            <li className={styles.navLi}>
              <a href="#footer">Redes Sociais</a>
            </li>
            <li>
              <ButtonRed link="/cadastro">Cadastre-se</ButtonRed>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
