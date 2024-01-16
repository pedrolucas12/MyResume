import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
// import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Um pouco</p>
        <h2 className={styles.sectionHeadText}>Sobre mim</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
       Desenvolvedor full-stack, <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-blue-400 to-cyan-300">
        com mais de 3 anos de expertise em React, Node, e MySQL. 
        </span>
        Além de gerenciar projetos, participei do desenvolvimento de um aplicativo de alfabetização em parceria 
        com a Universidade de Brasília. Minha paixão por resolver problemas usando tecnologia se reflete em minha busca contínua por aprendizado. 
          {" "}

         
         
         
        {" "}
        
      
        

      </motion.p>

    </>
  );
};

export default SectionWrapper(About, "about");
