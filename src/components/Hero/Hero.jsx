import styles from "../Hero/Hero.module.css"
import HeroImg from "../../assets/img/programming-background.jpg"

const Hero = () => {
  return (
    <section className={styles.container}>
      <div>
        <h1>A escola de tecnologia onde você aprende de verdade</h1>
        <p>Seja bem-vindo ao curso de Programação Front-End, uma jornada voltada para quem deseja aprender a criar interfaces modernas, interativas e responsivas para a web. Neste curso você vai aprender a criar sites e interfaces modernas usando as principais tecnologias do mercado: HTML para estruturar páginas, CSS para estilizar, JavaScript para interatividade e React para construir interfaces dinâmicas e reutilizáveis.</p>
        <div className={styles.btnHome}>
          <a href="">Conheça o nosso curso</a>
        </div>
      </div>
      <div>
        <img src={HeroImg} alt="Image Home" />
      </div>
    </section>
  )
}

export default Hero