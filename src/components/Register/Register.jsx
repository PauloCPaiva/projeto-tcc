import styles from "./Register.module.css";
import Button from "../ButtonRed/ButtonRed";

const Cadastro = () => {
  return (
    <section className={styles.cadastro}>
      <div className={styles.cadastroWrapper}>
        <h2>Cadastre-se para ter acesso ao melhor que o curso pode te proporcionar</h2>
        <form method="post">
          <div className={styles.cadastroEmail}>
            <input required type="email" placeholder="Digite seu Email" />
          </div>
          <div className={styles.cadastroSenha}>
            <input required type="password" placeholder="Digite sua senha" />
          </div>
          <div className={styles.divButton}>
            <Button type="submit">Enviar</Button>
            <Button  link="/">Voltar</Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Cadastro;
