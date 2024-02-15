import React from "react";
import loadingImage from "../Assets/loading.gif";

const Loading = () => {
  return (
    <div className="flex items-start justify-center w-full h-22">
      <img src={loadingImage} alt="Loading..." className="w-[35%]" />
    </div>
  );
};

export default Loading;
