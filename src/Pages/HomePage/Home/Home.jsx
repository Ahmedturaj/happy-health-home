import React from "react";
import Banner from "../Banner/Banner";
import FAQ from "../FAQ/FAQ";

const Home = () => {
  return (
    <div>
      <div className="relative -top-24">
        <Banner />
      </div>
      <div className="">
        <FAQ></FAQ>
      </div>
    </div>
  );
};

export default Home;
