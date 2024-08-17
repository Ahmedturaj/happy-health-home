import React, { useEffect, useState } from "react";
import axios from "axios";
import HPicture from "../../../assets/Open Peeps - Standing.png";
import { BsCapsule } from "react-icons/bs";
const Companies = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/medicine`);
        setData(res.data); // Set the data to state
        // Log the data
      } catch (error) {
        console.error("There was an error fetching the data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="my-10 container mx-auto">
      <div
        data-aos="zoom-up"
        data-aos-duration="1000"
        className="flex justify-center items-center my-14 gap-2"
      >
        <img src={HPicture} alt="" className="w-14" />
        <h2 className="text-2xl border-t-2 rounded-es-xl rounded-se-xl border-cyan-500 border-b-2 py-3 text-center w-80 font-extrabold text-cyan-500 bg-black bg-opacity-15">
          Top Companies
        </h2>
      </div>
      {/* You can display the fetched data here */}
      {data && (
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9 lg:ml-14">
            {data.slice(0, 6).map((item) => (
              <div
                key={item._id}
                className="card bg-base-100  image-full w-96 shadow-xl group hover:bg-opacity-100"
              >
                <figure className="transition-opacity duration-300 ease-in-out opacity-50 group-hover:opacity-100">
                  <img src={item.companyLogo} alt="Shoes" />
                </figure>
                <div className="card-body transition-opacity duration-300 ease-in-out opacity-100 group-hover:opacity-0">
                  <h2 className="card-title">{item.companyName}</h2>
                  <div className="flex items-center justify-center mt-6">
                    <BsCapsule className="text-cyan-500 text-5xl " />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Companies;
