import styles from "../Footer/Footer.module.css";
import LogoFooter from "../../assets/img/procode-logo.svg";
import Insta from "../../assets/img/insta-icon.svg";
import Face from "../../assets/img/face-icon.svg";
import X from "../../assets/img/twitter-x.svg";
import ButtonRed from "../ButtonRed/ButtonRed";

const Footer = () => {
  return (
    <footer id="footer" className={styles.Footer}>
      <div className={styles.wrapperFooter}>
        <div className={styles.containerFooter}>
          <div>
            <img src={LogoFooter} alt="logo" />
            <p>
            Oferecemos cursos de qualidade, desenvolvidos por especialistas, para ajudar você a crescer na carreira, empreender ou aprender algo novo.
            Nosso compromisso é com a educação acessível, atualizada e prática.
            </p>
          </div>
          <div>
            <p>
              Inscreva-se para saber de novos cursos na ProCode. Se inscreva-se
              abaixo agora!
            </p>
            <div className={styles.emailDiv}>
              <input
                type="email"
                placeholder="Digite o seu email aqui"
                className="input"
              />
              <ButtonRed link="/cadastro">Cadastre-se</ButtonRed>
            </div>
          </div>
        </div>
        <div className={styles.footerCopy}>
          <div className={styles.SocialMediaLogos}>
            <a href="">
              <img src={Insta} alt="Insta" />
            </a>
            <a href="">
              <img src={Face} alt="Face" />
            </a>
            <a href="">
              <img src={X} alt="X" />
            </a>
          </div>
          <p>© 2025 ProCode. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
