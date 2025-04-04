import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { Star } from "lucide-react";
import LinkButton from "./LinkButton";
import { starsGenerator } from "@/constants/helper";

const ProductCard = ({
  name = "Product Title",
  price = 2000,
  rating = 5,
  image = {
    url: "https://images.pexels.com/photos/7199194/pexels-photo-7199194.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    id: "322dadaf",
  },
}) => {
  return (
    <div className="relative border w-fit overflow-clip grid z-1 hover:shadow-md rounded-2xl">
      <img
        src={image.url}
        onError={(e) => {
          e.target.onerror = null; // prevents looping
          e.target.src = "https://via.placeholder.com/150"; // fallback image
        }}
        alt={name}
        className="object-cover w-[30rem] h-[20rem]"
      />
      <div className="px-3 grid gap-1 py-2 absolute bg-white dark:bg-zinc-900 w-full bottom-0 translate-y-[3rem] hover:translate-y-0 tranform transition-all ease-in-out rounded-xl duration-300">
        <h2>{name}</h2>
        <div className="flex justify-between">
          <div className="flex">{starsGenerator(rating)}</div>
          <span>₹{price}</span>
        </div>
        <LinkButton to={`/product/${name.split(" ").join("-")}`} text="View Product" />
      </div>
    </div>
  );
};

export default ProductCard;
