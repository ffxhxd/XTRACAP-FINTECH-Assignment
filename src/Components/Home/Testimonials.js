import React from "react";
import PageHeadings from "../PageHeadings";
import { testimonialsData } from "../../Utils/Constants";

const Testimonials = () => {
  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-xl px-4 md:px-8">
        <PageHeadings heading="What Others Say About Us" />
        <div className="grid gap-y-10 sm:grid-cols-2 sm:gap-y-12 lg:grid-cols-3 lg:divide-x">
          {testimonialsData.map((testimonial, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-4 sm:px-4 md:gap-6 lg:px-8"
            >
              {/* Testimonial Quote */}
              <div className="text-center text-gray-600">
                {testimonial.quote}
              </div>

              {/* Testimonial Details */}
              <div className="flex flex-col items-center gap-2 sm:flex-row md:gap-3">
                {/* Image */}
                <div className="h-12 w-12 overflow-hidden rounded-full bg-gray-100 shadow-lg md:h-14 md:w-14">
                  <img
                    src={testimonial.imageSrc}
                    alt={`Pic of ${testimonial.name}`}
                    className="h-full w-full object-cover object-center"
                  />
                </div>

                {/* Name and Title */}
                <div>
                  <div className="text-center text-sm font-bold text-indigo-500 sm:text-left md:text-base">
                    {testimonial.name}
                  </div>
                  <p className="text-center text-sm text-gray-500 sm:text-left md:text-sm">
                    {testimonial.title}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
