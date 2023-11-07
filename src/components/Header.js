import React from "react";
import basket from "../images/basket.png";
import account from "../images/account.png";
import "../tailwind-animation.css";
export default function Header() {
  const openTime = 8;
  const closeTime = 20;
  const currentTime = new Date().getHours();
  const isOpen = currentTime > openTime && currentTime < closeTime;
  return (
    <>
      <header className="bg-smoothBlue text-invitingYellow flex flex-col justify-center items-between   fixed top-0 w-full">
        <div className="bg-black w-full  flex items-center overflow-hidden">
          {isOpen ? (
            <div className="animate-marquee text-white text-lg px-4">
              We are currently open order NOW and get your food delivered to
              your door step in minutes😋.
            </div>
          ) : (
            <div className="animate-marquee text-white text-lg px-4">
              We are currently closed we will open at 0{openTime}:00, Thanks for
              visiting our site😊.
            </div>
          )}
        </div>
        <div className="flex items-center justify-between py-4 px-16">
          <h1 className="font-bold text-2xl">B. Fast Foods</h1>
          <ul className="flex">
            <li>
              <a href="">
                <img className="h-6" src={basket} alt="" />
              </a>
            </li>
            <li className="ml-6">
              <a href="">
                <img className="h-6" src={account} alt="" />
              </a>
            </li>
          </ul>
        </div>
      </header>{" "}
    </>
  );
}
