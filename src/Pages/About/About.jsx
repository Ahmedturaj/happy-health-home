import React from "react";
import HPicture from "../../assets/Open Peeps - Standing.png";
const About = () => {
  return (
    <div>
      <div
        data-aos="zoom-up"
        data-aos-duration="1000"
        className="flex justify-center items-center my-14 gap-2"
      >
        <img src={HPicture} alt="" className="w-14" />
        <h2 className="text-2xl border-t-2 rounded-es-xl rounded-se-xl border-cyan-500 border-b-2 py-3 text-center w-80 font-extrabold text-cyan-500 bg-black bg-opacity-15">
          Our experienced Doctor
        </h2>
      </div>
    </div>
  );
};

export default About;
