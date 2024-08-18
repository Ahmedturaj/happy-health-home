import React, { useEffect, useState } from "react";
import HPicture from "../../assets/Open Peeps - Standing.png";
import axios from "axios";

const About = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/doctors`);
      setData(res.data);
    };
    loadData();
  }, []);

  return (
    <div>
      <div
        data-aos="zoom-up"
        data-aos-duration="1000"
        className="flex justify-center items-center my-14 gap-2"
      >
        <img src={HPicture} alt="" className="w-14" />
        <h2 className="text-2xl border-t-2 rounded-es-xl rounded-se-xl border-cyan-500 border-b-2 py-3 text-center w-80 font-extrabold text-cyan-500 bg-black bg-opacity-15">
          Our Experienced Doctors
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-11/12 mx-auto gap-8">
        {data.map((item) => (
          <div
            key={item._id}
            className="card bg-base-100 shadow-xl overflow-hidden rounded-lg"
          >
            <figure>
              <img
                src={item.doctorPhoto}
                alt={item.doctorName}
                className="w-full h-64 object-cover"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-xl font-bold text-cyan-600">
                {item.doctorName}
              </h2>
              <p className="text-gray-600">{item.specialist}</p>
              <div className="text-gray-500 mt-3">
                <p>
                  <strong>Hospital:</strong> {item.hospital}
                </p>
                <p>
                  <strong>Degree:</strong> {item.degree}
                </p>
                <p>
                  <strong>Experience:</strong> {item.experience}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
