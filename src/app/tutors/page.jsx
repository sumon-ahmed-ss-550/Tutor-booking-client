"use client";

import FindText from "@/components/FindText";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";

const TutorsPage = () => {
  const [tutors, setTutors] = useState([]);
  const [loading, setLoading] = useState(true);

  //  safe + optimized fetch function
  const fetchTutors = useCallback(
    async (search = "", after = "", before = "") => {
      try {
        setLoading(true);

        const res = await fetch(
          `${process.env.NEXT_PUBLIC_SERVER_URL}/tutors?search=${search}&after=${after}&before=${before}`,
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
    },
    [],
  );

  // ✅ FIXED useEffect (no direct async call issue)
  useEffect(() => {
    let isMounted = true;

    const loadData = async () => {
      if (!isMounted) return;
      await fetchTutors();
    };

    loadData();

    return () => {
      isMounted = false;
    };
  }, [fetchTutors]);

  // reset
  const handleReset = () => {
    fetchTutors();
  };

  return (
    <div className="min-h-screen bg-gray-50/50 pb-20">
      {/* HERO */}
      <div className="relative bg-linear-to-b from-teal-50 to-gray-50/50 pt-20 pb-32 px-4 sm:px-6 lg:px-8 border-b border-gray-100 overflow-hidden">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
            Find Your Perfect{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-teal-500 to-blue-600">
              Tutor
            </span>
          </h1>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
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
        ) : tutors.length === 0 ? (
          <div className="text-center py-24">
            <h2 className="text-2xl font-bold text-gray-800">
              No Tutors Found
            </h2>
            <p className="text-gray-500 mt-2">
              We couldn’t find any tutors right now.
            </p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tutors.map((item) => (
              <div
                key={item._id}
                className="rounded-3xl border border-gray-200 bg-white p-4 shadow-md flex flex-col"
              >
                <Image
                  src={item.photoUrl}
                  width={384}
                  height={220}
                  alt="tutor"
                  className="rounded-2xl object-cover h-55"
                  loading="eager"
                  priority
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
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default TutorsPage;
