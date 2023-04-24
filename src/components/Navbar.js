import Link from "next/link";
import Lottie from "lottie-react";
import darkSvg from "../images/dark-mode-button.json";
import dark from "../images/dark.json";
import React, { useEffect, useRef, useState } from "react";
if (typeof window !== "undefined") import("@lottiefiles/lottie-player");
import { LottieInteractivity, create } from "@lottiefiles/lottie-interactivity";
import lottie from "lottie-web";
import DarkModeToggle from "./DarkModeToggle";

export const Navbar = () => {


  return (
    <div className="max-w-lg ml-auto py-2">
      <div className="flex justify-between dark:text-white text-ebonyClay ">
        <a href="#">Home</a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
        {/* <div className="h-4"> */}
        <DarkModeToggle />
          {/* </div> */}
        
       
      </div>
    </div>
  );
};

// export default Navbar;

// export class Navbar extends React.Component {

//   // const [isDarkMode, setIsDarkMode] = useState(false);

//   constructor(props) {
//     super(props);
//     this.myRef = React.createRef();
//   }

//   componentDidMount() {
//     this.myRef.current.addEventListener("load", function (e) {
//       create({
//         player: "#firstLottie",
//         mode: "cursor",
//         actions: [
//           {
//             type: "click",
//             forceFlag: false,
//           },
//         ],
//       });
//     });
//   }

//   render() {
//     return (
//       <div className="max-w-lg ml-auto">
//         <div className="flex justify-between text-white">
//           <a href="#">Home</a>
//           <a href="#about">About</a>
//           <a href="#projects">Projects</a>
//           <a href="#contact">Contact</a>
//           <div className="w-14">
//             <lottie-player
//               ref={this.myRef}
//               id="firstLottie"
//               src="https://assets4.lottiefiles.com/packages/lf20_tbyegho2.json"
//             ></lottie-player>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }
