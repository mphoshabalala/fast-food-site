import React from "react";
import kota from "../images/kota.png";

export default function CallToMenu() {
  return (
    <div className="bg-red-300 flex px-16">
      <div className="w-1/2 flex justify-center items-center">
        <img src={kota} alt="" />
      </div>
      <div className="w-1/2 flex flex-col justify-center  text-gray-800">
        <h1 className="text-5xl font-extrabold ">
          Feel the sensation of our favorite kota menus that you cant find
          anywhere
        </h1>
        <p className="py-4 text-2xl font-semibold text-gray-700">
          We take our kota inventions to another level with our custom recipe.
        </p>
        <button className="bg-blue-600 py-4 px-8 w-fit rounded-sm text-bold text-white ">
          Get your Kota now!!
        </button>
      </div>
    </div>
  );
}
