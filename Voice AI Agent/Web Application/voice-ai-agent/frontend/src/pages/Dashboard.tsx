import { useEffect, useState } from "react";
import API from "../services/api";

const Dashboard = () => {
  const [stats, setStats] = useState({
    totalCalls: 0,
    callsToday: 0,
    totalAppointments: 0,
    totalLeads: 0,
    hotLeads: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await API.get("/analytics/overview");
        setStats(res.data.data);
      } catch (error) {
        console.error("Failed to load stats");
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  const cards = [
    { title: "Total Calls", value: stats.totalCalls, color: "bg-blue-500" },
    { title: "Calls Today", value: stats.callsToday, color: "bg-green-500" },
    { title: "Appointments", value: stats.totalAppointments, color: "bg-purple-500" },
    { title: "Total Leads", value: stats.totalLeads, color: "bg-yellow-500" },
    { title: "Hot Leads", value: stats.hotLeads, color: "bg-red-500" },
  ];

  if (loading) {
    return <div className="text-center mt-20">Loading dashboard...</div>;
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Dashboard Overview</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
        {cards.map((card) => (
          <div
            key={card.title}
            className="bg-white rounded-xl shadow p-5 border-l-4"
            style={{ borderColor: card.color.replace("bg-", "") }}
          >
            <p className="text-sm text-gray-500">{card.title}</p>
            <p className="text-3xl font-bold mt-2">{card.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;