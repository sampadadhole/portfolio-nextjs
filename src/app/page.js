"use client";
import Image from "next/image";
import styles from "./page.module.css";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import { Inter, Barlow } from "next/font/google";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import Contact from "@/components/Contact";
// import ReactGA from "react-ga4";

const inter = Inter({ subsets: ["latin"] });
const barlow = Barlow({ subsets: ["latin"], weight: "400" });
export default function Home() {
  return (
    <div className="dark:bg-ebonyClay bg-mischka">
      <script async src="https://analytics.umami.is/script.js" data-website-id="377bff22-9ef2-4fc0-af4b-0efbf0cd6ce6"></script>
      <div className={barlow.className}>
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}
