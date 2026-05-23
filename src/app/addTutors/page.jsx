"use client";

import { authClient } from "@/lib/auth-client";
import React, { useState } from "react";
import toast from "react-hot-toast";
import {
  FaUserGraduate,
  FaCalendarAlt,
  FaInfoCircle,
  FaCheckCircle,
} from "react-icons/fa";

export default function AddTutorPage() {
  const { data: session } = authClient.useSession();
  const userData = session?.user;

  const [formData, setFormData] = useState({
    userId: userData?.id,
    userName: userData?.name,
    userEmail: userData?.email,
    tutorName: "",
    photoUrl: "",
    subject: "",
    availableDays: "",
    timeSlot: "",
    hourlyFee: "",
    totalSlot: "",
    sessionStartDate: "",
    institutionExperience: "",
    location: "",
    teachingMode: "Online",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const tokenResponse = await authClient.token();
    const token = tokenResponse?.data?.token || tokenResponse?.token;

    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/tutors`, {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await res.json();
    if (data) {
      toast.success("Tutors added successfully");
      setFormData({
        tutorName: "",
        photoUrl: "",
        subject: "",
        availableDays: "",
        timeSlot: "",
        hourlyFee: "",
        totalSlot: "",
        sessionStartDate: "",
        institutionExperience: "",
        location: "",
        teachingMode: "",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50/50 py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Decorative background blobs */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-teal-400/10 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] translate-x-1/2 translate-y-1/2 pointer-events-none"></div>

      <div className="max-w-4xl w-full mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight mb-3">
            Become a{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-blue-600">
              Tutor
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join our platform and share your expertise. Fill out the details
            below to create your professional mentor profile.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 overflow-hidden">
          <form onSubmit={handleSubmit} className="p-8 sm:p-10 space-y-10">
            {/* Section 1: Basic Information */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 border-b border-gray-100 pb-4">
                <div className="w-10 h-10 rounded-xl bg-teal-50 flex items-center justify-center text-teal-600">
                  <FaUserGraduate className="text-xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">
                  Basic Information
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                <div className="space-y-2">
                  <label
                    htmlFor="tutorName"
                    className="block text-sm font-semibold text-gray-700"
                  >
                    Tutor Name
                  </label>
                  <input
                    type="text"
                    name="tutorName"
                    id="tutorName"
                    value={formData.tutorName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 outline-none transition-all"
                    placeholder="e.g. John Doe"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="photoUrl"
                    className="block text-sm font-semibold text-gray-700"
                  >
                    Photo URL
                  </label>
                  <input
                    type="url"
                    name="photoUrl"
                    id="photoUrl"
                    value={formData.photoUrl}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 outline-none transition-all"
                    placeholder="https://example.com/photo.jpg"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="subject"
                    className="block text-sm font-semibold text-gray-700"
                  >
                    Subject Category
                  </label>
                  <select
                    name="subject"
                    id="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 outline-none transition-all text-gray-700 appearance-none"
                    required
                  >
                    <option value="" disabled>
                      Select a subject
                    </option>
                    <option value="Mathematics">Mathematics</option>
                    <option value="Physics">Physics</option>
                    <option value="Chemistry">Chemistry</option>
                    <option value="Biology">Biology</option>
                    <option value="English">English</option>
                    <option value="Computer Science">Computer Science</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="teachingMode"
                    className="block text-sm font-semibold text-gray-700"
                  >
                    Teaching Mode
                  </label>
                  <select
                    name="teachingMode"
                    id="teachingMode"
                    value={formData.teachingMode}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 outline-none transition-all text-gray-700 appearance-none"
                    required
                  >
                    <option value="Online">Online</option>
                    <option value="Offline">Offline</option>
                    <option value="Both">Both (Online & Offline)</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Section 2: Schedule & Availability */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 border-b border-gray-100 pb-4">
                <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
                  <FaCalendarAlt className="text-xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">
                  Schedule & Availability
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                <div className="space-y-2">
                  <label
                    htmlFor="availableDays"
                    className="block text-sm font-semibold text-gray-700"
                  >
                    Available Days
                  </label>
                  <input
                    type="text"
                    name="availableDays"
                    id="availableDays"
                    value={formData.availableDays}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 outline-none transition-all"
                    placeholder="e.g. Mon, Wed, Fri"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="timeSlot"
                    className="block text-sm font-semibold text-gray-700"
                  >
                    Available Time Slot
                  </label>
                  <input
                    type="text"
                    name="timeSlot"
                    id="timeSlot"
                    value={formData.timeSlot}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 outline-none transition-all"
                    placeholder="e.g. 5:00 PM - 8:00 PM"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="sessionStartDate"
                    className="block text-sm font-semibold text-gray-700"
                  >
                    Session Start Date
                  </label>
                  <input
                    type="date"
                    name="sessionStartDate"
                    id="sessionStartDate"
                    value={formData.sessionStartDate}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 outline-none transition-all"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="totalSlot"
                    className="block text-sm font-semibold text-gray-700"
                  >
                    Total Slots Available
                  </label>
                  <input
                    type="number"
                    name="totalSlot"
                    id="totalSlot"
                    min="1"
                    value={formData.totalSlot}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 outline-none transition-all"
                    placeholder="e.g. 10"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Section 3: Additional Details */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 border-b border-gray-100 pb-4">
                <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600">
                  <FaInfoCircle className="text-xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">
                  Additional Details
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                <div className="space-y-2">
                  <label
                    htmlFor="hourlyFee"
                    className="block text-sm font-semibold text-gray-700"
                  >
                    Hourly Fee ($)
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-medium">
                      $
                    </span>
                    <input
                      type="number"
                      name="hourlyFee"
                      id="hourlyFee"
                      min="0"
                      value={formData.hourlyFee}
                      onChange={handleChange}
                      className="w-full pl-8 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 outline-none transition-all"
                      placeholder="25"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="location"
                    className="block text-sm font-semibold text-gray-700"
                  >
                    Location (Area/City)
                  </label>
                  <input
                    type="text"
                    name="location"
                    id="location"
                    value={formData.location}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 outline-none transition-all"
                    placeholder="e.g. Downtown, New York"
                    required
                  />
                </div>

                <div className="space-y-2 md:col-span-2">
                  <label
                    htmlFor="institutionExperience"
                    className="block text-sm font-semibold text-gray-700"
                  >
                    Institution & Experience
                  </label>
                  <textarea
                    name="institutionExperience"
                    id="institutionExperience"
                    rows={4}
                    value={formData.institutionExperience}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 outline-none transition-all resize-y"
                    placeholder="e.g. B.Sc in Physics from MIT. 5 years of teaching experience focusing on SAT prep..."
                    required
                  ></textarea>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-8">
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-teal-500 text-white font-bold py-4 px-8 rounded-xl shadow-[0_0_20px_rgba(4,133,247,0.3)] hover:shadow-[0_0_30px_rgba(91,217,179,0.5)] active:scale-[0.98] transition-all duration-300"
              >
                <FaCheckCircle className="text-xl" />
                <span>Publish Tutor Profile</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
