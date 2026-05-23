"use client";

import React, { useState } from "react";
import { FaTimesCircle } from "react-icons/fa";

const MyBookingUserData = ({ data = [] }) => {
  const [sessions, setSessions] = useState(data);

  const [isCancelModalOpen, setIsCancelModalOpen] = useState(false);
  const [sessionToCancel, setSessionToCancel] = useState(null);
  const [loading, setLoading] = useState(false);

  // open modal
  const openCancelModal = (session) => {
    setSessionToCancel(session);
    setIsCancelModalOpen(true);
  };

  // CANCEL + DB UPDATE
  const handleCancelSession = async () => {
    setLoading(true);

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/booking/${sessionToCancel._id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            status: "Cancelled",
          }),
        },
      );

      const data = await res.json();

      if (data?.success) {
        setSessions((prev) =>
          prev.map((s) =>
            s._id === sessionToCancel._id ? { ...s, status: "Cancelled" } : s,
          ),
        );

        setIsCancelModalOpen(false);
        setSessionToCancel(null);
      }
    } catch (error) {
      console.error("Cancel failed:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto py-10 px-4">
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        {/* TABLE */}
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            {/* HEAD */}
            <thead className="bg-gray-50 text-gray-600 uppercase text-xs">
              <tr>
                <th className="px-6 py-4">Tutor</th>
                <th className="px-6 py-4">Student</th>
                <th className="px-6 py-4">Email</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4 text-right">Action</th>
              </tr>
            </thead>

            {/* BODY */}
            <tbody className="divide-y divide-gray-100">
              {sessions.length === 0 ? (
                <tr>
                  <td colSpan="5" className="text-center py-10 text-gray-400">
                    No bookings found
                  </td>
                </tr>
              ) : (
                sessions.map((session) => (
                  <tr key={session._id} className="hover:bg-gray-50 transition">
                    <td className="px-6 py-4 font-semibold text-gray-900">
                      {session.tutorName}
                    </td>

                    <td className="px-6 py-4 text-gray-700">{session.name}</td>

                    <td className="px-6 py-4 text-gray-700">
                      {session.userEmail}
                    </td>

                    <td className="px-6 py-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-bold ${
                          session.status === "Confirmed"
                            ? "bg-green-50 text-green-600"
                            : session.status === "Pending"
                              ? "bg-yellow-50 text-yellow-600"
                              : "bg-red-50 text-red-600"
                        }`}
                      >
                        {session.status}
                      </span>
                    </td>

                    <td className="px-6 py-4 text-right">
                      {session.status !== "Cancelled" ? (
                        <button
                          onClick={() => openCancelModal(session)}
                          className="text-red-600 hover:text-red-700 font-semibold flex items-center gap-1 ml-auto"
                        >
                          <FaTimesCircle /> Cancel
                        </button>
                      ) : (
                        <span className="text-gray-400 text-xs">Cancelled</span>
                      )}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* MODAL */}
      {isCancelModalOpen && (
        <div className="fixed inset-0 z-[9999] bg-black/50 flex items-center justify-center">
          {/* overlay */}
          <div
            className="absolute inset-0"
            onClick={() => setIsCancelModalOpen(false)}
          />

          {/* modal */}
          <div className="relative bg-white p-6 rounded-xl w-[350px] text-center z-[10000]">
            <h2 className="text-lg font-bold mb-3">Cancel Session?</h2>

            <p className="text-gray-500 mb-5">
              Are you sure you want to cancel{" "}
              <span className="font-semibold">
                {sessionToCancel?.tutorName}
              </span>
              ?
            </p>

            <div className="flex gap-3">
              <button
                onClick={() => setIsCancelModalOpen(false)}
                className="flex-1 bg-gray-100 py-2 rounded-lg"
              >
                No
              </button>

              <button
                onClick={handleCancelSession}
                disabled={loading}
                className="flex-1 bg-red-500 text-white py-2 rounded-lg disabled:opacity-60"
              >
                {loading ? "Cancelling..." : "Yes"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyBookingUserData;
