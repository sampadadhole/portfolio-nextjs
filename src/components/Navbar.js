import Link from "next/link";
import React from "react";


export const Navbar = () => {
  
  

  return (
    <div className="max-w-lg ml-auto">
      <div className="flex justify-between text-white">
       
          
        <a href="#" >Home</a>
        <a href="#about" >About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
       
      </div>
    </div>
  );
  //   return (
  //     <div className="max-w-lg ml-auto ">
  //     <div className="flex justify-between mr-7 my-4">

  //       {/* <div> */}
  //         <Link href="/home">Home</Link>

  //         <Link href="/about">About</Link>

  //         <Link href="/projects">Projects</Link>

  //         <Link href="/contact">Contact</Link>
  //       {/* </div> */}
  //     {/* <div >
  //         <a href="#Home">Home</a>
  //       </div>
  //       <div>
  //         <a href="#About">About</a>
  //       </div>

  //       <div>
  //         <a href="#Experience">Projects</a>
  //       </div>
  //       <div>
  //         <a href="#Projects">Contact</a>
  //       </div> */}

  //       {/* <div>
  //         <a target="_blank" href="https://www.linkedin.com/in/sampada-dhole/">
  //           Linkedin
  //         </a>
  //       </div> */}

  //       {/* <button class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
  // Button
  // </button> */}

  //     </div>
  //   </div>
  //   )
};
