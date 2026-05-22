"use client";
import { useRouter } from "next/navigation";
import { FaTrash } from "react-icons/fa";
import EditUser from "./EditUser";

const Table = ({ data }) => {
  const router = useRouter();

  const handleDeleteData = async (userId) => {
    const res = await fetch(`http://localhost:8000/tutors/user/${userId}`, {
      method: "DELETE",
    });
    const data = await res.json();
    if (data) {
      router.refresh();
    }
  };

  return (
    <div>
      <div className="min-h-screen bg-gray-50/50 py-8 px-3 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Desktop Table */}
          <div className="block bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-100 text-gray-600 text-sm uppercase tracking-wider">
                  <th className="py-5 px-6 font-semibold">Tutor Name</th>
                  <th className="py-5 px-6 font-semibold">Subject</th>
                  <th className="py-5 px-6 font-semibold">Hourly Fee</th>
                  <th className="py-5 px-6 font-semibold">Mode</th>
                  <th className="py-5 px-6 font-semibold text-right">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {data.map((item) => (
                  <tr
                    key={item._id}
                    className="hover:bg-gray-50 transition-colors group"
                  >
                    <td className="py-5 px-6 font-bold text-gray-900">
                      {item.tutorName}
                    </td>
                    <td className="py-5 px-6 text-gray-700">{item.subject}</td>
                    <td className="py-5 px-6 text-gray-700 font-medium">
                      {item.hourlyFee}
                    </td>
                    <td className="py-5 px-6 text-gray-700">
                      {item.teachingMode}
                    </td>
                    <td className="py-5 px-6">
                      <div className="flex justify-end gap-3 opacity-100 transition-opacity">
                        {/* edit button */}
                        <EditUser item={item}></EditUser>
                        {/* delete button */}
                        <button
                          onClick={() => handleDeleteData(item.userId)}
                          className="w-10 h-10 rounded-lg bg-red-50 text-red-600 flex items-center justify-center hover:bg-red-600 hover:text-white transition-colors"
                          title="Delete"
                        >
                          <FaTrash />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
