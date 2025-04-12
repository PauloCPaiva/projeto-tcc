import styles from "./Course.module.css";
import listCourses from "./infosCourse.js";
// import ButtonRed from "../ButtonRed/ButtonRed.jsx";

const Courses = () => {
  return (
    <section id="cursos" className={styles.Courses}>
      <div className={styles.wrapperCourses}>
        <h2 className={styles.wrapperCoursesH2}>
          Dê o <span>Próximo Passo</span> na Sua Carreira <span>com</span>{" "}
          Nossos Cursos de <span>Tecnologia</span>
        </h2>
        <p>
          Aprenda do zero ao avançado com conteúdos práticos e objetivos.
          Descubra como dominar as bases da programação, redes, desenvolvimento
          web e muito mais — tudo em um só lugar.
        </p>
        <div className={styles.conteinerCard}>
          {listCourses.map((course, index) => (
            <div key={index} className={styles.Card}>
              <div className={styles.containerImg}>
                <img src={course.imgSrc} alt={course.imgTitle} title={course.imgTitle} />
              </div>
              <h2><span>{course.titlespan}</span>{course.title}</h2>
              <ul>
                {course.courseInfo.map((info, i) => (
                  <li key={i}>{info}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        {/* <ButtonRed>Cadastre-se</ButtonRed> */}
      </div>
    </section>
  );
};

export default Courses;
