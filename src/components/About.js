import React from "react";
import Image from "next/image";
// import sd from "../images/software_developer.jpg";
import rotate from "../images/rotate.png";

const About = () => {
  return (
    <div id="about" className="container mx-auto flex flex-col-reverse lg:flex-row items-center justify-between min-h-screen text-white">
      <div className="relative">
        <Image
          width={500}
          height={200}
          className="rounded-3xl "
          src={
            "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1420&q=80"
          }
          alt="idfd"
        />
        <Image
          width={150}
          src={rotate}
          className="absolute -bottom-10 -right-4 animate-spin-slow shadow-md rounded-full" 
          alt="idfd"
        />
      </div>

      <div className="lg:max-w-xl my-8 p-8">
        <h3 className="font-extrabold text-xl text-white">ABOUT ME</h3>
        <h1 className="font-extrabold text-2xl tracking-wide text-greenish">
          Passionate Software developer
        </h1>
        <p className="font-bold text-lg text-slate-300 ">
          As a Junior Front-End Developer, I possess an impressive arsenal of
          skills in HTML, CSS, JavaScript, React, Tailwind, and SCSS. I excel in
          designing and maintaining responsive websites that offer a smooth user
          experience. My expertise lies in crafting dynamic, engaging interfaces
          through writing clean and optimized code and utilizing cutting-edge
          development tools and techniques. I am also a team player who thrives
          in collaborating with cross-functional teams to produce outstanding
          web applications.
        </p>
      </div>
    </div>
  );
};

export default About;
