import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const AboutUs = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Um Gole de Rybena</p>
        <h2 className={styles.sectionHeadText}>Sobre a Cafeteria Rybena</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 1, 1)}
        className="mt-4 text-secondary text-[#F1E4C3] max-w-3xl leading-[30px]"
      >
       Apaixonados por café e tecnologia, somos a Cafeteria Rybena, um lugar onde a magia da cafeína encontra a inovação digital. Como baristas do mundo da programação, contamos com mais de 3 anos de experiência em misturar ingredientes como React, Node e MySQL para criar um sabor único na web.

        Junte-se a nós na jornada onde cada linha de código é uma nota em nossa sinfonia digital, e cada visita à nossa cafeteria é uma degustação de novas descobertas tecnológicas. Bem-vindo à Cafeteria Rybena, onde o café encontra a inovação em cada xícara.
      </motion.p>
    </>
  );
};

export default SectionWrapper(AboutUs, "about");
