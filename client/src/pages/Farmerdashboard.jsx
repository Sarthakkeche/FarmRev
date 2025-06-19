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
