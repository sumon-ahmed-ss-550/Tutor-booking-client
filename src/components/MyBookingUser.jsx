"use client";

import { useState } from "react";
import { AlertDialog, Button } from "@heroui/react";
import { authClient } from "@/lib/auth-client";

const MyBookingUser = ({ oneUser }) => {
  const { data: session } = authClient.useSession();

  // form state
  const [formData, setFormData] = useState({
    tutorName: oneUser?.tutorName || "",
    name: "",
    email: "",
    status: "Confirmed",
  });

  // input change handle
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // confirm booking
  const handleConfirmBooking = async () => {
    const bookingData = {
      ...formData,
      userId: session?.user?.id || "",
      userEmail: session?.user?.email || "",
    };

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/tutors/booking`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bookingData),
      },
    );

    const data = await res.json();

    console.log(data);
  };

  return (
    <AlertDialog>
      {/* Open Button */}
      <Button
        variant="outline"
        className="mt-8 rounded-xl border border-gray-300 px-6 py-2 text-gray-800 transition hover:bg-gray-100"
      >
        Book Session
      </Button>

      {/* Backdrop */}
      <AlertDialog.Backdrop className="bg-black/40 backdrop-blur-sm">
        {/* Container */}
        <AlertDialog.Container className="flex items-center justify-center p-3 sm:p-5">
          {/* Dialog */}
          <AlertDialog.Dialog
            className="
              relative
              w-full
              max-w-[95%]
              sm:max-w-112.5
              md:max-w-125
              bg-white
              rounded-3xl
              shadow-2xl
              max-h-[90vh]
              overflow-y-auto
            "
          >
            {/* Close Button */}
            <AlertDialog.CloseTrigger className="absolute top-4 right-4 z-10 rounded-full p-2 hover:bg-gray-100 transition">
              ✕
            </AlertDialog.CloseTrigger>

            {/* Header */}
            <div className="px-5 sm:px-8 pt-8 sm:pt-10 pb-6 text-center">
              <h1 className="text-2xl sm:text-3xl font-semibold text-gray-900">
                Book Session
              </h1>

              <p className="text-gray-500 mt-2 text-sm sm:text-[15px] leading-relaxed">
                Make changes to your profile here. Click save when done.
              </p>
            </div>

            {/* Form */}
            <div className="space-y-4 px-4 sm:px-6 pb-6">
              {/* Tutor Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Tutor Name
                </label>

                <input
                  type="text"
                  name="tutorName"
                  value={formData.tutorName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border rounded-2xl"
                />
              </div>

              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>

                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border rounded-2xl"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>

                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border rounded-2xl"
                />
              </div>

              {/* Status */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Status
                </label>

                <select
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border rounded-2xl"
                >
                  <option value="Confirmed">Confirmed</option>
                  <option value="Pending">Pending</option>
                </select>
              </div>
            </div>

            {/* Footer */}
            <AlertDialog.Footer className="flex gap-3 px-6 py-4 border-t">
              <Button slot="close" className="flex-1 border rounded-xl">
                Cancel
              </Button>

              <Button
                slot="close"
                onClick={handleConfirmBooking}
                className="flex-1 bg-black text-white rounded-xl"
              >
                Confirm Booking
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
};

export default MyBookingUser;
