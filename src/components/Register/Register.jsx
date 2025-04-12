import style from "./Register.module.css";
import Button from "../ButtonRed/ButtonRed";

const Cadastro = () => {
  return (
    <section className={style.cadastro}>
      <div className={style.cadastroWrapper}>
        <form method="post">
          <div className={style.cadastroEmail}>
            <input required type="email" placeholder="Digite seu Email" />
          </div>
          <div className={style.cadastroSenha}>
            <input required type="password" placeholder="Digite sua senha" />
          </div>
          <div>
            <Button type="submit">Enviar</Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Cadastro;
