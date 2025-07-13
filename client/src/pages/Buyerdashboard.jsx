import Navbarbuy from "./Navbarbuy";
import { Link } from "react-router-dom";
import Footer from "./Foot";

import cropsImg from "../assets/crops.jpg";
import rateImg from "../assets/rate.webp";
import buyer from "../assets/buyer.avif";
import sceme from "../assets/sceme.jpg";

function BuyerDashboard() {
  
 
  return (
    <>
      <Navbarbuy />
      <div className="min-h-screen bg-green-50 py-10 px-4 md:px-20">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-green-800 mb-10 animate-pulse">
          Buyer Dashboard
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <Link
            to="/FetchCrops"
            className="bg-amber-100 hover:bg-amber-200 transition rounded-xl shadow-md flex items-center justify-center h-40 text-xl font-semibold text-green-800"
          >
              <img src={cropsImg} alt="Add Crop" className="h-41 w-full object-cover" />
                <div className="flex-1 flex items-center justify-center text-xl font-semibold text-green-800">
                  Aviable crops
                </div>
          </Link>

          

          <Link to="/FetchBestFarmer">
          <div className="bg-amber-100 hover:bg-amber-200 transition rounded-xl shadow-md flex items-center justify-center h-40 text-xl font-semibold text-green-800">
            Top Framers
          </div></Link>
      
         <Link to="/Rate">
         <div className="bg-amber-100 hover:bg-amber-200 transition rounded-xl shadow-md flex items-center justify-center h-40 text-xl font-semibold text-green-800">
            Rate Analysis
          </div></Link>

          <div className="bg-amber-100 hover:bg-amber-200 transition rounded-xl shadow-md flex items-center justify-center h-40 text-xl font-semibold text-green-800">
            Requirement
          </div>
        </div>
       
      </div>
      <Footer/>
</>
  );
}

export default BuyerDashboard;
