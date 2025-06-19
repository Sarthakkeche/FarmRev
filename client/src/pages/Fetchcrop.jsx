import Navbarbuy from "./Navbarbuy";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Footer from "./Foot";


function FetchCrops(){

    const [crops, setCrops] = useState([]);
    useEffect(() => {
        fetchCrops();
       
      }, []);
      const navigate = useNavigate();

      const fetchCrops = async () => {
        try {
          const token = localStorage.getItem("token");
          const response = await axios.get("http://localhost:5000/api/crop/allcrops", {
            headers: {
              Authorization: token,
            },
          });
          setCrops(response.data.crops);
        } catch (error) {
          console.error("Error fetching crops:", error);
        }
      };
    
   return(
     <>
     <Navbarbuy/>
       <div className="">
    {/* Available Crops Section */}
    <div className="bg-yellow-100 p-6 rounded-xl shadow-md">
      <h2 className="text-2xl font-bold text-green-800 mb-4">Available Crops</h2>
      {crops.length > 0 ? (
        <ul className="space-y-3">
          {crops.map((crop) => (
            <li key={crop._id} className="bg-white p-3 rounded-lg shadow-md flex justify-between items-center">
              <div>
                <span className="font-semibold">{crop.name}</span> - {crop.quantity} kg <br />
                <span className="text-sm text-gray-600">
                  Farmer: {crop.userId?.name || "Unknown"}
                </span>
              </div>
              <a
    href={`mailto:${crop.userId?.email}?subject=Crop Booking Request&body=Hi ${crop.userId?.name},%0DI am interested in booking your crop: ${crop.name} (${crop.quantity} kg). Please contact me back.`}
    className="text-white bg-green-500 hover:bg-green-600 px-4 py-2 rounded-md text-sm font-semibold"
  >
    Book Now
  </a>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-600">No crops available.</p>
      )}
    </div>
    
</div>
<Footer/>
    </>
   )
}

export default FetchCrops