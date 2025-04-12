import styles from "../hero/Hero.module.css";
import HeroImg from "../../assets/img/hero-img.png";
import ButtonRed from "../ButtonRed/ButtonRed";

const Hero = () => {
  return (
    <section className={styles.heroWrapper}>
      <div className={styles.heroContent}>
        <h1>
          A <span>escola</span> de
          <br /> tecnologia onde você
          <span> aprende de verdade</span>
        </h1>
        <p>
          Seja bem-vindo ao curso de Programação Front-End, uma jornada voltada
          para quem deseja aprender a criar interfaces modernas, interativas e
          responsivas para a web.
        </p>
        <ButtonRed>Cadastre-se</ButtonRed>
      </div>
      <div className={styles.ContainerImg}>
        <img src={HeroImg} alt="Image Home" />
      </div>
    </section>
  );
};

export default Hero;
