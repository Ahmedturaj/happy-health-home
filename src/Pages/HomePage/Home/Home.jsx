import React from "react";
import Banner from "../Banner/Banner";
import FAQ from "../FAQ/FAQ";
import Companies from "../Companies/companies";
import TopMedicine from "../TopMedicine/TopMedicine";

const Home = () => {
  return (
    <div>
      <div className="relative -top-24">
        <Banner />
      </div>
      <div className="">
        <TopMedicine />
      </div>
      <div className="">
        <Companies />
      </div>
      <div className="">
        <FAQ></FAQ>
      </div>
    </div>
  );
};

export default Home;
