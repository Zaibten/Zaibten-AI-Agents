import { useEffect, useState } from "react";
import API from "../services/api";

interface Appointment {
  _id: string;
  fullName: string;
  phoneNumber: string;
  email?: string;
  date: string;
  time: string;
  reason?: string;
  status: string;
}

const Appointments = () => {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const res = await API.get("/appointments");
        setAppointments(res.data.appointments);
      } catch (error) {
        console.error("Failed to load appointments");
      } finally {
        setLoading(false);
      }
    };

    fetchAppointments();
  }, []);

  const updateStatus = async (id: string, status: string) => {
    try {
      await API.patch(`/appointments/${id}`, { status });
      setAppointments((prev) =>
        prev.map((item) => (item._id === id ? { ...item, status } : item))
      );
    } catch (error) {
      alert("Failed to update status");
    }
  };

  if (loading) return <div className="text-center mt-20">Loading appointments...</div>;

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Appointments</h1>
        <span className="text-gray-500">{appointments.length} total</span>
      </div>

      {appointments.length === 0 ? (
        <div className="bg-white rounded-xl shadow p-10 text-center text-gray-500">
          No appointments yet.
        </div>
      ) : (
        <div className="bg-white rounded-xl shadow overflow-hidden">
          <table className="w-full text-left">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="px-6 py-3 text-sm font-medium text-gray-500">Name</th>
                <th className="px-6 py-3 text-sm font-medium text-gray-500">Phone</th>
                <th className="px-6 py-3 text-sm font-medium text-gray-500">Date</th>
                <th className="px-6 py-3 text-sm font-medium text-gray-500">Time</th>
                <th className="px-6 py-3 text-sm font-medium text-gray-500">Reason</th>
                <th className="px-6 py-3 text-sm font-medium text-gray-500">Status</th>
                <th className="px-6 py-3 text-sm font-medium text-gray-500">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {appointments.map((item) => (
                <tr key={item._id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium">{item.fullName}</td>
                  <td className="px-6 py-4">{item.phoneNumber}</td>
                  <td className="px-6 py-4">
                    {new Date(item.date).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4">{item.time}</td>
                  <td className="px-6 py-4">{item.reason || "-"}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`px-2 py-1 rounded text-xs font-medium capitalize ${
                        item.status === "confirmed"
                          ? "bg-green-100 text-green-700"
                          : item.status === "cancelled"
                          ? "bg-red-100 text-red-700"
                          : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {item.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 space-x-2">
                    {item.status !== "completed" && (
                      <button
                        onClick={() => updateStatus(item._id, "completed")}
                        className="text-sm text-green-600 hover:underline"
                      >
                        Complete
                      </button>
                    )}
                    {item.status !== "cancelled" && (
                      <button
                        onClick={() => updateStatus(item._id, "cancelled")}
                        className="text-sm text-red-600 hover:underline"
                      >
                        Cancel
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Appointments;