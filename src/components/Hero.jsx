import { styles } from "../styles";
// import { ComputersCanvas } from "./canvas";
import LaptopCanvas from "./canvas/LaptopCanvas";

import Marquee from "./Marquee";
import { Link } from "react-router-dom";
import { BsGithub, BsTwitter, BsInstagram, BsDownload } from "react-icons/bs";

import { RiLinkedinFill } from "react-icons/ri";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[130px] lg:top-[170px] justify-between max-w-7xl mx-auto ${styles.paddingX} flex flex-col items-start gap-5`}
      >
        <div className="">
          <h1 className={`${styles.heroHeadText}  text-white`}>
            <span className="text-white">Pedro Santana</span>
          </h1>
          <p className={`${styles.heroSubText} lg:w-[56%]`}>
            <span className="">Olá 👋</span> eu sou {" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-blue-400 to-cyan-300">
              desenvolvedor full-stack
            </span>{" "}
              apaixonado por solucionar problemas usando tecnologia!
          </p>

          {/* <div className="mt-24 flex justify-evenly"></div> */}
        </div>

        <div
          className="flex marquee-container -rotate-6 absolute
        bottom-[90px] right-[170px]
        lg:bottom-[10px] lg:right-[200px]
        "
        >
          <div className="marquee-wrapper -rotate-12 ">
            <Marquee />
          </div>
        </div>
      </div>
      {/*<LaptopCanvas /> */}
      {/* <ComputersCanvas /> */}

      <div className="lg:flex lg:justify-center lg:items-center">
        <div
          className="absolute
        top-[340px] w-full pl-6 lg:pl-0
        lg:top-[415px] lg:w-1/3 lg:left-[376px]
      "
        >
          <div className="flex items-center justify-start gap-10">
            <Link
              to="https://www.instagram.com/pedro_lucas.sant/"
              target="_blank"
              className=""
            >
              <BsInstagram
                size={26}
                className="text-white hover:text-violet-400 transition-all"
              />
            </Link>
            <Link
              to="https://github.com/pedrolucas12"
              target="_blank"
              className=""
            >
              <BsGithub
                size={26}
                className="text-white hover:text-violet-400 transition-all"
              />
            </Link>
            <Link
              to="https://www.linkedin.com/in/pedro-lucas-santana-3a576a204/?originalSubdomain=br"
              target="_blank"
              className=""
            >
              <RiLinkedinFill
                size={26}
                className="text-white hover:text-violet-400 transition-all"
              />
            </Link>
          </div>

          <div className="w-full flex justify-start mt-20 lg:mt-[75px]">
            <a href="/myresume.pdf" download>
              <div
                className="border-violet-400 text-white 
               hover:text-violet-400 hover:border-violet-500 hover:text-white/90
                 w-[144px] flex border-[1px] font-bold py-1
             rounded-md justify-evenly items-center transition-all"
              >
                <p
                  className="text-[1.4rem] font-extrabold text-transparent
                 bg-clip-text bg-gradient-to-r from-violet-400 via-blue-400 to-cyan-300"
                >
                  meu cv
                </p>
                <BsDownload size={20} className="text-cyan-400 " />
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
