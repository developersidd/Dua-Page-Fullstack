"use client";
import { useEffect, useState } from "react";
import Icon from "../common/Icon";
import CategoryList from "./CategoryList";

const Categories = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData(); // Fetch data when component mounts
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:8000/api/v1/category");
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const jsonData = await response.json();
      setData(jsonData); // Set fetched data into state
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  return (
    <div className="overflow-y-auto">
      <div className="">
        <div className="bg-primary p-4  rounded-t-xl mb-4">
          <h1 className="text-center text-base text-white">Categories</h1>
        </div>
        <div className="focus-within:border-primary focus-within:border-2 shadow-sm border flex items-center w-[95%] mx-auto p-1 h-12 bg-white rounded-lg ">
          <div className="pl-3">
            <Icon classes={"w-5"} name="search.svg" alt={"search"} />
          </div>
          <input
            placeholder="Search By Dua Name"
            className="w-full h-full outline-none border-none p-4 text-sm"
            type="text"
            name=""
            id=""
          />
        </div>
      </div>
      <div className="h-[calc(100vh-300px)] overflow-y-auto p-3">
        <CategoryList categories={data.data} />
      </div>
    </div>
  );
};

export default Categories;
