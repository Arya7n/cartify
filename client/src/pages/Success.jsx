import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Success = () => {
  return (
    <div className="flex flex-col justify-center items-center w-screen h-screen">
      <h1 className="text-3xl sm:text-4xl font-bold">Payment Successfull</h1>
      <Link to={"/"} className="text-xs sm:text-base">
        Go to Home
      </Link>
    </div>
  );
};

export default Success;
