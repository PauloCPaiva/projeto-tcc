import styles from "../Footer/Footer.module.css";
import LogoFooter from "../../assets/img/procode-logo.svg";
import Insta from "../../assets/img/insta-icon.svg";
import Face from "../../assets/img/face-icon.svg";
import X from "../../assets/img/twitter-x.svg";
import ButtonRed from "../ButtonRed/ButtonRed";

const Footer = () => {
  return (
    <footer className={styles.Footer}>
      <div className={styles.wrapperFooter}>
        <div className={styles.containerFooter}>
          <div>
            <img src={LogoFooter} alt="logo" />
            <p>
              Esta edição especial do UNO®, o jogo de cartas adorado por todos,
              tem um visual totalmente exclusivo. Concebida com uma estética
              minimalista, essa versão é um grande presente para colecionadores
              de UNO®.
            </p>
          </div>
          <div>
            <p>
              Inscreva-se para saber de novos cursos na procode. Se inscreva-se
              abaixo agora!
            </p>
            <div className={styles.emailDiv}>
              <input
                type="email"
                placeholder="Digite o seu email aqui"
                className="input"
              />
              <ButtonRed>Cadastre-se</ButtonRed>
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
          <p>© 2025 MATTEL. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
