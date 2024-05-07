import React from "react";
import Image from "next/image";
// import sd from "../images/software_developer.jpg";
import rotate from "../images/rotate.png";

const About = () => {
  return (
    <div
      id="about"
      className="container mx-auto flex flex-col-reverse lg:flex-row items-center justify-between min-h-screen dark:text-white text-ebonyClay"
    >
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
        <h3 className="font-extrabold text-xl dark:text-white text-ebonyClay">
          ABOUT ME
        </h3>

        <h1 className="font-extrabold text-2xl tracking-wide text-greenish">
          Passionate Software developer
        </h1>
        <p className="font-bold text-lg dark:text-slate-300 text-ebonyClay">
          Welcome to my website! I&apos;m Sampada Dhole, a passionate and experienced software developer with a Master of Science in Information Systems from Northeastern University. I have honed my skills in various aspects of software development, including application engineering, data management, and user experience design.

I have a strong background in full-stack web development, with proficiency in a wide range of programming languages and frameworks, including Java, Python, JavaScript, ReactJS, and NodeJS. I have hands-on experience with modern web development tools and methods, and I am skilled in building responsive and user-friendly web applications.

Throughout my career, I have worked on a variety of projects, ranging from database migration and optimization to the development of microservices-based web applications. I have a proven track record of delivering high-quality software solutions that meet both user and business needs, and I am committed to continuous learning and professional development.

I am passionate about using technology to drive positive change and improve people&apos;s lives, and I am excited about the opportunity to contribute to innovative projects that have a real impact.

Feel free to explore my portfolio and connect with me on LinkedIn to learn more about my work and experience.
        </p>
      </div>
    </div>
  );
};

export default About;
