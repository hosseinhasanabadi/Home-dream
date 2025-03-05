import React from "react";
import { assets } from "./../../assets/assets";
import Navbar from "../Navbar/Navbar";
import { motion } from "framer-motion";

function Header() {
  const headerImage = "/header_img.png";

  return (
    <header
      className="min-h-screen mb-4 bg-center bg-cover 
    flex items-center w-full overflow-hidden "
      style={{ backgroundImage: `url(${headerImage})` }}
    >
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 1.5 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ oce: true }}
        className="container text-center mx-auto py-4
        px-6 md:px-20 lg:px-32 text-white"
      >
        <h2
          className="text-5xl sm:text-6xl md:text-[82px]
      inline-block max-w-3xl font-semibold pt-20"
        >
          {" "}
          Explore homes that fit your dreams
        </h2>
        <div className=" space-x-6 mt-16">
          <a
            href="#Projects"
            className="border border-white px-8 py-3 
        rounded "
          >
            Projects
          </a>
          <a href="#Contact" className=" bg-blue-500 px-8 py-3 rounded ">
            {" "}
            Contact Us
          </a>
        </div>
      </motion.div>
      {/* <Navbar /> */}
    </header>
  );
}

export default Header;
