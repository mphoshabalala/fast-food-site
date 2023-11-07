import React from "react";
import kota from "../images/kota.png";
export default function Hero() {
  return (
    <div className=" h-screen bg-heroBG flex bg-blend-overlay bg-gray-800  bg-no-repeat bg-center bg-cover px-16">
      <div className="w-1/2 text-blue-300 flex flex-col justify-center">
        <h1 className="font-extrabold text-6xl ">
          GET YOUR KOTA DELICACY HERE
        </h1>
        <p className="text-2xl my-8">Order your favorite kota now!!</p>
        <button className="bg-red-600 py-4 px-8 w-fit rounded-sm text-bold text-white">
          Order Now
        </button>
      </div>
      <div className="w-1/2 flex flex-col justify-center">
        <img src={kota} alt="" />
      </div>
    </div>
  );
}
