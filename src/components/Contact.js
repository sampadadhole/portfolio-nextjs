import React from "react";
import cup from "../images/coffee-cup.png";
import Image from "next/image";
import steam from "../images/smoke.png";

const Contact = () => {
  return (
    <div id="contact" className="min-h-screen mt-10">
      <div>
        <h1 className="font-extrabold text-5xl leading-10">
          Let&apos;s chat over coffee
        </h1>
      </div>
      <div className="flex sm:flex-row flex-col justify-around h-96">
        <div>
          <div>
            <h1 className="font-bold text-3xl leading-10">Location</h1>
            <p>Boston, US</p>
          </div>

          <div>
            <h1 className="font-bold text-3xl leading-10">Email</h1>
            <p>sampadadhole4@gmail.com</p>
          </div>
        </div>

        <div className="cup-wrapper ">
          <div className="cup">
            <Image src={cup} width={300} />
          </div>
          <div className="steam-wrapper">
            <Image className="smoke" src={steam} width={200} height={10} />
          </div>
          <div className="steam-wrapper">
            <Image className="smoke2" src={steam} width={200} height={10} />
          </div>
          <div className="steam-wrapper">
            <Image className="smoke3" src={steam} width={200} height={10} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;