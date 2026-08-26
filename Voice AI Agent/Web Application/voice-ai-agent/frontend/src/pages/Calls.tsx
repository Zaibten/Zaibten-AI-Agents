import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import API from "../services/api";

interface Call {
  _id: string;
  phoneNumber: string;
  direction: string;
  status: string;
  duration: number;
  summary?: string;
  leadScore?: string;
  createdAt: string;
}

const Calls = () => {
  const [calls, setCalls] = useState<Call[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCalls = async () => {
      try {
        const res = await API.get("/calls");
        setCalls(res.data.calls);
      } catch (error) {
        console.error("Failed to load calls");
      } finally {
        setLoading(false);
      }
    };

    fetchCalls();
  }, []);

  const formatDuration = (seconds: number) => {
    if (!seconds) return "0s";
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}m ${secs}s`;
  };

  if (loading) {
    return <div className="text-center mt-20">Loading calls...</div>;
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Call History</h1>
        <span className="text-gray-500">{calls.length} total calls</span>
      </div>

      {calls.length === 0 ? (
        <div className="bg-white rounded-xl shadow p-10 text-center text-gray-500">
          No calls yet. Calls will appear here after your AI agent receives them.
        </div>
      ) : (
        <div className="bg-white rounded-xl shadow overflow-hidden">
          <table className="w-full text-left">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="px-6 py-3 text-sm font-medium text-gray-500">Phone</th>
                <th className="px-6 py-3 text-sm font-medium text-gray-500">Direction</th>
                <th className="px-6 py-3 text-sm font-medium text-gray-500">Duration</th>
                <th className="px-6 py-3 text-sm font-medium text-gray-500">Lead Score</th>
                <th className="px-6 py-3 text-sm font-medium text-gray-500">Date</th>
                <th className="px-6 py-3 text-sm font-medium text-gray-500">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {calls.map((call) => (
                <tr key={call._id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium">{call.phoneNumber}</td>
                  <td className="px-6 py-4 capitalize">{call.direction}</td>
                  <td className="px-6 py-4">{formatDuration(call.duration)}</td>
                  <td className="px-6 py-4">
                    {call.leadScore ? (
                      <span
                        className={`px-2 py-1 rounded text-xs font-medium ${
                          call.leadScore === "hot"
                            ? "bg-red-100 text-red-700"
                            : call.leadScore === "warm"
                            ? "bg-yellow-100 text-yellow-700"
                            : "bg-gray-100 text-gray-700"
                        }`}
                      >
                        {call.leadScore}
                      </span>
                    ) : (
                      "-"
                    )}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    {new Date(call.createdAt).toLocaleString()}
                  </td>
                  <td className="px-6 py-4">
                    <Link
                      to={`/calls/${call._id}`}
                      className="text-blue-600 hover:underline text-sm"
                    >
                      View
                    </Link>
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

export default Calls;