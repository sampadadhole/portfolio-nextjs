// import React, { useState, useEffect } from "react";
// import lottie from "lottie-web";
// import darkModeToggleAnimation from "../images/dark.json";

// export default function DarkModeToggle() {
//   const [isDarkMode, setIsDarkMode] = useState(false);
//   const [animation, setAnimation] = useState(null);
// //   const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

//   useEffect(() => {
//     const animation = lottie.loadAnimation({
//       container: document.getElementById("darkModeToggle"),
//       renderer: "svg",
//       loop: false,
//       autoplay: false,
//       animationData: darkModeToggleAnimation,
      
//     });
//     setAnimation(animation);
//   }, []);

//   useEffect(() => {
//     if (animation) {
//       const startFrame = isDarkMode ? 50 : 0;
//       const endFrame = isDarkMode ? 50 : 100;
//       animation.playSegments([startFrame, endFrame], false);
//     }
//   }, [isDarkMode]);

//   const toggleDarkMode = () => setIsDarkMode(prevMode => !prevMode);

//   return (
//     <div>
//       <div
//         id="darkModeToggle"
//         onClick={toggleDarkMode}
//         style={{ cursor: "pointer" }}
//       ></div>
//     </div>
//   );
// }
import { useEffect, useState } from 'react'
import { Switch } from '@headlessui/react'
import { useTheme } from 'next-themes'


export default function DarkModeToggle() {
  const [enabled, setEnabled] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
enabled ? setTheme('dark') : setTheme('light')
  }, [enabled])

  return (
    <div className="">
      <Switch
        checked={enabled}
        onChange={() => setEnabled(!enabled)}
        className={`${enabled ? 'bg-mischka' : 'bg-bigStone'}
          relative inline-flex h-[38px] w-[74px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
      >
        {/* <span className="sr-only">Use setting</span> */}
        <span
          aria-hidden="true"
          className={`${enabled ? 'translate-x-9' : 'translate-x-0'}
            pointer-events-none inline-block h-[34px] w-[34px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
        />
      </Switch>
{/* 
      The current theme is: {theme}
      <button onClick={() => setTheme('light')}>Light Mode</button>
      <button onClick={() => setTheme('dark')}>Dark Mode</button> */}
    </div>
  )
}
