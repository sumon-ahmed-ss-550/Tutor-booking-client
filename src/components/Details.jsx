"use client";
import Image from "next/image";
import ShortDetails from "./ShortDetails";

const Details = ({ details, oneUser }) => {
  return (
    <div className="px-3">
      <div className="max-w-7xl mx-auto my-6 px-4 rounded-3xl border border-gray-200 bg-white p-7 shadow-md">
        <div className="flex flex-col gap-8 md:flex-row">
          {/* Left Image */}
          <div className="md:w-[48%] flex justify-center items-center">
            <Image
              src={oneUser.photoUrl}
              width={360}
              height={180}
              alt="This is details image"
              loading="eager"
              className="w-full h-auto rounded-3xl"
            ></Image>
          </div>

          {/* Right Content */}
          <div className="flex-1">
            <h2 className="text-5xl font-bold text-black">
              {oneUser.tutorName}
            </h2>

            <p className="mt-2 text-gray-500">{oneUser.subject}</p>

            <div className="mt-6 space-y-4 text-[17px] text-gray-800">
              {/* <p>
                <span className="font-bold">Institution:</span>{" "}
                {oneUser.institution}
              </p> */}

              <p>
                <span className="font-bold">Location:</span> {oneUser.location}
              </p>

              <p>
                <span className="font-bold">Mode:</span>
                {oneUser.teachingMode}
              </p>

              <p>
                <span className="font-bold">{oneUser.availableTime}</span>
              </p>

              <p>
                <span className="font-bold">Hourly Fee:</span>
                {oneUser.hourlyFee}
              </p>

              <p>
                <span className="font-bold">Remaining Slots:</span>
                {oneUser.totalSlot}
              </p>

              <p>
                <span className="font-bold">Session Start Date:</span>
                {oneUser.sessionStartDate}
              </p>
            </div>

            {/* Button */}
            <ShortDetails oneUser={oneUser}></ShortDetails>
            {/* <button className="mt-8 rounded-xl border border-gray-300 px-6 py-2 text-gray-800 transition hover:bg-gray-100">
              Book Session
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
