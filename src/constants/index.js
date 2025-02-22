import {
  // mobile,
  // backend,
  // creator,
  // web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  devhatlogo,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  carrent,
  ignitelab,
  metaverse,
  threejs,
  reactninja,
  python,
  ceritificadoUNB,
  miniUNB,
  Simbolo_da_UnB,
  jsninja,
  nextcoder,
  reactzero,
  udemy,
  usp,
  inprogress,
  alura,
  devhat,
  contact3d,
  jsm,
  jest,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "Sobre",
  },
  {
    id: "works",
    title: "Projetos",
  },
  {
    id: "experiences",
    title: "Formações",
  },
  {
    id: "contact",
    title: "Contato",
  },
];


const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "UnB",
    company_name: "UnB - Engenharia de Software",
    icon: Simbolo_da_UnB,
    iconMini: miniUNB,
    iconBg: "#4FA5E0",
    date: "02 de janeiro de 2020 - 10 de dezembro de 2025",
    points: [
        "Graduação cultivada com excelência, destacando-se por uma abordagem prática e inovadora. ",
        "Os alunos são imersos em ambientes colaborativos, estimulando a criatividade e o trabalho em equipe.",
        "A ênfase na resolução de problemas do mundo real definem a formação",
    ],
  },
  {
    title: "Alura",
    company_name: "JAVA JRE E JDK",
    icon: devhatlogo,
    iconMini: devhatlogo,
    iconBg: "#4FA5E0",
    date: "02 de janeiro de 2024 - 10 de janeiro de 2024",
    points: [
      "JVM? JDK? JRE? O que são essas siglas?",
      "Compilando e executando código java",
      "Aprenda a usar Eclipse",
      "Variáveis e controle de fluxo",
      "Conheça os principais tipos do Java"
    ],
  },
  {
    title: "Udemy",
    company_name: "Lógica de Programação e Algoritmos",
    icon: reactninja,
    iconMini: udemy,
    iconBg: "#151d42",
    date: "13 de dezembro de 2021",
    points: [
      "30 Horas de Curso",
      "Variáveis, entrada, saída, processamento, estrutura sequencial, estrutura condicional, estruturas repetitivas, vetores e matrizes",
      "Aplicar todos conhecimentos e resolver todos exercícios nas linguagens C, C++, Python, C# e Java",
    ],
  },
  {
    title: "Usp",
    company_name: "Python 3 - Do zero ao avançado",
    icon: python,
    iconMini: usp,
    iconBg: "#151d42",
    date: "4 de fevereiro de 2021",
    points: [
      "45 Horas de Curso",
      "Ciência da Computação destinado aos alunos regulares da Universidade de São Paulo e a todos os demais interessados em aprender não só a programar em Python",
      "Principais conceitos introdutórios de Ciência da Computação",
      "USP - Universidade de São Paulo",
    ],
  },
];



const projects = [
  {
    name: "Paula App",
    description:
      "Aplicativo de alfabetização para o Governo do Distrito Federal em parceria com a Universidade de Brasília.",
    tags: [
      {
        name: "Flutter",
        color: "blue-text-gradient",
      },
      {
        name: "Dart",
        color: "pink-text-gradient",
      },

      {
        name: "SQL",
        color: "blue-text-gradient",
      },
    ],
    image: devhat,
    source_code_link: "https://github.com/pedrolucas12/Paula-app",
    link: "https://github.com/pedrolucas12/Paula-app",
  },

  {
    name: "UniShare",
    description:
      "O objetivo do UniBuddy é auxiliar, de forma organizada e prática, no encontro entre motoristas dispostos a oferecer carona solidária e passageiros que precisam recebê-las.",
    tags: [
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },

      {
        name: "SQL",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: contact3d,
    source_code_link: "https://github.com/pedrolucas12/UniShare",
    link: "https://github.com/pedrolucas12/UniShare",
  },

  {
    name: "Personal - Website",
    description:
      "Uma página web para um personal trainer, com o objetivo de divulgar seu trabalho e atrair novos clientes.",
    tags: [
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },

      {
        name: "CSS",
        color: "blue-text-gradient",
      },
      {
        name: "HTML",
        color: "white-text-gradient",
      },
    ],
    image: jsm,
    source_code_link: "https://github.com/pedrolucas12/PersonalTrainerWebsite",
    link: "https://personaltrainer-eight.vercel.app",
  },

  {
    name: "Projeto Java ",
    description:
      "Sistema de gerenciamento de funcionários em Java, utilizando o Hibernate e banco de dados MySQL.",
    tags: [
      {
        name: "Java",
        color: "blue-text-gradient",
      },

      {
        name: "TomCat",
        color: "blue-text-gradient",
      },
      {
        name: "SQL",
        color: "pink-text-gradient",
      },
      {
        name: "Hibernate",
        color: "white-text-gradient",
      },
    ],
    image: ignitelab,
    source_code_link: "https://github.com/pedrolucas12/Hepta_PedroLucas",
    link: "https://github.com/pedrolucas12/Hepta_PedroLucas",
  },
  {
    name: "Projeto FullStack",
    description:
      "Sistema de cadastro de produtos que utilizam tecnologias modernas, incluindo React e Node.js, e SQL para a persistência de dados.",
    tags: [
      {
        name: "React JS",
        color: "blue-text-gradient",
      },
      {
        name: "Node JS",
        color: "blue-text-gradient",
      },
      {
        name: "SQL",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/pedrolucas12/pedr_desafio_icts",
    link: "https://github.com/pedrolucas12/pedr_desafio_icts",
  },
];

export { technologies, experiences, projects };
