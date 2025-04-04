import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Error = () => {
  const [count, setCount] = useState(3);
  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  setTimeout(() => {
    window.location.href = "/";
  }, 3000);

  return (
    <div className="flex gap-1 flex-col justify-center items-center w-screen h-screen">
      <h1 className="text-3xl sm:text-5xl font-bold">404 Page Not Found</h1>
      <Link to={"/"} className="underline text-sm sm:text-lg">
        CLick here to go to Homepage(Redirecting you in {count} seconds)
      </Link>
    </div>
  );
};

export default Error;
