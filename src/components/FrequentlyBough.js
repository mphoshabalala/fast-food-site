import React from "react";
import { useKotas } from "../contexts/ItemsContext";
import { Link } from "react-router-dom";

export default function FrequentlyBough() {
  const { kotas } = useKotas();
  const filtered = kotas.filter((_, index) => index < 4);
  console.log(kotas);
  return (
    <div className="flex flex-col items-center  h-full text-gray-800">
      <h1 className=" font-bold text-3xl my-8 border-b-4 border-b-invitingYellow">
        Frequently bought
      </h1>
      <div className="flex flex-wrap justify-center items-center">
        {filtered.map((kota, index) => (
          <Link
            to={`${kota.id}`}
            key={index}
            className="w-1/5  m-4 bg-gray-300 p-4 font-semibold"
          >
            <img className=" h-60 w-full" src={kota.images[0]} alt="" />
            <p>{kota.name}</p>
            <p>R{kota.price}.00</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
