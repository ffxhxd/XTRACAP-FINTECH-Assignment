import React from "react";
import { ERROR_IMAGE_URL } from "../Utils/Constants";
import { useRouteError } from "react-router";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  const err = useRouteError();

  return (
    <div className="flex flex-col bg-[#1a5d9b] w-screen h-screen items-center justify-center">
      <img
        className="rounded-sm w-96 h-96"
        src={ERROR_IMAGE_URL}
        alt="errorrrrrrrrrrrrrrrr"
      />
      <h1 className="p-4 text-3xl text-white font-bold">ERROR: {err.status}</h1>
      <h1 className="px-2 text-white text-2xl p-1">{err.statusText}</h1>
      <Link to="/">
        <h1 className="px-2 text-black text-2xl underline animate-pulse">
          Go back to home
        </h1>
      </Link>
    </div>
  );
};

export default ErrorPage;
