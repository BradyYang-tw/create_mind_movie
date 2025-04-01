import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3000/login", {
        username,
        password,
      });
      localStorage.setItem("token", res.data.token);
      navigate("/dashboard");
    } catch (err) {
      setError(err.response?.data?.message || "登入失敗");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-4 text-center">登入</h2>
        {error && <p className="text-red-500 text-center">{error}</p>}
        <form onSubmit={handleLogin}>
            <label for="account" class="block text-sm/6 font-medium text-gray-900">Account</label>
            <input
                id='account'
                type="text"
                placeholder="帳號"
                className="w-full p-2 border rounded mb-2 text-base text-gray-900"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <label for="password" class="block text-sm/6 font-medium text-gray-900">Password</label>
            <input
                id='password'
                type="password"
                placeholder="密碼"
                className="w-full p-2 border rounded mb-2 text-base text-gray-900"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
          <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">
            登入
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
