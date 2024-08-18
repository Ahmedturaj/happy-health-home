import axios from "axios";
import React, { useEffect, useState } from "react";
import HPicture from "../../../assets/Open Peeps - Standing.png";
import { Link } from "react-router-dom";
const TopMedicine = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/medicine`);
        setData(res.data); // Set the data to state
        console.log(res.data); // Log the data
      } catch (error) {
        console.error("There was an error fetching the data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="my-24 container mx-auto">
      <div
        data-aos="zoom-up"
        data-aos-duration="1000"
        className="flex justify-center items-center my-14 gap-2"
      >
        <img src={HPicture} alt="" className="w-14" />
        <h2 className="text-2xl border-t-2 rounded-es-xl rounded-se-xl border-cyan-500 border-b-2 py-3 text-center w-80 font-extrabold text-cyan-500 bg-black bg-opacity-15">
          Top Medicine
        </h2>
      </div>
      {data && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.slice(0, 6).map((item) => (
            <div key={item._id} className="card bg-base-100 w-96 shadow-xl">
              <figure>
                <img src={item.medicinePhoto} alt="Medicine" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                  {item.medicineName}
                  <div className="badge badge-secondary">{item.price} Tk</div>
                </h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                  <div className="badge badge-outline">
                    Category: {item.category}
                  </div>
                  <div className="badge badge-outline">
                    Company: {item.companyName}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      <div className="w-full flex items-center justify-center mt-14">
        <Link
          to={"/medicines"}
          className="  button_hover rounded-e-3xl p-2 border-b text-cyan-500 cursor-pointer border-cyan-500  shadow-lg hover:shadow-cyan-500"
          style={{ transition: "all .5s" }}
        >
          See More
        </Link>
      </div>
    </div>
  );
};

export default TopMedicine;
