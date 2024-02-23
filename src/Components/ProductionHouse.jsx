import React from "react";

import disney from "../assets/images/disney.png";
import marvel from "../assets/images/marvel.png";
import nationalG from "../assets/images/nationalG.png";
import pixar from "../assets/images/pixar.png";
import starwar from "../assets/images/starwar.png";

import disneyV from "../assets/Videos/disney.mp4";
import marvelV from "../assets/Videos/marvel.mp4";
import nationalGeographicV from "../assets/Videos/national-geographic.mp4";
import pixarV from "../assets/Videos/pixar.mp4";
import starWars from "../assets/Videos/star-wars.mp4";

function ProductionHouse() {
  const ProductionHouseList = [
    { id: 1, image: disney, video: disneyV },
    { id: 2, image: marvel, video: marvelV },
    { id: 3, image: nationalG, video: nationalGeographicV },
    { id: 4, image: pixar, video: pixarV },
    { id: 5, image: starwar, video: starWars },
  ];

  return (
    <div className=" flex gap-10 mid:gap-3 p-2 px-5 md:px-16">
      {ProductionHouseList.map((x) => (
        <div
          className="border-gray-600 hover:border-gray-300 md:border-[4px] border-[2px] rounded-lg cursor-pointer hover:scale-110 transition-all ease-linear duration-300
          shadow-xl  shadow-gray-700 hover:shadow-gray-500">
         
          <video
            src={x.video}
            autoPlay
            loop
            playsInline
            className="absolute rounded-lg opacity-0 hover:opacity-70 "
          />
           <img src={x.image} className="w-full" />
          
        </div>
      ))}
    </div>
  );
}

export default ProductionHouse;
