import React from "react";
// import flight from "../images/flight.jpg";
import Image from "next/image";
import { motion } from "framer-motion";
// import ikea from "../images/ikea.jpg";

const Projects = () => {
  const [isOpen, setIsOpen] = React.useState(false);
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

  return (
    <div className="min-h-screen">
      <h1 id ="projects" className="font-extrabold text-5xl leading-10 my-8 ">Projects</h1>
      <div className="grid grid-cols-2 auto-cols-auto auto-rows-auto gap-4">
        <motion.div
          className="group relative transition duration-300 ease-in-out backdrop-blur-sm bg-black box w-5/6 h-96"
          whileHover={{ scale: 1.05 }}
          // transition={{damping: [0.1, 0.6, 0.8, 0.6] }}
          transition={{ type: "spring", duration: 0.1 }}
          onHoverStart={() => setIsOpen(true)}
          onHoverEnd={() => setIsOpen(false)}
        >
          <motion.h3 className="group-hover:text-white absolute text-lg p-4 text-slate-100">
            2022-2023
          </motion.h3>
          <motion.h1 className="group-hover:text-white absolute text-lg p-4 top-7 text-slate-100">
            Flight Booking System
          </motion.h1>

          {isOpen && (
            <motion.div>
              <motion.h2
                className="group-hover:text-white absolute p-4 top-14 load-screen-message"
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
                    >
                      {char}
                    </motion.span>
                  );
                })}
              </motion.h2>
            </motion.div>
          )}

          {/* <Image
            // width={128}
            // height={128}
            src={flight}
            className=" relative group-hover:opacity-30 group-hover:scale-100"
            alt="kljk"
          /> */}
        </motion.div>

        {/* next project */}

        <motion.div
          className="group relative transition duration-300 ease-in-out backdrop-blur-sm bg-black box w-5/6 h-96"
          whileHover={{ scale: 1.05 }}
          // transition={{damping: [0.1, 0.6, 0.8, 0.6] }}
          transition={{ type: "spring", duration: 0.1 }}
          onHoverStart={() => setIsOpen(true)}
          onHoverEnd={() => setIsOpen(false)}
        >
          <motion.h3 className="group-hover:text-white absolute text-lg p-4 text-slate-100">
            2022-2023
          </motion.h3>
          <motion.h1 className="group-hover:text-white absolute text-lg p-4 top-7 text-slate-100">
            Flight Booking System
          </motion.h1>

          {isOpen && (
            <motion.div>
              <motion.h2
                className="group-hover:text-white absolute p-4 top-14 load-screen-message"
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
                    >
                      {char}
                    </motion.span>
                  );
                })}
              </motion.h2>
            </motion.div>
          )}

          {/* <Image
            // width={128}
            // height={128}
            src={ikea}
            className=" relative group-hover:opacity-30 group-hover:scale-100"
            alt="kljk"
          /> */}
        </motion.div>


          {/* {next project} */}
          <motion.div
          className="group relative transition duration-300 ease-in-out backdrop-blur-sm bg-black box w-5/6 h-96"
          whileHover={{ scale: 1.05 }}
          // transition={{damping: [0.1, 0.6, 0.8, 0.6] }}
          transition={{ type: "spring", duration: 0.1 }}
          onHoverStart={() => setIsOpen(true)}
          onHoverEnd={() => setIsOpen(false)}
        >
          <motion.h3 className="group-hover:text-white absolute text-lg p-4 text-slate-100">
            2022-2023
          </motion.h3>
          <motion.h1 className="group-hover:text-white absolute text-lg p-4 top-7 text-slate-100">
            Flight Booking System
          </motion.h1>

          {isOpen && (
            <motion.div>
              <motion.h2
                className="group-hover:text-white absolute p-4 top-14 load-screen-message"
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
                    >
                      {char}
                    </motion.span>
                  );
                })}
              </motion.h2>
            </motion.div>
          )}

          {/* <Image
            // width={128}
            // height={128}
            src={ikea}
            className=" relative group-hover:opacity-30 group-hover:scale-100"
            alt="kljk"
          /> */}
        </motion.div>

          {/* {next project} */}
          <motion.div
          className="group relative transition duration-300 ease-in-out backdrop-blur-sm bg-black box w-5/6 h-96"
          whileHover={{ scale: 1.05 }}
          // transition={{damping: [0.1, 0.6, 0.8, 0.6] }}
          transition={{ type: "spring", duration: 0.1 }}
          onHoverStart={() => setIsOpen(true)}
          onHoverEnd={() => setIsOpen(false)}
        >
          <motion.h3 className="group-hover:text-white absolute text-lg p-4 text-slate-100">
            2022-2023
          </motion.h3>
          <motion.h1 className="group-hover:text-white absolute text-lg p-4 top-7 text-slate-100">
            Flight Booking System
          </motion.h1>

          {isOpen && (
            <motion.div>
              <motion.h2
                className="group-hover:text-white absolute p-4 top-14 load-screen-message"
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
                    >
                      {char}
                    </motion.span>
                  );
                })}
              </motion.h2>
            </motion.div>
          )}

          {/* <Image
            // width={128}
            // height={128}
            src={ikea}
            className=" relative group-hover:opacity-30 group-hover:scale-100"
            alt="kljk"
          /> */}
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
