import React from "react";
import { assets, testimonialsData } from "./../../assets/assets";

function Testimonalis() {
  return (
    <section
      className="container mx-auto py-10 lg:px-32 w-full 
    overflow-hidden "
      id="Testimonalis"
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
        Customer
        <span className="underline underline-offset-4 decoration-1 
        under font-light "> Testimonalis</span>
      </h1>
      <p className="text-center text-gray-500 mb-12 max-w-80 mx-auto">
        Real Stories from those who fund Home
      </p>
      <div className=" flex flex-wrap justify-center gap-8">
        {testimonialsData.map((testimonalis, index) => (
          <div key={index}
          className="max-w-[340px]  shadow-lg rounded px-8 py-12
           text-center">
            <img className="w-20 rounded-full mx-auto mb-4" src={testimonalis.image} alt={testimonalis.alt} />
          <h2 className="text-xl text-gray-700 font-medium ">{testimonalis.name}</h2>
          <p className="text-gray-500 mb-4 text-sm">{testimonalis.title}</p>
          <div className="flex justify-center gap-1 text-red-500 mb-4">
            {Array.from({length:testimonalis.rating},(item,index)=>(
                <img key={index} src={assets.star_icon} alt="" />
            ))}
          </div>
          <p className="text-gray-600">{testimonalis.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonalis;
