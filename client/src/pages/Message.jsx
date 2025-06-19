
import Navbar from "./Navbar";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


function BuyerDashboard() {
  const [crops, setCrops] = useState([]);
  const [farmers, setFarmers] = useState([]);

  useEffect(() => {
    fetchCrops();
    fetchBestFarmers();
  }, []);
  const navigate = useNavigate();
  const handleChat = () => {
    navigate(`/Message/${farmers._id}`);
  };

  const fetchCrops = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get("https://farmrev-backend.onrender.com/api/crop/allcrops", {
        headers: {
          Authorization: token,
        },
      });
      setCrops(response.data.crops);
    } catch (error) {
      console.error("Error fetching crops:", error);
    }
  };

  const fetchBestFarmers = async () => {
    try {
      const response = await axios.get("https://farmrev-backend.onrender.com/api/farmer/top");
      setFarmers(response.data.farmers || []);
    } catch (error) {
      console.error("Error fetching farmers:", error);
      setFarmers(response.data.farmers ||[]); // ensure fallback
    }
  };
  

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-blue-50 py-10 px-4 md:px-20">
  <h1 className="text-3xl md:text-4xl font-bold text-center text-blue-800 mb-10 animate-pulse">
    Buyer Dashboard
  </h1>

  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
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

    {/* Best Farmers Section */}
    <div className="bg-yellow-100 p-6 rounded-xl shadow-md">
      <h2 className="text-2xl font-bold text-green-800 mb-4">Best Farmers</h2>
      {farmers.length > 0 ? (
        <ul className="space-y-3">
          {farmers.map((farmer) => (
            <li key={farmer._id} className="bg-white p-3 rounded-lg shadow-md flex justify-between items-center">
              <div>
                <span className="font-semibold">{farmer.name}</span> <br />
                <span className="text-sm text-gray-600">
                  Total Crops: {farmer.totalCrops}
                </span>
              </div>
              <a
                href={`mailto:${farmer.email}`}
                className="text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-md text-sm font-semibold"
              >
                Contact
              </a>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-600">No farmer data available.</p>
      )}
    </div>
  </div>
</div>
</>
  );
}

export default BuyerDashboard;

const res = await fetch(
  "https://api.data.gov.in/resource/9ef84268-d588-465a-a308-a864a43d0070?api-key=579b464db66ec23bdd000001cdd3946e44ce4aad7209ff7b23ac571b&format=json&limit=20"
);