import React from "react";
import { styles } from "../styles";
import Marquee from "./Marquee";
import { Link } from "react-router-dom";
import { BsGithub, BsTwitter, BsInstagram, BsDownload } from "react-icons/bs";
import { RiLinkedinFill } from "react-icons/ri";
import RybenaScript from "../RybenaScript";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div rybena-alt-text className={`absolute inset-0 top-[130px] lg:top-[170px] justify-between max-w-7xl mx-auto ${styles.paddingX} flex flex-col items-start gap-5`}>
      <RybenaScript />
        <div className="">
          <h1 className={`${styles.heroHeadText}  text-[#FFFFEC]`}>
            <span className="text-[#FFFFEC]">Cafeteria do Rybena</span>
          </h1>
          <p className={`${styles.heroSubText} lg:w-[56%]`}>
            <span className="text-[#FFFFEC]">Bem-vindo à nossa cafeteria! ☕</span>
            <span className="">
              Um lugar onde a paixão por café encontra a magia da tecnologia.
            </span>{" "}
          </p>
        </div>
        <div className="flex marquee-container -rotate-6 absolute bottom-[90px] right-[170px] lg:bottom-[10px] lg:right-[200px]">
          <div className="marquee-wrapper -rotate-12 ">
            <Marquee />
          </div>
        </div>
      </div>

      <div className="lg:flex lg:justify-center lg:items-center">
  <a href="/ResumePedroSantana.pdf" download>
    <div className="absolute top-[340px] w-full pl-6 lg:pl-0 lg:top-[415px] lg:w-1/3 lg:left-[376px]">
      <div className="w-full flex justify-start mt-20 lg:mt-[75px]">
        <div className="border-green-500 text-white hover:text-green-500 hover:border-green-600 hover:text-white/90 w-[144px] flex border-[1px] font-bold py-1 rounded-md justify-evenly items-center transition-all" style={{ backgroundColor: "#597E52" }}>
          <p className="text-[1.4rem] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-600">
            nosso cardápio
          </p>
        </div>
      </div>
    </div>
  </a>
</div>

    </section>
  );
};

export default Hero;