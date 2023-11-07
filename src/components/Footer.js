import React from "react";
import facebook from "../images/facebook.png";
import x from "../images/x.png";
import instagram from "../images/instagram.png";
import tiktok from "../images/tiktok.png";

export default function Footer() {
  return (
    <footer>
      <div className="flex bg-gray-800 justify-between px-16 py-8 text-white text-sm font-thin">
        <ul>
          <h3 className="font-bold text-2xl border-b-2 mb-4">Navigation</h3>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Our Menu</a>
          </li>
          <li>
            <a href="">FAQs</a>
          </li>
          <li>
            <a href="">About Us</a>
          </li>
        </ul>

        <ul>
          <h3 className="font-bold text-2xl border-b-2 mb-4">Contacts</h3>
          <li>
            <a href="mailto:SteveBruice@gmail.com">SteveBruice@gmail.com</a>
          </li>
          <li>
            <a href="mailto:BrixtonKotas@gmail.com"> BrixtonKotas@gmail.com</a>
          </li>
          <li>
            <p href="">Contact No. : +27 66 042 8599</p>
          </li>
        </ul>

        <div>
          <h3 className="font-bold text-2xl border-b-2 mb-4">Social Media</h3>
          <ul className="flex">
            <li className="pr-2 pt-2">
              <a href=""></a>
              <img src={facebook} alt="" />
            </li>
            <li className="p-2">
              <a href=""></a>
              <img src={x} alt="" />
            </li>
            <li className="p-2">
              <a href=""></a>
              <img src={instagram} alt="" />
            </li>

            <li className="p-2">
              <a href=""></a>
              <img src={tiktok} alt="" />
            </li>
          </ul>
        </div>
      </div>
      <div className="px-16 py-2 bg-gray-400 w-full">
        &copy; {new Date().getFullYear()} Copyright Reserved.
      </div>
    </footer>
  );
}
