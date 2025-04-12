import styles from "./Precos.module.css";
import ButtonRed from "../ButtonRed/ButtonRed";

const Precos = () => {
  return (
    <section className={styles.precos}>
      <div className={styles.precoWrapper}>
        <h2 className={styles.precosH2}>
          Veja como você pode investir em VOCÊ com o valor que cabe no bolso
        </h2>
        <div className={styles.contentPrecos}>
          <div className={styles.precoBasico}>
            <span>Mais acessível</span>
            <h2>
              R$<span className={styles.spanH2}>120,00</span>
            </h2>
            <h3>Básico</h3>
            <p>Aprenda oque é preciso para iniciar no Front-End</p>
            <ul>
              <li>
                O primeiro passo para começar no Front-End com o pé direito
              </li>
              <li>Tenha noção do básico para ser um programador Front-End</li>
              <li>Entenda o corpo do HTML e CSS </li>
            </ul>
            <div className={styles.divButton}></div>
          </div>
          <div className={styles.precoEssencial}>
            <span>Mais popular</span>
            <h2>
              R$<span className={styles.spanH2}>155,00</span>
            </h2>
            <h3>Essencial</h3>
            <p>
              Aprenda oque é preciso para manter-se na carreira de Front End
            </p>
            <ul>
              <li>
                Aprenda à como se manter na carreira de formatador Front-End
              </li>
              <li>
                Aprenda melhor os fundamentos e ganhe confiança para seguir em
                frente
              </li>
              <li>Entenda melhor sobre CSS</li>
            </ul>
            <div className={styles.divButton}></div>
          </div>
          <div className={styles.precoAvancado}>
            <span>Nível elite</span>
            <h2>
              R$<span className={styles.spanH2}>190,00</span>
            </h2>
            <h3>Avançado</h3>
            <p>Aprenda oque é preciso para ser o melhor em Front-End</p>
            <ul>
              <li>
                Aprofunde seus conhecimentos e alcance um novo nivel de
                expertise
              </li>
              <li>
                Para quem já domina o básico e quer se tornar referência na área
              </li>
              <li>
                Desafie seus limites e domine técnicas avançadas com
                profundidade
              </li>
            </ul>
            <div className={styles.divButton}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Precos;
