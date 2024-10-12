import React from "react";
import { FaSearch, FaMapMarkerAlt, FaListAlt } from "react-icons/fa";
import bgImage from '../../../assets/SearchImages/rehab.jpg';

const SearchBar = () => {
  return (
    <div
      className="Search_bar bg-cover bg-center h-[30rem] flex items-center justify-center text-white"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div
        className="wrapper max-w-5xl mx-auto p-6 sm:p-8 md:p-12 rounded-lg shadow-xl border border-white"
        style={{ backgroundColor: '#78adf7', opacity: '0.9' }}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center text-white pt-16 md:pt-0">
          Find a Deaddiction Centre
        </h1>
        <form className="w-full">
          <div className="flex flex-col gap-4 md:gap-8 md:flex-row items-center">

            <div className="filter-container relative w-full md:w-1/4">
              <FaMapMarkerAlt className="absolute left-4 top-1/2 transform -translate-y-1/2 text-blue-600 text-2xl" />
              <input
                type="text"
                placeholder="Enter Location"
                className="w-full p-4 pl-12 text-blue-700 bg-white border-2 border-blue-400 rounded-full placeholder-blue-500 text-lg focus:outline-none focus:border-blue-600 transition-all duration-300 shadow-md hover:shadow-lg"
              />
            </div>

            <div className="filter-container relative w-full md:w-1/4">
              <label htmlFor="categorySelect" className="sr-only">Select Category</label>
              <FaListAlt className="absolute left-4 top-1/2 transform -translate-y-1/2 text-blue-600 text-2xl" />
              <select
                id="categorySelect"
                className="w-full p-4 pl-12 text-blue-700 bg-white border-2 border-blue-400 rounded-full text-lg focus:outline-none focus:border-blue-600 transition-all duration-300 shadow-md hover:shadow-lg appearance-none"
              >
                <option value="" disabled selected>Select Category</option>
                <option value="rehab">Rehabilitation</option>
                <option value="detox">Detox</option>
                <option value="counseling">Counseling</option>
              </select>
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 10l5 5 5-5H7z" />
                </svg>
              </div>
            </div>

            <div className="search-container relative w-full md:w-1/4">
              <input
                type="text"
                id="searchInput"
                placeholder="Search for centers..."
                className="w-full p-4 pl-12 text-blue-700 bg-white border-2 border-blue-400 rounded-full placeholder-blue-500 text-lg focus:outline-none focus:border-blue-600 transition-all duration-300 shadow-md hover:shadow-lg"
              />
            </div>

            <button
              type="submit"
              className="searchButton h-14 w-full md:w-auto text-white font-semibold rounded-full shadow-lg transition-colors duration-300 hover:bg-blue-600 flex items-center justify-center"
              style={{
                cursor: 'pointer',
                padding: '0 30px',
                backgroundColor: '#2f7ae4',
              }}
            >
              <FaSearch className="mr-2" />
              Search
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SearchBar;
