// import { Link } from "react-router-dom";

// function Home() {
//   return (
//     <div>
//       <h1>Welcome to FarmRev</h1>
//       <p>Connect Farmers and Buyers Seamlessly</p>
//       <Link to="/signup">
//         <button>Sign Up</button>
//       </Link>
//       <Link to="/signin">
//         <button>Sign In</button>
//       </Link>
//     </div>
//   );
// }

// export default Home;
import farmerImage from "../assets/farmer.jpg";
import merchantImage from "../assets/merchant.webp";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Footer from "./Foot";

import {Link } from "react-router-dom";

function Home(){
  const navigate = useNavigate();
  const [role, setRole] = useState("");

  const handleRoleSelection = (selectedRole) => {
    setRole(selectedRole);
    localStorage.setItem("selectedRole", selectedRole); // ✅ Save role in localStorage
    navigate("/signup"); // ✅ Redirect to Signup page
  };
    return(
        <>
       
     <div className="relative min-h-screen bg-cover bg-center bg-green-50" style={{ backgroundImage: "url('/background.jpg')" }}>
     <Link to="/" className="text-green text-2xl font-bold m-5 mt-4">
          FarmRev
        </Link>

      <nav className="absolute top-0 right-0 p-5 flex gap-5 text-black font-semibold">
        <a href="/about" className="hover:underline">About</a>
        <a href="#" className="hover:underline">Help</a>
        <a href="#" className="hover:underline">Contacts</a>
      </nav>

      <div className="flex flex-col items-center justify-center h-screen text-center">
        <h1 className="text-4xl font-bold text-gray-800">E - KRUSHI MARKET</h1>
        <p className="text-lg text-blue-600 mt-2 hover:underline">SELL AND BUY FARM GOODS HERE</p>

        <div className="flex gap-16 mt-10">
          {/* Farmer Card */}
          <div className="flex flex-col items-center cursor-pointer"  onClick={() => handleRoleSelection("Farmer")}>
            <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center shadow-lg overflow-hidden">
            <img src={farmerImage} alt="Farmer" className="w-24 h-24" />

            </div>
            <p className="text-lg font-semibold mt-2">Farmer</p>
          </div>

          {/* Buyer Card */}
          <div className="flex flex-col items-center cursor-pointer"  onClick={() => handleRoleSelection("Buyer")}>
            <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center shadow-lg overflow-hidden">
              <img src={merchantImage} alt="Buyer" className="w-24 h-24" />
            </div>
            <p className="text-lg font-semibold mt-2">Buyer</p>
          </div>
        </div>
      </div>
      
    </div>
    <Footer/></>
    )
}
export default Home;
