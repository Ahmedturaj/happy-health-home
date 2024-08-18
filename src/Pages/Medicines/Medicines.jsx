import axios from "axios";
import React, { useEffect, useState } from "react";

const Medicines = () => {
  const [data, setData] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("price");
  const [sortOrder, setSortOrder] = useState("asc");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_API_URL}/medicines`,
          {
            params: {
              page: currentPage,
              limit: 6,
              sortBy,
              sortOrder,
              search: searchTerm,
            },
          }
        );
        setData(res.data.medicines);
        setTotalPages(res.data.totalPages);
      } catch (error) {
        console.error("There was an error fetching the data:", error);
      }
    };

    fetchData();
  }, [currentPage, sortBy, sortOrder, searchTerm]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1); // Reset to first page on search
  };

  const handleSortChange = (e) => {
    const value = e.target.value;
    if (value === "price-asc") {
      setSortBy("price");
      setSortOrder("asc");
    } else if (value === "price-desc") {
      setSortBy("price");
      setSortOrder("desc");
    } else if (value === "date-asc") {
      setSortBy("postedDate");
      setSortOrder("asc");
    } else if (value === "date-desc") {
      setSortBy("postedDate");
      setSortOrder("desc");
    }
  };

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="my-24 container mx-auto w-11/12 lg:ml-14">
      <div className="flex justify-between mb-4">
        <input
          type="text"
          placeholder="Search by medicine name"
          value={searchTerm}
          onChange={handleSearch}
          className="input input-bordered w-full border-cyan-500 mb-14 max-w-xs"
        />

        <select
          onChange={handleSortChange}
          className="select select-bordered button_hover rounded-e-3xl p-2 border-b text-cyan-500 cursor-pointer border-cyan-500  shadow-lg hover:shadow-cyan-500"
          style={{ transition: "all .5s" }}
        >
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
          <option value="date-asc">Date Added: Oldest First</option>
          <option value="date-desc">Date Added: Newest First</option>
        </select>
      </div>

      {data.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.map((item) => (
            <div key={item._id} className="card bg-base-100 w-96 shadow-xl">
              <figure>
                <img src={item.medicinePhoto} alt={item.medicineName} />
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                  {item.medicineName}
                  <div className="badge bg-cyan-500 text-black">
                    {item.price} Tk
                  </div>
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
        <button
          onClick={prevPage}
          className="button_hover rounded-e-3xl p-2 border-b text-cyan-500 cursor-pointer border-cyan-500  shadow-lg hover:shadow-cyan-500"
          style={{ transition: "all .5s" }}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span className="mx-4">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={nextPage}
          className="button_hover rounded-s-3xl p-2 border-b text-cyan-500 cursor-pointer border-cyan-500  shadow-lg hover:shadow-cyan-500"
          style={{ transition: "all .5s" }}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Medicines;
