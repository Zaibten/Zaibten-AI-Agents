import { useEffect, useState } from "react";
import API from "../services/api";

interface PhoneNumber {
  _id: string;
  vapiPhoneNumberId: string;
  number: string;
  name: string;
  isActive: boolean;
  createdAt: string;
}

const PhoneNumbers = () => {
  const [phoneNumbers, setPhoneNumbers] = useState<PhoneNumber[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);

  const [formData, setFormData] = useState({
    vapiPhoneNumberId: "",
    number: "",
    name: "",
  });

  const fetchPhoneNumbers = async () => {
    try {
      const res = await API.get("/phone-numbers");
      setPhoneNumbers(res.data.phoneNumbers);
    } catch (error) {
      console.error("Failed to load phone numbers");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPhoneNumbers();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await API.post("/phone-numbers", formData);
      setFormData({ vapiPhoneNumberId: "", number: "", name: "" });
      setShowForm(false);
      fetchPhoneNumbers();
    } catch (error: any) {
      alert(error.response?.data?.message || "Failed to add phone number");
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to unlink this number?")) return;

    try {
      await API.delete(`/phone-numbers/${id}`);
      fetchPhoneNumbers();
    } catch (error) {
      alert("Failed to delete");
    }
  };

  if (loading) return <div className="text-center mt-20">Loading...</div>;

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Phone Numbers</h1>
        <button
          onClick={() => setShowForm(!showForm)}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          {showForm ? "Cancel" : "+ Link Number"}
        </button>
      </div>

      {/* Add Form */}
      {showForm && (
        <div className="bg-white rounded-xl shadow p-6 mb-6">
          <h2 className="text-lg font-semibold mb-4">Link Vapi Phone Number</h2>
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <input
              type="text"
              placeholder="Vapi Phone Number ID (pn_xxxxx)"
              required
              value={formData.vapiPhoneNumberId}
              onChange={(e) =>
                setFormData({ ...formData, vapiPhoneNumberId: e.target.value })
              }
              className="border rounded-lg px-3 py-2"
            />
            <input
              type="text"
              placeholder="Phone Number (+14155552671)"
              required
              value={formData.number}
              onChange={(e) => setFormData({ ...formData, number: e.target.value })}
              className="border rounded-lg px-3 py-2"
            />
            <input
              type="text"
              placeholder="Name (e.g. Main Clinic Line)"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="border rounded-lg px-3 py-2"
            />
            <button
              type="submit"
              className="md:col-span-3 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700"
            >
              Link Phone Number
            </button>
          </form>
        </div>
      )}

      {/* List */}
      {phoneNumbers.length === 0 ? (
        <div className="bg-white rounded-xl shadow p-10 text-center text-gray-500">
          No phone numbers linked yet. Link your Vapi number to start receiving calls.
        </div>
      ) : (
        <div className="bg-white rounded-xl shadow overflow-hidden">
          <table className="w-full text-left">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="px-6 py-3 text-sm font-medium text-gray-500">Name</th>
                <th className="px-6 py-3 text-sm font-medium text-gray-500">Number</th>
                <th className="px-6 py-3 text-sm font-medium text-gray-500">Vapi ID</th>
                <th className="px-6 py-3 text-sm font-medium text-gray-500">Status</th>
                <th className="px-6 py-3 text-sm font-medium text-gray-500">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {phoneNumbers.map((item) => (
                <tr key={item._id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium">{item.name}</td>
                  <td className="px-6 py-4">{item.number}</td>
                  <td className="px-6 py-4 text-sm text-gray-500">{item.vapiPhoneNumberId}</td>
                  <td className="px-6 py-4">
                    <span className="px-2 py-1 rounded text-xs bg-green-100 text-green-700">
                      Active
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <button
                      onClick={() => handleDelete(item._id)}
                      className="text-red-600 hover:underline text-sm"
                    >
                      Unlink
                    </button>
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

export default PhoneNumbers;