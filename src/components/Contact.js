import React from "react";
import cup from "../images/coffee-cup.png";
import Image from "next/image";
import steam from "../images/smoke.png";
import Lottie from "lottie-react";
import lightCoffee from "../images/light-coffee.json";
import darkCoffee from "../images/dark-coffee.json";
import { useTheme } from 'next-themes';

const Contact = () => {

    const { theme } = useTheme();
  const coffeeAnimationData = theme === 'light' ? darkCoffee : lightCoffee;

  return (
    <div
      id="contact"
      className="min-h-screen mt-10 dark:text-white text-ebonyClay container mx-auto"
    >
      <div>
        <h1 className="font-extrabold text-5xl leading-10 dark:text-white text-ebonyClay">
          Let&apos;s chat over <span className="text-greenish">coffee</span>
        </h1>
      </div>
      <div className="flex sm:flex-row flex-col justify-around h-96">
        {/* <div>
          <div>
            <h1 className="font-bold text-3xl leading-10">Location</h1>
            <p>Boston, US</p>
          </div>

          <div>
            <h1 className="font-bold text-3xl leading-10">Email</h1>
            <p>sampadadhole4@gmail.com</p>
          </div>
        </div> */}



        <div >
          <Lottie animationData={coffeeAnimationData} loop={true} className="w-96" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
