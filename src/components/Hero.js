import React from "react";
import { motion } from "framer-motion";
import me from "../images/sampada.jpg";
import Image from "next/image";

const Hero = () => {
  return (
   

    <div className="container mx-auto flex sm:flex-row flex-col justify-evenly h-screen justify-items-center mt-48 text-white">
      <div>
        <div className="font-normal text-sm text-white tracking-wide">
          <h3>SAMPADA DHOLE</h3>
        </div>
        <div>
          <h3 className="font-bold text-7xl tracking-wider text-greenish">
            Full Stack <br /> Developer
          </h3>
        </div>
        <div className="font-normal text-lg mt-8 leading-7 text-slate-400">
          <p>
            I am a Full Stack Developer with experience in <br /> web and server
            technologies, including but not <br /> limited to BackEnd
            Developement, Frontend <br /> Development, UI/UX design and Database
            Management
          </p>
        </div>
        <div >
          <button className="font-medium text-lg">Read about me</button>
        </div>
      </div>
      <div>
        <Image width={400} className="landing-pic shadow-md" src={me} alt="Sdfd" />
      </div>
    </div>
  );
};

export default Hero;
