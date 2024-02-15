import React from "react";

const PageHeadings = ({ heading, description }) => {
  return (
    <div className="mb-10 md:mb-16">
      <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
        {heading}
      </h2>

      <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
        {description}
      </p>
    </div>
  );
};

export default PageHeadings;
