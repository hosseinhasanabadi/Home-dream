import React, { useEffect, useState } from "react";
import { assets } from "./../../assets/assets";

function Navbar() {
  const [showMobil, setShowMobil] = useState(false);

  useEffect(() => {
    if (showMobil) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showMobil]);

  return (
    <section className="absolute z-10  top-0 left-0   w-full ">
      <div
        className="contianer mx-auto flex justify-between 
      items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent"
      >
        <img src={assets.logo} alt="" />
        <ul className="hidden md:flex gap-7 text-white ">
          <a
            href="Header"
            className="cursor-pointer 
          hover:text-gray-400"
          >
            Home
          </a>
          <a
            href="#About"
            className="cursor-pointer 
          hover:text-gray-400"
          >
            About
          </a>
          <a
            href="#Projects"
            className="cursor-pointer 
          hover:text-gray-400"
          >
            Projects
          </a>
          <a
            href="#Testimonalis"
            className="cursor-pointer 
          hover:text-gray-400"
          >
            Testimonalis
          </a>
        </ul>
        <button
          className="hidden md:block bg-white px-8 py-2 
        rounded-full"
        >
          Sing up
        </button>
        <img
          onClick={() => setShowMobil(true)}
          src={assets.menu_icon}
          alt=""
          className="md:hidden w-7  cursor-pointer"
        />
      </div>
      {/* --------mobile menu------- */}
      <div
        className={`md:hidden ${
          showMobil ? "w-full fixed" : "h-0 w-0"
        } overflow-hidden bg-white 
      transition-all right-0 top-0 bottom-0`}
      >
        <div className=" flex justify-end p-6 cursor-pointer">
          <img
            onClick={() => setShowMobil(false)}
            src={assets.cross_icon}
            alt=""
          />
        </div>
        <ul
          className="flex flex-col items-center gap-2 
        mt-5 px-5 text-lg font-medium"
        >
          <a
            onClick={() => setShowMobil(false)}
            href="#Header"
            className="px-4 py-2 rounded-full
          inline-block
          "
          >
            Home
          </a>
          <a
            onClick={() => setShowMobil(false)}
            href="#About"
            className="px-4 py-2 rounded-full
          inline-block
          "
          >
            About
          </a>

          <a
            onClick={() => setShowMobil(false)}
            href="#Projects"
            className="px-4 py-2 rounded-full
          inline-block
          "
          >
            Project
          </a>
        </ul>
      </div>
    </section>
  );
}

export default Navbar;
