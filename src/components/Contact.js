import React from "react";
import cup from "../images/coffee-cup.png";
import Image from "next/image";
import steam from "../images/smoke.png";
import Lottie from "lottie-react";
import lightCoffee from "../images/light-coffee.json";
import darkCoffee from "../images/dark-coffee.json";
import { useTheme } from "next-themes";
import download from "../images/download.svg";
import linkedin from "../images/linkedin.svg";
import github from "../images/github.svg";
import Link from 'next/link';

const Contact = () => {
  const { theme } = useTheme();
  const coffeeAnimationData = theme === "light" ? darkCoffee : lightCoffee;

  return (
    <div
      id="contact"
      className="min-h-screen mt-16 dark:text-white text-ebonyClay container mx-auto"
    >
      <div>
        <h1 className=" font-extrabold text-5xl leading-10 dark:text-white text-ebonyClay">
          Let&apos;s chat over <span className="text-greenish">coffee</span>
        </h1>
      </div>
      <div className="mt-14  h-96 text-center">
        <div>
          <Lottie
            animationData={coffeeAnimationData}
            loop={true}
            className="w-80 mx-auto"
          />
        </div>
        <div className="py-16 mx-8">
          <div>
            {/* <h1 className="font-bold text-3xl leading-10">Email</h1> */}
            <Link
              href="mailto: sampadadhole4@gmail.com"
              className="font-bold text-xl leading-10"
            >
              sampadadhole4@gmail.com
            </Link>
          </div>

          <div className="flex flex-row justify-center m-4">
            <div>
              <Image
                width={30}
                src={github}
                className="cursor-pointer"
                onClick={() => window.open("https://www.github.com/sampadadhole", "_blank")}
                alt="idfd"
              />
              {/* <h1 className="font-bold text-3xl leading-10">LinkedIn</h1> */}
              {/* <button>Download</button> */}
            </div>

            <div>
            <Image
                width={30}
                src={linkedin}
                className="cursor-pointer"
                onClick={() => window.open("https://www.linkedin.com/in/sampada-dhole", "_blank")}
                alt="idfd"
              />
              {/* <h1 className="font-bold text-3xl leading-10">Resume</h1> */}
              {/* <button>Download</button> */}
            </div>

            <div>
            <a href="/Users/sampadadhole/Desktop/December Resume/Main Resume.pdf" download>
            <Image
                width={30}
                src={download}
                className="cursor-pointer"
                alt="idfd"
              />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
