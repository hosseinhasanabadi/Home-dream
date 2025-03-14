import React from "react";
import { assets } from "./../../assets/assets";
import { motion } from "framer-motion";

function About() {
  return (
    <motion.section

    initial={{ opacity: 0, x: 200 }}
    transition={{ duration: 1 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ oce: true }}
      className="container flex flex-col justify-center items-center overflow-hidden mx-auto 
   p-14 md:px-20 lg:px-32 w-full
    "
      id="About"
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-2  text-black">
        About{" "}
        <span className="underline underline-offset-4 decoration-1 under font-light">
          Our Brand
        </span>
      </h1>
      <p className="text-gray-500 max-w-80 text-center mb-8">
        Propertis Dedicates to your Vision
      </p>
      <div
        className="flex flex-col md:flex-row items-center 
   md:items-start md:gap-20"
      >
        <img
          src={assets.brand_img}
          alt=""
          className="w-full  
    sm:w-1/2 max-w-lg"
        />
        <div
          className="flex flex-col items-center 
   md:items-start mt-10 text-gray-600  "
        >
          <div className=" grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28">
            <div>
              <p className="text-4xl font-medium text-gray-800 ">10+</p>
              <p>Years of Excellence</p>
            </div>
            <div className=" grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28">
              <div>
                <p className="text-4xl font-medium text-gray-800 ">12+</p>
                <p>Project Completed</p>
              </div>
            </div>
            <div className=" grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28">
              <div>
                <p className="text-4xl font-medium text-gray-800 ">20+</p>
                <p> Mn . sq. Ft. Delivered</p>
              </div>
            </div>
            <div className=" grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28">
              <div>
                <p className="text-4xl font-medium text-gray-800 ">25+</p>
                <p> Projects </p>
              </div>
            </div>
          
          </div>
          <p className="my-10 max-w-lg">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita
              neque obcaecati temporibus. Sint ipsa delectus vero maxime, minus
              perspiciatis temporibus eveniet laboriosam porro aliquam
              exercitationem debitis a voluptas possimus modi, unde vel tenetur
              similique iste molestiae dolore neque! Saepe aliquid assumenda
              facilis praesentium suscipit sint hic qui! Atque, distinctio quo.
            </p>
            <button className="bg-blue-600 text-white px-8 py-2 rounded "> Learn more</button>
        </div>
      </div>
    </motion.section>
  );
}

export default About;
