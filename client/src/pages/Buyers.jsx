import Navbar from "./Navbar";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "./Foot";


import axios from "axios";
import { use } from "react";

function Buyer(){
    const[buyer , setBuyers]= useState([]);
    useEffect(() =>{
        fetchBuyer();
    },[] );

    const fetchBuyer = async() =>{
       try{
        const response = await axios.get('http://localhost:5000/api/buyer/buy');
        setBuyers(response.data.buyer || []);
       }catch(e){
        console.error("error in fetching",e);
        setBuyers(response.data.buyer || []);

       }
    }
    const navigate = useNavigate();

    const handleChat = () => {
      navigate(`/Message/${"67f37eb2d59480e8e29383fb"}`);
    };


   return(
    <>
    <Navbar/>
    <div className="bg-yellow-100 p-6 rounded-xl shadow-md">
            <h2 className="text-2xl font-bold text-green-800 mb-4">Best Buyers</h2>
            {buyer.length > 0 ? (
              <ul className="space-y-3">
                {buyer.map((buyer) => (
                <li key={buyer._id} className="bg-white p-3 rounded-lg shadow-md flex justify-between items-center">
                <div>
                  <span className="font-semibold block">{buyer.name}</span>
                  <span className="font-semibold block">{buyer.email}</span>
                </div>
                <a
                  href={`mailto:${buyer.email}`}
                  className="chat-btn text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-md text-sm font-semibold"
                >
                  Contact
                </a>
              </li>
              
               
                ))}
              </ul>
            ) : (
              <p className="text-gray-600">No buyers data available.</p>
            )}
             
          </div>
          <Footer/>
    </>
   );
}

export default Buyer;
// import Navbar from "./Navbar";
// import { useState, useEffect ,use} from "react";
// import axios from "axios";
// import ChatBox from "./Chatbox"; // Make sure this exists

// function Buyer() {
//   const [buyers, setBuyers] = useState([]);
//   const [selectedBuyer, setSelectedBuyer] = useState(null);
//   const currentUserId = localStorage.getItem("userId"); // Farmer's ID

//   useEffect(() => {
//     fetchBuyer();
//   }, []);

//   const fetchBuyer = async () => {
//     try {
//       const response = await axios.get("http://localhost:5000/api/buyer/buy");
//       setBuyers(response.data.buyer || []);
//     } catch (e) {
//       console.error("Error in fetching buyers", e);
//       setBuyers([]);
//     }
//   };

//   return (
//     <>
//       <Navbar />
//       <div className="bg-yellow-100 min-h-screen p-6 rounded-xl shadow-md">
//         <h2 className="text-3xl font-bold text-green-800 mb-6 text-center">Best Buyers</h2>
//         {buyers.length > 0 ? (
//           <ul className="space-y-4">
//             {buyers.map((buyer) => (
//               <li
//                 key={buyer._id}
//                 className="bg-white p-4 rounded-lg shadow-md cursor-pointer hover:bg-gray-100"
//                 onClick={() => setSelectedBuyer(buyer)}
//               >
//                 <span className="font-semibold text-lg">{buyer.name}</span><br />
//                 <span className="text-gray-700">{buyer.email}</span>
//               </li>
//             ))}
//           </ul>
//         ) : (
//           <p className="text-gray-600 text-center">No buyers data available.</p>
//         )}

//         {selectedBuyer && (
//           <div className="mt-10">
//             <ChatBox currentUserId={currentUserId} selectedUser={selectedBuyer} />
//           </div>
//         )}
//       </div>
//     </>
//   );
// }

// export default Buyer;
