"use client";

import FindText from "@/components/FindText";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const TutorsPage = () => {
  const [tutors, setTutors] = useState([]);
  const [loading, setLoading] = useState(true);

  // fetch tutors
  const fetchTutors = async (search = "", after = "", before = "") => {
    try {
      setLoading(true);

      const res = await fetch(
        `http://localhost:8000/tutors?search=${search}&after=${after}&before=${before}`,
        {
          cache: "no-store",
        },
      );

      const data = await res.json();

      setTutors(Array.isArray(data) ? data : []);
    } catch (error) {
      console.log(error);
      setTutors([]);
    } finally {
      setLoading(false);
    }
  };

  // reset filters
  const handleReset = () => {
    fetchTutors();
  };

  useEffect(() => {
    fetchTutors();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50/50 pb-20">
      {/* HERO */}
      <div className="relative bg-linear-to-b from-teal-50 to-gray-50/50 pt-20 pb-32 px-4 sm:px-6 lg:px-8 border-b border-gray-100 overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
            Find Your Perfect{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-teal-500 to-blue-600">
              Tutor
            </span>
          </h1>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10">
            Browse qualified professionals and book your next learning session.
          </p>
        </div>
      </div>

      {/* SEARCH */}
      <div className="max-w-7xl mx-auto px-4 -mt-16 relative z-20">
        <div className="bg-white rounded-3xl shadow border border-gray-100 p-6">
          <FindText handleSearch={fetchTutors} handleReset={handleReset} />
        </div>
      </div>

      {/* CONTENT */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-gray-900">Available Tutors</h2>

          <span className="text-sm font-semibold text-teal-700 bg-teal-50 px-4 py-1.5 rounded-full border border-teal-100">
            {tutors.length} Tutors Found
          </span>
        </div>

        {/* LOADING */}
        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="w-12 h-12 border-4 border-teal-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tutors.length === 0 ? (
              <div className="col-span-full flex flex-col items-center justify-center py-24 text-center">
                <div className="w-20 h-20 flex items-center justify-center rounded-full bg-teal-50 text-teal-500 mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-10 h-10"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-3A2.25 2.25 0 008.25 5.25V9m7.5 0h2.25A2.25 2.25 0 0120.25 11.25v7.5A2.25 2.25 0 0118 21H6a2.25 2.25 0 01-2.25-2.25v-7.5A2.25 2.25 0 016 9h2.25m7.5 0h-7.5"
                    />
                  </svg>
                </div>

                <h2 className="text-2xl font-bold text-gray-800">
                  No Tutors Found
                </h2>

                <p className="text-gray-500 mt-2 max-w-md">
                  We couldn’t find any tutors right now.
                </p>
              </div>
            ) : (
              tutors.map((item) => (
                <div
                  key={item._id}
                  className="rounded-3xl border border-gray-200 bg-white p-4 shadow-md flex flex-col"
                >
                  <Image
                    src={item.photoUrl}
                    width={384}
                    height={180}
                    alt="tutor"
                    className="rounded-2xl object-cover h-[220px]"
                  />

                  <div className="mt-5 flex-1">
                    <h2 className="text-2xl font-bold text-black">
                      {item.tutorName}
                    </h2>

                    <p className="text-gray-500 mt-1">{item.subject}</p>

                    <div className="mt-4 space-y-2 text-gray-700">
                      <p>
                        <span className="font-medium">Available:</span>{" "}
                        {item.timeSlot}
                      </p>

                      <p>
                        <span className="font-medium">Start:</span>{" "}
                        {item.sessionStartDate}
                      </p>

                      <p>
                        <span className="font-medium">Fee:</span> $
                        {item.hourlyFee}
                      </p>
                    </div>
                  </div>

                  <Link href={`/tutors/${item._id}`}>
                    <button className="mt-6 w-full bg-teal-500 py-3 text-white rounded-xl font-medium hover:bg-teal-600 transition">
                      Book Session
                    </button>
                  </Link>
                </div>
              ))
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default TutorsPage;
