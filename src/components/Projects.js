import React from "react";
// import flight from "../images/flight.jpg";
import Image from "next/image";
import { motion, useViewportScroll, useTransform } from "framer-motion";
// import ikea from "../images/ikea.jpg";

const Projects = () => {
  const [isFlightOpen, setIsFlightOpen] = React.useState(false);
  const [isIkeaOpen, setIsIkeaOpen] = React.useState(false);
  const [isPortfolioOpen, setIsPortfolioOpen] = React.useState(false);
  const [isPetCareOpen, setIsPetCareOpen] = React.useState(false);
  const [isHealthPlusOpen, setIsHealthPlusOpen] = React.useState(false);
  const[algotithmOpen, setIsAlgorithmOpen] = React.useState(false);
  const link1 = "Go\nto\nGithub\n→";
  const sentence = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
        staggerChildren: 0.08,
      },
    },
  };

  const letter = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  const { scrollYProgress } = useViewportScroll();
  console.log(scrollYProgress);
  const scale = useTransform(scrollYProgress, [0, 1], [0.5, 1.4]);

  return (
    <div className="min-h-screen container mx-auto text-greenish min-w-min">
      <h1
        id="projects"
        className="font-extrabold text-5xl leading-10 my-8 text-greenish"
      >
        Some things Ive worked on!
      </h1>
      <div className="grid grid-cols-2 ">
        <motion.div
          className=" group relative transition duration-300 ease-in-out backdrop-blur-sm bg-black box border border-greenish w-4/6 h-96 mx-auto my-8 rounded-xl overflow-hidden shadow-2xl bg-flight bg-cover brightness-75"
          // whileHover={{ scale: 1.05 }}
          // transition={{damping: [0.1, 0.6, 0.8, 0.6] }}
          // transition={{ type: "spring", duration: 0.1 }}
          onHoverStart={() => setIsFlightOpen(true)}
          onHoverEnd={() => setIsFlightOpen(false)}
          style={{ scale }}
        >
          <motion.div
            className="item"
            style={{
              scaleY: scrollYProgress,
            }}
          />
          <motion.h3
            style={{ scale }}
            className="group-hover:text-white absolute text-lg p-4 text-slate-100 "
          >
            2022-2023
          </motion.h3>
          <motion.h1
            style={{ scale }}
            className="group-hover:text-white absolute text-lg p-4 top-7 text-slate-100"
            
          >
            Flight Booking System
          </motion.h1>

          {isFlightOpen && (
            <motion.div>
              <motion.h2
                className="group-hover:text-white absolute p-4 top-14 load-screen-message cursor-pointer"
                variants={sentence}
                initial="hidden"
                animate="visible"
               
              >
                {link1.split(" ").map((char, index) => {
                  return (
                    <motion.span
                      key={char + "-" + index}
                      variants={letter}
                      className="inline-block"
                      onClick={() => {
                        console.log("clicked");
                        // <a href="https://github.com/" target="_blank"/>;
                        window.open("https://github.com/sampadadhole/Flight-Reservation-System", "_blank");
                        
                      }}
                    >
                      {char}
                    </motion.span>
                  );
                })}
              </motion.h2>
            </motion.div>
          )}
        </motion.div>
        <div> </div>
        <div> </div>

        {/* next project */}
        <motion.div
          className=" group relative transition duration-300 ease-in-out backdrop-blur-sm bg-black box border border-greenish w-4/6 h-96 mx-auto my-8 rounded-xl overflow-hidden shadow-2xl bg-portfolio bg-cover brightness-75"
          // whileHover={{ scale: 1.05 }}
          // transition={{damping: [0.1, 0.6, 0.8, 0.6] }}
          // transition={{ type: "spring", duration: 0.1 }}
          onHoverStart={() => setIsPortfolioOpen(true)}
          onHoverEnd={() => setIsPortfolioOpen(false)}
          style={{ scale }}
        >
          <motion.div
            className="item"
            style={{
              scaleY: scrollYProgress,
            }}
          />
          <motion.h3
            style={{ scale }}
            className="group-hover:text-white absolute text-lg p-4 text-slate-100 "
          >
            2022-2023
          </motion.h3>
          <motion.h1
            style={{ scale }}
            className="group-hover:text-white absolute text-lg p-4 top-7 text-slate-100"
            
          >
            Portfolio
          </motion.h1>

          {isPortfolioOpen && (
            <motion.div>
              <motion.h2
                className="group-hover:text-white absolute p-4 top-14 load-screen-message cursor-pointer"
                variants={sentence}
                initial="hidden"
                animate="visible"
               
              >
                {link1.split(" ").map((char, index) => {
                  return (
                    <motion.span
                      key={char + "-" + index}
                      variants={letter}
                      className="inline-block"
                      onClick={() => {
                        console.log("clicked portfolio");
                        // <a href="https://github.com/" target="_blank"/>;
                        window.open("https://github.com/sampadadhole/portfolio-nextjs", "_blank");
                        
                      }}
                    >
                      {char}
                    </motion.span>
                  );
                })}
              </motion.h2>
            </motion.div>
          )}
        </motion.div>
        

        {/* {next project} */}
        <motion.div
          className=" group relative transition duration-300 ease-in-out backdrop-blur-sm bg-black box border border-greenish w-4/6 h-96 mx-auto my-8 rounded-xl overflow-hidden shadow-2xl bg-petCare bg-cover brightness-75"
          // whileHover={{ scale: 1.05 }}
          // transition={{damping: [0.1, 0.6, 0.8, 0.6] }}
          // transition={{ type: "spring", duration: 0.1 }}
          onHoverStart={() => setIsPetCareOpen(true)}
          onHoverEnd={() => setIsPetCareOpen(false)}
          style={{ scale }}
        >
          <motion.div
            className="item"
            style={{
              scaleY: scrollYProgress,
            }}
          />
          <motion.h3
            style={{ scale }}
            className="group-hover:text-white absolute text-lg p-4 text-slate-100 "
          >
            2022-2023
          </motion.h3>
          <motion.h1
            style={{ scale }}
            className="group-hover:text-white absolute text-lg p-4 top-7 text-slate-100"
            
          >
            Pet Care
          </motion.h1>

          {isPetCareOpen && (
            <motion.div>
              <motion.h2
                className="group-hover:text-white absolute p-4 top-14 load-screen-message cursor-pointer"
                variants={sentence}
                initial="hidden"
                animate="visible"
               
              >
                {link1.split(" ").map((char, index) => {
                  return (
                    <motion.span
                      key={char + "-" + index}
                      variants={letter}
                      className="inline-block"
                      onClick={() => {
                        console.log("clicked pet care");
                        // <a href="https://github.com/" target="_blank"/>;
                        window.open("https://github.com/sampadadhole/pet-care-reactjs/tree/dev", "_blank");
                        
                      }}
                    >
                      {char}
                    </motion.span>
                  );
                })}
              </motion.h2>
            </motion.div>
          )}
        </motion.div>

        <div></div>
        <div></div>
        {/* {next project} */}
        <motion.div
          className=" group relative transition duration-300 ease-in-out backdrop-blur-sm bg-black box border border-greenish w-4/6 h-96 mx-auto my-8 rounded-xl overflow-hidden shadow-2xl bg-ikea bg-cover brightness-75"
          // whileHover={{ scale: 1.05 }}
          // transition={{damping: [0.1, 0.6, 0.8, 0.6] }}
          // transition={{ type: "spring", duration: 0.1 }}
          onHoverStart={() => setIsIkeaOpen(true)}
          onHoverEnd={() => setIsIkeaOpen(false)}
          style={{ scale }}
        >
          <motion.div
            className="item"
            style={{
              scaleY: scrollYProgress,
            }}
          />
          <motion.h3
            style={{ scale }}
            className="group-hover:text-white absolute text-lg p-4 text-slate-100 "
          >
            2022-2023
          </motion.h3>
          <motion.h1
            style={{ scale }}
            className="group-hover:text-white absolute text-lg p-4 top-7 text-slate-100"
            
          >
            Ikea Redesign
          </motion.h1>

          {isIkeaOpen && (
            <motion.div>
              <motion.h2
                className="group-hover:text-white absolute p-4 top-14 load-screen-message cursor-pointer"
                variants={sentence}
                initial="hidden"
                animate="visible"
               
              >
                {link1.split(" ").map((char, index) => {
                  return (
                    <motion.span
                      key={char + "-" + index}
                      variants={letter}
                      className="inline-block"
                      onClick={() => {
                        console.log("clicked ikea");
                        // <a href="https://github.com/" target="_blank"/>;
                        window.open("https://github.com/sampadadhole/Ikea-redesign", "_blank");
                        
                      }}
                    >
                      {char}
                    </motion.span>
                  );
                })}
              </motion.h2>
            </motion.div>
          )}
        </motion.div>

        {/* {next project} */}
        <motion.div
          className=" group relative transition duration-300 ease-in-out backdrop-blur-sm bg-black box border border-greenish w-4/6 h-96 mx-auto my-8 rounded-xl overflow-hidden shadow-2xl bg-healthPlus bg-cover brightness-75"
          // whileHover={{ scale: 1.05 }}
          // transition={{damping: [0.1, 0.6, 0.8, 0.6] }}
          // transition={{ type: "spring", duration: 0.1 }}
          onHoverStart={() => setIsHealthPlusOpen(true)}
          onHoverEnd={() => setIsHealthPlusOpen(false)}
          style={{ scale }}
        >
          <motion.div
            className="item"
            style={{
              scaleY: scrollYProgress,
            }}
          />
          <motion.h3
            style={{ scale }}
            className="group-hover:text-white absolute text-lg p-4 text-slate-100 "
          >
            2021-2022
          </motion.h3>
          <motion.h1
            style={{ scale }}
            className="group-hover:text-white absolute text-lg p-4 top-7 text-slate-100"
            
          >
            Health Plus Services
          </motion.h1>

          {isHealthPlusOpen && (
            <motion.div>
              <motion.h2
                className="group-hover:text-white absolute p-4 top-14 load-screen-message cursor-pointer"
                variants={sentence}
                initial="hidden"
                animate="visible"
               
              >
                {link1.split(" ").map((char, index) => {
                  return (
                    <motion.span
                      key={char + "-" + index}
                      variants={letter}
                      className="inline-block"
                      onClick={() => {
                        console.log("clicked ikea");
                        // <a href="https://github.com/" target="_blank"/>;
                        window.open("https://github.com/sampadadhole/HealthPlus", "_blank");
                        
                      }}
                    >
                      {char}
                    </motion.span>
                  );
                })}
              </motion.h2>
            </motion.div>
          )}
        </motion.div>

        <div></div>
        <div></div>
        {/* {next project} */}
        <motion.div
          className=" group relative transition duration-300 ease-in-out backdrop-blur-sm bg-black box border border-greenish w-4/6 h-96 mx-auto my-8 rounded-xl overflow-hidden shadow-2xl bg-algorithm bg-cover brightness-75"
          // whileHover={{ scale: 1.05 }}
          // transition={{damping: [0.1, 0.6, 0.8, 0.6] }}
          // transition={{ type: "spring", duration: 0.1 }}
          onHoverStart={() => setIsAlgorithmOpen(true)}
          onHoverEnd={() => setIsAlgorithmOpen(false)}
          style={{ scale }}
        >
          <motion.div
            className="item"
            style={{
              scaleY: scrollYProgress,
            }}
          />
          <motion.h3
            style={{ scale }}
            className="group-hover:text-white absolute text-lg p-4 text-slate-100 "
          >
            2021-2022
          </motion.h3>
          <motion.h1
            style={{ scale }}
            className="group-hover:text-white absolute text-lg p-4 top-7 text-slate-100"
            
          >
            Algorithm Visualizer
          </motion.h1>

          {algotithmOpen && (
            <motion.div>
              <motion.h2
                className="group-hover:text-white absolute p-4 top-14 load-screen-message cursor-pointer"
                variants={sentence}
                initial="hidden"
                animate="visible"
               
              >
                {link1.split(" ").map((char, index) => {
                  return (
                    <motion.span
                      key={char + "-" + index}
                      variants={letter}
                      className="inline-block"
                      onClick={() => {
                        console.log("clicked ikea");
                        window.open("https://github.com/sampadadhole/PSA_Algorithm_Visualizer", "_blank");
                        
                      }}
                    >
                      {char}
                    </motion.span>
                  );
                })}
              </motion.h2>
            </motion.div>
          )}
        </motion.div>
        
      </div>
    </div>
  );
};

export default Projects;
