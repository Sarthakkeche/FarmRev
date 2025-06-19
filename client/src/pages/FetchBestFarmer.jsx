import Navbarbuy from "./Navbarbuy";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Footer from "./Foot";



function FetchBestFarmer(){

    const [farmers, setFarmers] = useState([]);

    useEffect(() => {
      
      fetchBestFarmers();
    }, []);
    const navigate = useNavigate();
    
  
    
    const fetchBestFarmers = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/farmer/top");
        setFarmers(response.data.farmers || []);
      } catch (error) {
        console.error("Error fetching farmers:", error);
        setFarmers(response.data.farmers ||[]); // ensure fallback
      }
    };
    
  
    return(
        <>
        <Navbarbuy />
        <div className="">
      <div className="min-h-screen bg-blue-50 py-10 px-4 md:px-20">
  <h1 className="text-3xl md:text-4xl font-bold text-center text-blue-800 mb-10 animate-pulse">
    Buyer Dashboard
  </h1>

 

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
<Footer/>
        </>
    )
}

export default FetchBestFarmer;