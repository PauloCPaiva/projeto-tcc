import style from "../Courses/Courses.module.css"

const Cursos = () => {
  return (
    <section className={style.Curso}>
      <div className={style.cursoWrapper}>
        <div className={style.curso1}>
          <h2>In tecnologia da informação</h2>
          <p>Descrição do curso:</p>
          <nav>
            <ul>
              <li>Hadware vs Software</li>
              <li>O que é software</li>
              <li>Redes</li>
              <li>O que é Git</li>
              <li>O que é Docker</li>
              <li>Introdução a gestão de projeto</li>
            </ul>
          </nav>
        </div>
        <div className={style.curso2}>
          <h2>Lógica de Programação</h2>
          <p>Descrição do curso:</p>
          <nav>
            <ul>
              <li>Linguagem C</li>
              <li>O que é álgebra booleana</li>
              <li>Estruturas de dados</li>
              <li>Tipos de dados</li>
              <li>Pseudocódigo</li>
              <li>Operadores</li>
            </ul>
          </nav>
        </div>
        <div className={style.curso3}>
          <h2>FrontEnd essencial</h2>
          <p>Descrição do curso:</p>
          <nav>
            <ul>
              <li>O que é HTML</li>
              <li>Formato do HTML</li>
              <li>Tags do HTML</li>
              <li>CSS</li>
            </ul>
          </nav>
        </div>
        <div className={style.curso4}>
          <h2>Desenvolvimento Web</h2>
          <p>Descrição do curso:</p>
          <nav>
            <ul>
              <li>Introdução ao JavaScript</li>
              <li>JavaScript</li>
              <li>Comandos do JavaScript</li>
              <li>Metodos do JavaScript</li>
              <li>Funções do JavaScript</li>
              <li>Projetos simples com JavaScript</li>
            </ul>
          </nav>
        </div>
      </div>
    </section>
  );
};

export default Cursos;
