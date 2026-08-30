import { useAuth } from "../context/AuthContext";

const Settings = () => {
  const { user } = useAuth();

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Settings</h1>

      <div className="bg-white rounded-xl shadow p-6 max-w-2xl space-y-6">
        <div>
          <h2 className="text-lg font-semibold mb-4">Account Information</h2>
          <div className="space-y-3">
            <div>
              <p className="text-sm text-gray-500">Name</p>
              <p className="font-medium">{user?.name}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Email</p>
              <p className="font-medium">{user?.email}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Business Name</p>
              <p className="font-medium">{user?.businessName || "-"}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Role</p>
              <p className="font-medium capitalize">{user?.role}</p>
            </div>
          </div>
        </div>

        <hr />

        <div>
          <h2 className="text-lg font-semibold mb-2">Vapi Configuration</h2>
          <p className="text-sm text-gray-500 mb-4">
            Make sure your Vapi Assistant Server URL is set to:
          </p>
          <code className="bg-gray-100 px-3 py-2 rounded text-sm block break-all">
            https://zaibtenvoiceagentserver.vercel.app/api/vapi/webhook
          </code>
        </div>

        <hr />

        <div>
          <h2 className="text-lg font-semibold mb-2">Coming Soon</h2>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>• Google Calendar Integration</li>
            <li>• Outbound Call Campaigns</li>
            <li>• Custom Voice & Prompt Editor</li>
            <li>• Team Members</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Settings;