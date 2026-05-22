import { authClient } from "@/lib/auth-client";
import { AlertDialog, Button } from "@heroui/react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import {
  FaCalendarAlt,
  FaCheckCircle,
  FaEdit,
  FaInfoCircle,
  FaUserGraduate,
} from "react-icons/fa";

const EditUser = ({ item }) => {
  console.log("EditUser Item:", item);
  const router = useRouter();

  const { data: session } = authClient.useSession();
  const user = session?.user;

  const handleUpdateTutor = async (e) => {
    e.preventDefault();
    const form = e.target;
    const updatedTutor = {
      tutorName: form.tutorName.value,
      photoUrl: form.photoUrl.value,
      subject: form.subject.value,
      teachingMode: form.teachingMode.value,
      availableDays: form.availableDays.value,
      timeSlot: form.timeSlot.value,
      sessionStartDate: form.sessionStartDate.value,
      totalSlot: form.totalSlot.value,
      hourlyFee: form.hourlyFee.value,
      location: form.location.value,
      institutionExperience: form.institutionExperience.value,
    };

    const res = await fetch(`http://localhost:8000/tutors/user/${user?.id}`, {
      method: "PATCH",
      body: JSON.stringify(updatedTutor),
      headers: {
        "Content-type": "application/json",
      },
    });
    const data = await res.json();
    if (data) {
      router.refresh();
      toast.success("Tutor profile updated successfully!");
    }
  };

  return (
    <AlertDialog>
      {/* Edit Button */}
      <Button className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors">
        <FaEdit />
      </Button>

      {/* Dialog */}
      <AlertDialog.Backdrop className="bg-black/40 backdrop-blur-sm">
        <AlertDialog.Container className="p-2 sm:p-4">
          <AlertDialog.Dialog className="w-full max-w-[95vw] sm:max-w-2xl lg:max-w-5xl max-h-[95vh] overflow-hidden rounded-3xl">
            <AlertDialog.CloseTrigger className="z-10" />

            <div className="max-h-[95vh] overflow-y-auto bg-gray-50/50 py-6 sm:py-8 lg:py-12 px-3 sm:px-6 lg:px-8 relative overflow-hidden">
              {/* Background Effects */}
              <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-teal-400/10 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

              <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] translate-x-1/2 translate-y-1/2 pointer-events-none"></div>

              <div className="max-w-4xl w-full mx-auto relative z-10">
                {/* Header */}
                <div className="text-center mb-8 sm:mb-10">
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 tracking-tight mb-3">
                    Update{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-blue-600">
                      Tutor
                    </span>
                  </h2>

                  <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-2xl mx-auto">
                    Update your tutor profile information.
                  </p>
                </div>

                {/* Form Card */}
                <div className="bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 overflow-hidden">
                  <form
                    onSubmit={handleUpdateTutor}
                    className="p-4 sm:p-6 lg:p-10 space-y-8 sm:space-y-10"
                  >
                    {/* Basic Information */}
                    <div className="space-y-6">
                      <div className="flex items-center gap-3 border-b border-gray-100 pb-4">
                        <div className="w-10 h-10 rounded-xl bg-teal-50 flex items-center justify-center text-teal-600">
                          <FaUserGraduate className="text-xl" />
                        </div>

                        <h3 className="text-lg sm:text-xl font-bold text-gray-800">
                          Basic Information
                        </h3>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 lg:gap-8">
                        {/* Tutor Name */}
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
                            defaultValue={item.tutorName}
                            className="w-full px-4 py-3 text-sm sm:text-base bg-gray-50 border border-gray-200 rounded-xl outline-none"
                            required
                          />
                        </div>

                        {/* Photo URL */}
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
                            defaultValue={item.photoUrl}
                            className="w-full px-4 py-3 text-sm sm:text-base bg-gray-50 border border-gray-200 rounded-xl outline-none"
                            required
                          />
                        </div>

                        {/* Subject */}
                        <div className="space-y-2">
                          <label
                            htmlFor="subject"
                            className="block text-sm font-semibold text-gray-700"
                          >
                            Subject
                          </label>

                          <select
                            name="subject"
                            id="subject"
                            defaultValue={item.subject}
                            className="w-full px-4 py-3 text-sm sm:text-base bg-gray-50 border border-gray-200 rounded-xl outline-none"
                            required
                          >
                            <option value="Mathematics">Mathematics</option>

                            <option value="Physics">Physics</option>

                            <option value="Chemistry">Chemistry</option>

                            <option value="Biology">Biology</option>

                            <option value="English">English</option>

                            <option value="Computer Science">
                              Computer Science
                            </option>
                          </select>
                        </div>

                        {/* Teaching Mode */}
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
                            defaultValue={item.teachingMode}
                            className="w-full px-4 py-3 text-sm sm:text-base bg-gray-50 border border-gray-200 rounded-xl outline-none"
                            required
                          >
                            <option value="Online">Online</option>

                            <option value="Offline">Offline</option>

                            <option value="Both">Both</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    {/* Schedule */}
                    <div className="space-y-6">
                      <div className="flex items-center gap-3 border-b border-gray-100 pb-4">
                        <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
                          <FaCalendarAlt className="text-xl" />
                        </div>

                        <h3 className="text-lg sm:text-xl font-bold text-gray-800">
                          Schedule & Availability
                        </h3>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 lg:gap-8">
                        <input
                          type="text"
                          name="availableDays"
                          defaultValue={item.availableDays}
                          placeholder="Available Days"
                          className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl"
                          required
                        />

                        <input
                          type="text"
                          name="timeSlot"
                          defaultValue={item.timeSlot}
                          placeholder="Time Slot"
                          className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl"
                          required
                        />

                        <input
                          type="date"
                          name="sessionStartDate"
                          defaultValue={item.sessionStartDate}
                          className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl"
                          required
                        />

                        <input
                          type="number"
                          name="totalSlot"
                          defaultValue={item.totalSlot}
                          placeholder="Total Slots"
                          className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl"
                          required
                        />
                      </div>
                    </div>

                    {/* Additional Details */}
                    <div className="space-y-6">
                      <div className="flex items-center gap-3 border-b border-gray-100 pb-4">
                        <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600">
                          <FaInfoCircle className="text-xl" />
                        </div>

                        <h3 className="text-lg sm:text-xl font-bold text-gray-800">
                          Additional Details
                        </h3>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 lg:gap-8">
                        <input
                          type="number"
                          name="hourlyFee"
                          defaultValue={item.hourlyFee}
                          placeholder="Hourly Fee"
                          className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl"
                          required
                        />

                        <input
                          type="text"
                          name="location"
                          defaultValue={item.location}
                          placeholder="Location"
                          className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl"
                          required
                        />

                        <textarea
                          name="institutionExperience"
                          defaultValue={item.institutionExperience}
                          rows={4}
                          placeholder="Institution & Experience"
                          className="w-full md:col-span-2 px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl"
                          required
                        ></textarea>
                      </div>
                    </div>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 pt-8">
                      <Button
                        slot="close"
                        variant="tertiary"
                        className="w-full sm:flex-1 py-4 text-gray-600 font-semibold border border-gray-300 rounded-2xl"
                      >
                        Cancel
                      </Button>

                      {/* Submit Button */}
                      <button
                        type="submit"
                        className="w-full sm:flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-teal-500 text-white font-bold py-4 px-8 rounded-2xl"
                      >
                        <FaCheckCircle className="text-xl" />
                        <span>Update Data</span>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
};

export default EditUser;
