import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import Footer from "./Foot";
import cropsImg from "../assets/crops.jpg";
import rateImg from "../assets/rate.webp";
import buyer from "../assets/buyer.avif";
import sceme from "../assets/sceme.jpg";



function FarmerDashboard() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-green-50 py-10 px-4 md:px-20">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-green-800 mb-10 animate-pulse">
          Farmer Dashboard
        </h1>

        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
  <Link to="/addcrop" className="bg-amber-100 hover:bg-amber-200 transition rounded-xl shadow-md h-60 flex flex-col overflow-hidden">
    <img src={cropsImg} alt="Add Crop" className="h-41 w-full object-cover" />
    <div className="flex-1 flex items-center justify-center text-xl font-semibold text-green-800">
      Add Crop
    </div>
  </Link>

  <Link to="/buyerdata" className="bg-amber-100 hover:bg-amber-200 transition rounded-xl shadow-md h-60 flex flex-col overflow-hidden">
<img src={buyer} alt="Add Crop" className="h-41 w-full object-cover" />   
 <div className="flex-1 flex items-center justify-center text-xl font-semibold text-green-800">Explore Buyers</div>
  </Link>

  <Link to="/Rate" className="bg-amber-100 hover:bg-amber-200 transition rounded-xl shadow-md h-60 flex flex-col overflow-hidden">
    <img src={rateImg} alt="Rate Analysis" className="h-41 w-full object-cover" />
    <div className="flex-1 flex items-center justify-center text-xl font-semibold text-green-800">
      Rate Analysis
    </div>
  </Link>

  <Link to="/Rate" className="bg-amber-100 hover:bg-amber-200 transition rounded-xl shadow-md h-60 flex flex-col overflow-hidden">
    <img src={sceme} alt="Rate Analysis" className="h-41 w-full object-cover" />
    <div className="flex-1 flex items-center justify-center text-xl font-semibold text-green-800">
      Best Scemes
    </div>
  </Link>
</div>

       
        
      </div>
      <Footer/>
    </>
  );
}

export default FarmerDashboard;
// import { useEffect, useState } from "react";
// import axios from "axios";
// import Navbar from "./Navbar";
// import ChatBox from "./Chatbox";

// function FarmerDashboard() {
//   const [buyers, setBuyers] = useState([]);
//   const [showBuyers, setShowBuyers] = useState(false);
//   const [selectedBuyer, setSelectedBuyer] = useState(null);

//   const currentUserId = localStorage.getItem("userId");

//   useEffect(() => {
//     const fetchBuyers = async () => {
//       const res = await axios.get("http://localhost:5000/api/users/buyers");
//       setBuyers(res.data);
//     };
//     fetchBuyers();
//   }, []);

//   return (
//     <>
//       <Navbar />
//       <div className="min-h-screen bg-green-50 py-10 px-4 md:px-20">
//         <h1 className="text-3xl md:text-4xl font-bold text-center text-green-800 mb-10 animate-pulse">
//           Farmer Dashboard
//         </h1>

//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-10">
//           <div
//             onClick={() => setShowBuyers(false)}
//             className="bg-amber-100 hover:bg-amber-200 transition rounded-xl shadow-md flex items-center justify-center h-40 text-xl font-semibold text-green-800 cursor-pointer"
//           >
//             Add Crop
//           </div>

//           <div className="bg-amber-100 hover:bg-amber-200 transition rounded-xl shadow-md flex items-center justify-center h-40 text-xl font-semibold text-green-800 cursor-pointer">
//             Rate Analysis
//           </div>

//           <div
//             onClick={() => setShowBuyers(!showBuyers)}
//             className="bg-amber-100 hover:bg-amber-200 transition rounded-xl shadow-md flex items-center justify-center h-40 text-xl font-semibold text-green-800 cursor-pointer"
//           >
//             {showBuyers ? "Close Buyers List" : "Buyers"}
//           </div>

//           <div className="bg-amber-100 hover:bg-amber-200 transition rounded-xl shadow-md flex items-center justify-center h-40 text-xl font-semibold text-green-800 cursor-pointer">
//             Requirement
//           </div>
//         </div>

//         {showBuyers && (
//           <div className="bg-white p-6 rounded shadow-md">
//             <h2 className="text-xl font-semibold mb-4 text-green-800">Available Buyers</h2>
//             <ul className="space-y-2">
//               {buyers.map((buyer) => (
//                 <li key={buyer._id}>
//                   <button
//                     onClick={() => setSelectedBuyer(buyer)}
//                     className="text-blue-600 hover:underline"
//                   >
//                     {buyer.name}
//                   </button>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         )}

//         {selectedBuyer && (
//           <div className="mt-8">
//             <ChatBox currentUserId={currentUserId} selectedUser={selectedBuyer} />
//           </div>
//         )}
//       </div>
//     </>
//   );
// }

// export default FarmerDashboard;
