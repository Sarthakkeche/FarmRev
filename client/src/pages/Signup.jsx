import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const role = localStorage.getItem("selectedRole");
// 
    try {
      const response = await axios.post( "http://localhost:5000/api/auth/signup" || "https://farmrev-backend.onrender.com/api/auth/signup" , {
        name,
        email,
        password,
        role,
      });

      if (response.data && (response.data.success || response.status === 200)) {
        // Save token and role like in Signin
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("role", response.data.role || role);

        alert("Signup successful");

        if (response.data.role === "Farmer" || role === "Farmer") navigate("/farmer");
        else if (response.data.role === "Buyer" || role === "Buyer") navigate("/buyer");
      }
    } catch (error) {
      console.error("Signup failed:", error);
      alert("Signup failed. Please try again.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-green-200 to-blue-300">
      <div className="bg-white shadow-lg rounded-xl p-8 w-96">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">Create an Account</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
            className="border px-4 py-2 rounded-md focus:ring-2 focus:ring-blue-400"
            required
          />
          <input
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            className="border px-4 py-2 rounded-md focus:ring-2 focus:ring-blue-400"
            required
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            className="border px-4 py-2 rounded-md focus:ring-2 focus:ring-blue-400"
            required
          />
          <button
            type="submit"
            className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition"
          >
            Sign Up
          </button>
        </form>
        <p className="text-center mt-4 text-gray-600">
          Already have an account?{" "}
          <button
            onClick={() => navigate("/signin")}
            className="text-blue-600 hover:underline"
          >
            Sign In
          </button>
        </p>
      </div>
    </div>
  );
}

export default Signup;
