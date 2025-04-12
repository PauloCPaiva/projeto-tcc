
import img1 from "../../assets/img/tecnologia.svg";
import img2 from "../../assets/img/logica.svg";
import img3 from "../../assets/img/frontend.svg";
import img4 from "../../assets/img/desenvolvimento.svg";

const listCourses = [
  {
    //   imgLink: "https://example.com/curso.jpg",
    imgSrc: `${img1}`,
    imgTitle: "Imagem do curso",
    titlespan: "Introdução ",
    title: "a tecnologia da informação",
    courseInfo: [
        "Hadware vs Software",
        "O que é software",
        "Redes",
        "O que é Git",
        "O que é Docker",
        "Introdução a gestão de projeto"
    ],
  },
  {
    imgSrc: `${img2}`,
    imgTitle: "Imagem do curso",
    titlespan: "Lógica ",
    title: "de Programação",
    courseInfo: [
      "Linguagem C",
      "O que é álgebra booleana",
      "Tipos de dados",
      "Pseudocódigo",
      "Operadores",
    ],
  },
  {
    imgSrc: `${img3}`,
    imgTitle: "Imagem do curso",
    titlespan: "FrontEnd ",
    title: "essencial",
    courseInfo: [
        "O que é HTML",
        "Formato do HTML",
        "Tags do HTML",
        "CSS",
    ],
  },
  {
    imgSrc:  `${img4}`,
    imgTitle: "Imagem do curso",
    titlespan: "Desenvolvimento ",
    title: "Web",
    courseInfo: [
        "Introdução ao JavaScript",
        "JavaScript",
        "Comandos do JavaScript",
        "Metodos do JavaScript",
        "Funções do JavaScript",
        "Projetos simples com JavaScript",
    ],
  },
];

export default listCourses;
