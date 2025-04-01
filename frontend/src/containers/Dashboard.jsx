import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Dashboard = () => {
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return navigate("/");

    axios
      .get("http://localhost:3000/protected", {
        headers: { Authorization: token },
      })
      .then((res) => setMessage(res.data.message))
      .catch(() => navigate("/"));
  }, [navigate]);

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">歡迎來到儀表板</h2>
        <p>{message}</p>
        <button
          className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
          onClick={() => {
            localStorage.removeItem("token");
            navigate("/");
          }}
        >
          登出
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
