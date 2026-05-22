"use client";

import { useState } from "react";
import { Button } from "@heroui/react";
import { FaCalendarAlt, FaSearch, FaUndo } from "react-icons/fa";

const FindText = ({ handleSearch, handleReset }) => {
  const [searchText, setSearchText] = useState("");
  const [afterDate, setAfterDate] = useState("");
  const [beforeDate, setBeforeDate] = useState("");

  // search handler
  const handleFilter = (
    text = searchText,
    after = afterDate,
    before = beforeDate,
  ) => {
    handleSearch(text, after, before);
  };

  // reset all
  const resetFilters = () => {
    setSearchText("");
    setAfterDate("");
    setBeforeDate("");

    handleReset();
  };

  return (
    <section>
      <form className="flex flex-col md:flex-row flex-wrap items-end gap-6 justify-between">
        {/* Search Input */}
        <div className="w-full md:flex-1 min-w-62.5">
          <label className="block text-sm font-bold text-gray-700 mb-2">
            Search Tutor
          </label>

          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
              <FaSearch className="text-gray-400 text-sm" />
            </div>

            <input
              type="text"
              value={searchText}
              onChange={(e) => {
                const value = e.target.value;

                setSearchText(value);

                handleFilter(value, afterDate, beforeDate);
              }}
              placeholder="Search tutor by name or subject..."
              className="w-full pl-10 pr-4 h-12 bg-gray-50/50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 outline-none transition-all shadow-sm text-gray-700 placeholder-gray-400"
            />
          </div>
        </div>

        {/* Date Filters */}
        <div className="flex w-full md:w-auto flex-col sm:flex-row items-center gap-6">
          {/* After Date */}
          <div className="w-full sm:w-auto">
            <label className="block text-sm font-bold text-gray-700 mb-2">
              Available After
            </label>

            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                <FaCalendarAlt className="text-gray-400 text-sm" />
              </div>

              <input
                type="date"
                value={afterDate}
                onChange={(e) => {
                  const value = e.target.value;

                  setAfterDate(value);

                  handleFilter(searchText, value, beforeDate);
                }}
                className="w-full pl-10 pr-4 h-12 bg-gray-50/50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 outline-none transition-all shadow-sm text-gray-700"
              />
            </div>
          </div>

          {/* Before Date */}
          <div className="w-full sm:w-auto">
            <label className="block text-sm font-bold text-gray-700 mb-2">
              Available Before
            </label>

            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                <FaCalendarAlt className="text-gray-400 text-sm" />
              </div>

              <input
                type="date"
                value={beforeDate}
                onChange={(e) => {
                  const value = e.target.value;

                  setBeforeDate(value);

                  handleFilter(searchText, afterDate, value);
                }}
                className="w-full pl-10 pr-4 h-12 bg-gray-50/50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 outline-none transition-all shadow-sm text-gray-700"
              />
            </div>
          </div>
        </div>

        {/* Reset Button */}
        <div className="w-full md:w-auto">
          <Button
            type="button"
            onClick={resetFilters}
            variant="flat"
            className="w-full md:w-auto h-12 px-8 bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold rounded-xl transition-colors flex items-center gap-2"
          >
            <FaUndo className="text-sm" />
            Reset Filters
          </Button>
        </div>
      </form>
    </section>
  );
};

export default FindText;
