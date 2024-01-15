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

// const services = [
//   {
//     title: "TEAM WORK",
//     icon: web,
//   },
//   {
//     title: "CONSISTENCE",
//     icon: mobile,
//   },
//   {
//     title: "CREATIVITY",
//     icon: backend,
//   },
//   {
//     title: "COMUNICATION",
//     icon: creator,
//   },
//   {
//     title: "DISCIPLINE",
//     icon: web,
//   },
//   {
//     title: "HUNHER FOR KNOWLEDGE",
//     icon: mobile,
//   },
//   {
//     title: "DECISION MAKING",
//     icon: backend,
//   },
//   {
//     title: "PROBLEM SOLVING",
//     icon: creator,
//   },
// ];

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
      "O curso definitivo de Lógica de Programação. Do VisualG às principais linguagens do mercado: C, C++, Python, C# e Java",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
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
      "Landing Page of Personal Trainer",
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
      "É um pequeno sistema para gerenciar os funcionários dos setores.",
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
    name: "Crud - React JS",
    description:
      "Este projeto utiliza tecnologias modernas, incluindo React para o frontend, Node.js para o backend, e SQL para a persistência de dados.",
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

export { technologies, experiences, testimonials, projects };
