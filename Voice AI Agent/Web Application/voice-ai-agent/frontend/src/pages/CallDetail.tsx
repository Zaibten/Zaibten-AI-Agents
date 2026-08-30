import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import API from "../services/api";

const CallDetail = () => {
  const { id } = useParams();
  const [call, setCall] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCall = async () => {
      try {
        const res = await API.get(`/calls/${id}`);
        setCall(res.data.call);
      } catch (error) {
        console.error("Failed to load call");
      } finally {
        setLoading(false);
      }
    };

    fetchCall();
  }, [id]);

  if (loading) return <div className="text-center mt-20">Loading...</div>;
  if (!call) return <div className="text-center mt-20">Call not found</div>;

  return (
    <div>
      <Link to="/calls" className="text-blue-600 hover:underline text-sm mb-4 inline-block">
        ← Back to Calls
      </Link>

      <h1 className="text-2xl font-bold mb-6">Call Details</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Info Card */}
        <div className="bg-white rounded-xl shadow p-6 space-y-4">
          <div>
            <p className="text-sm text-gray-500">Phone Number</p>
            <p className="font-medium">{call.phoneNumber}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Direction</p>
            <p className="font-medium capitalize">{call.direction}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Duration</p>
            <p className="font-medium">{call.duration || 0} seconds</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Lead Score</p>
            <p className="font-medium capitalize">{call.leadScore || "-"}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Date</p>
            <p className="font-medium">{new Date(call.createdAt).toLocaleString()}</p>
          </div>
        </div>

        {/* Summary + Transcript */}
        <div className="lg:col-span-2 space-y-6">
          {call.summary && (
            <div className="bg-white rounded-xl shadow p-6">
              <h2 className="font-semibold mb-3">AI Summary</h2>
              <p className="text-gray-700">{call.summary}</p>
            </div>
          )}

          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="font-semibold mb-3">Transcript</h2>
            <div className="whitespace-pre-wrap text-gray-700 text-sm leading-relaxed">
              {call.transcript || "No transcript available"}
            </div>
          </div>

      {call.recordingUrl && (
  <div className="bg-white rounded-xl shadow p-6">
    <h2 className="font-semibold mb-3">Call Recording</h2>
    <audio controls className="w-full">
      <source src={call.recordingUrl} type="audio/wav" />
      Your browser does not support the audio element.
    </audio>
    <a
      href={call.recordingUrl}
      target="_blank"
      rel="noreferrer"
      className="text-blue-600 text-sm mt-2 inline-block"
    >
      Download Recording
    </a>
  </div>
)}
        </div>
      </div>
    </div>
  );
};

export default CallDetail;