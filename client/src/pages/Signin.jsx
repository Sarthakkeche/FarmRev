// import { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// function Signin() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const response = await axios.post("http://localhost:5000/api/auth/signin", { email, password });
//     if (response.data.success) {
//       localStorage.setItem("token", response.data.token);
//       if (response.data.role === "Farmer") navigate("/farmer");
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
//       <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
//       <button type="submit">Sign In</button>
//     </form>
//   );
// }

// export default Signin;
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // const BASE_URL =
  // import.meta.env.MODE === "development"
  //   ? "http://localhost:5000"
  //   : "";
  const handleSubmit = async (e) => {
    e.preventDefault();



    const response = await axios.post("https://farmrev-backend.onrender.com/api/auth/signin", { email, password });

    if (response.data.success) {
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("role", response.data.role);

      if (response.data.role === "Farmer") navigate("/farmer");
      else if (response.data.role === "Buyer") navigate("/buyer");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-green-200 to-blue-300">
      <div className="bg-white shadow-lg rounded-xl p-8 w-96">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">Welcome Back</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} className="border px-4 py-2 rounded-md focus:ring-2 focus:ring-blue-400" required />
          <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} className="border px-4 py-2 rounded-md focus:ring-2 focus:ring-blue-400" required />
          <button type="submit" className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition">Sign In</button>
        </form>
        <p className="text-center mt-4 text-gray-600">
          New here? <button onClick={() => navigate("/signup")} className="text-blue-600 hover:underline">Create an Account</button>
        </p>
      </div>
    </div>
  );
}

export default Signin;
