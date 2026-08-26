import { useEffect, useState } from "react";
import API from "../services/api";

interface Lead {
  _id: string;
  fullName?: string;
  phoneNumber: string;
  email?: string;
  score: string;
  notes?: string;
  createdAt: string;
}

const Leads = () => {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLeads = async () => {
      try {
        const res = await API.get("/leads");
        setLeads(res.data.leads);
      } catch (error) {
        console.error("Failed to load leads");
      } finally {
        setLoading(false);
      }
    };

    fetchLeads();
  }, []);

  if (loading) return <div className="text-center mt-20">Loading leads...</div>;

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Leads</h1>
        <span className="text-gray-500">{leads.length} total</span>
      </div>

      {leads.length === 0 ? (
        <div className="bg-white rounded-xl shadow p-10 text-center text-gray-500">
          No leads yet.
        </div>
      ) : (
        <div className="bg-white rounded-xl shadow overflow-hidden">
          <table className="w-full text-left">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="px-6 py-3 text-sm font-medium text-gray-500">Name</th>
                <th className="px-6 py-3 text-sm font-medium text-gray-500">Phone</th>
                <th className="px-6 py-3 text-sm font-medium text-gray-500">Email</th>
                <th className="px-6 py-3 text-sm font-medium text-gray-500">Score</th>
                <th className="px-6 py-3 text-sm font-medium text-gray-500">Notes</th>
                <th className="px-6 py-3 text-sm font-medium text-gray-500">Date</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {leads.map((lead) => (
                <tr key={lead._id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium">{lead.fullName || "-"}</td>
                  <td className="px-6 py-4">{lead.phoneNumber}</td>
                  <td className="px-6 py-4">{lead.email || "-"}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`px-2 py-1 rounded text-xs font-medium capitalize ${
                        lead.score === "hot"
                          ? "bg-red-100 text-red-700"
                          : lead.score === "warm"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-gray-100 text-gray-700"
                      }`}
                    >
                      {lead.score}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600 max-w-xs truncate">
                    {lead.notes || "-"}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    {new Date(lead.createdAt).toLocaleDateString()}
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

export default Leads;