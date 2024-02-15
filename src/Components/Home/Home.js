import React from "react";
import Hero from "./Hero";
import Featured from "./Featured";
import Testimonials from "./Testimonials";

const Home = () => {
  return (
    <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
      <Hero />
      <Featured />
      <Testimonials />
    </div>
  );
};

export default Home;
