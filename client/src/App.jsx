import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import Addcrop from "./pages/Addcrop";
import FarmerDashboard from "./pages/Farmerdashboard";
import BuyerDashboard from "./pages/Buyerdashboard";
import Buyer from "./pages/Buyers";
import Messages from "./pages/Message";
import FetchBestFarmer from "./pages/FetchBestFarmer";
import FetchCrops from "./pages/Fetchcrop";
import Navbarbuy from "./pages/Navbarbuy";
import RateAnalysis from "./pages/Rate";
import About from "./pages/About";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/addcrop" element={<Addcrop/>} />
        <Route path="/farmer" element={<FarmerDashboard />} />
        <Route path="/buyer" element={<BuyerDashboard/>} />
        <Route path="/buyerdata" element={<Buyer/>} />
        <Route path="/messages/:receiverId" element={<Messages />} />
        <Route path="/FetchBestFarmer" element={<FetchBestFarmer/>} />
        <Route path="/FetchCrops" element={<FetchCrops/>} />
        <Route path="/Navbarbuy" element={<Navbarbuy/>} />
        <Route path="/Rate" element={<RateAnalysis/>} />
        <Route path="/about" element={<About/>} />
        


      </Routes>
    </Router>
  );
}

export default App;
