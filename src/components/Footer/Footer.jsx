import React from "react";
import { assets } from "./../../assets/assets";

function Footer() {
  return (
    <footer
      className="pt-10 px-4 md:px-20 lg:px-32 bg-gray-900 w-full
    overflow-hidden "
      id="Footer"
    >
      <div
        className="container mx-auto flex flex-col md:flex-row 
      justify-between items-start"
      >
        <div className="w-full md:w-1/3 mb-8 md:mb-0">
          <img src={assets.logo_dark} alt="" />
          <p className="text-gray-400 mt-4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. A sint
            commodi perferendis ea est tempore nulla voluptas ad quam quod sit,
            saepe, quo esse optio!
          </p>
        </div>
        <div className="w-full md:w-1/5 mb-8 md:mb-0">
          <h3 className="text-white text-lg font-blold mb-4">Company</h3>
          <ul className="flex flex-col gap-2 text-gray-400" >
            <li>
              <a href="#Header" className="hover:text-white">Home</a>
            </li>
            <li>
              <a href="#About" className="hover:text-white">About</a>
            </li>
            <li>
              <a href="#Contact" className="hover:text-white">Contact us</a>
            </li>
            <li>
              <a href="#Header" className="hover:text-white">Privacy policy</a>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-1/3">
        <h3 className=" text-white text-lg font-bold mb-4">Subscrobe </h3>
         <p className="text-gray-400 max-w-80">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere aliquam rem, nemo illo iusto cumque.</p>
       <div className="flex gap-2">
        <input type="email" placeholder="Enter your email"
         className="p-2 rounded  bg-gray-800 text-gray-400 border
         border-gray-700 focus:outline-none  w-full md:w-auto" />
         <button className="py-2 rounded bg-blue-500 text-white">Subscribe</button>
       </div>
        </div>
      </div>
      <div></div>
    </footer>
  );
}

export default Footer;
