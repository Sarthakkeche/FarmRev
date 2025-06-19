


// import { useState, useEffect } from "react";
// import axios from "axios";
// import Navbar from "./Navbar";
// import Footer from "./Foot";


// function Addcrop() {
//   const [crops, setCrops] = useState([]);
//   const [name, setName] = useState("");
//   const [quantity, setQuantity] = useState("");

//   useEffect(() => {
//     fetchCrops();
//   }, []);

//   const fetchCrops = async () => {
//     const token = localStorage.getItem("token");
//     const response = await axios.get("http://localhost:5000/api/crop/mycrops", {
//       headers: { Authorization: token },
//     });
//     setCrops(response.data.crops);
//   };

//   const addCrop = async () => {
//     const token = localStorage.getItem("token");
//     await axios.post(
//       "http://localhost:5000/api/crop/add",
//       { name, quantity },
//       { headers: { Authorization: token } }
//     );
//     fetchCrops();
//     setName("");
//     setQuantity("");
//   };

//   return (
//     <>
//     <Navbar/>
//     <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg mt-10">
//       <h2 className="text-2xl font-bold text-center mb-4">Farmer Dashboard</h2>
//       <div className="flex flex-col space-y-4">
//         <input
//           type="text"
//           placeholder="Crop Name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           className="border p-2 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-green-400"
//         />
//         <input
//           type="number"
//           placeholder="Quantity (kg)"
//           value={quantity}
//           onChange={(e) => setQuantity(e.target.value)}
//           className="border p-2 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-green-400"
//         />
//         <button
//           onClick={addCrop}
//           className="bg-green-500 text-white p-2 rounded-lg hover:bg-green-600 transition"
//         >
//           Add Crop
//         </button>
//       </div>
//       <h3 className="text-xl font-semibold mt-6">My Crops</h3>
//       <ul className="mt-2 space-y-2">
//         {crops.map((crop) => (
//           <li key={crop._id} className="p-3 bg-gray-100 rounded-lg">
//             <span className="font-medium">{crop.name}</span> - {crop.quantity} kg
//           </li>
//         ))}
//       </ul>
     
//     </div>
//     <Footer/>
//     </>
//   );
// }

// export default Addcrop;
import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import Footer from "./Foot";

function Addcrop() {
  const [crops, setCrops] = useState([]);
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");

  useEffect(() => {
    fetchCrops();
  }, []);

  const fetchCrops = async () => {
    const token = localStorage.getItem("token");
    const response = await axios.get("http://localhost:5000/api/crop/mycrops", {
      headers: { Authorization: token },
    });
    setCrops(response.data.crops);
  };

  const addCrop = async () => {
    const token = localStorage.getItem("token");
    await axios.post(
      "http://localhost:5000/api/crop/add",
      { name, quantity },
      { headers: { Authorization: token } }
    );
    fetchCrops();
    setName("");
    setQuantity("");
  };

  const deleteCrop = async (id) => {
    const token = localStorage.getItem("token");
    await axios.delete(`http://localhost:5000/api/crop/delete/${id}`, {
      headers: { Authorization: token },
    });
    fetchCrops();
  };

  return (
    <>
      <Navbar />
      <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg mt-10">
        <h2 className="text-2xl font-bold text-center mb-4">Farmer Dashboard</h2>
        <div className="flex flex-col space-y-4">
          <input
            type="text"
            placeholder="Crop Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border p-2 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <input
            type="number"
            placeholder="Quantity (kg)"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            className="border p-2 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <button
            onClick={addCrop}
            className="bg-green-500 text-white p-2 rounded-lg hover:bg-green-600 transition"
          >
            Add Crop
          </button>
        </div>

        <h3 className="text-xl font-semibold mt-6">My Crops</h3>
        <ul className="mt-2 space-y-2">
          {crops.map((crop) => (
            <li
              key={crop._id}
              className="p-3 bg-gray-100 rounded-lg flex justify-between items-center"
            >
              <span>
                <strong>{crop.name}</strong> - {crop.quantity} kg
              </span>
              <button
                onClick={() => deleteCrop(crop._id)}
                className="text-red-600 hover:text-red-800 font-medium"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
      <Footer />
    </>
  );
}

export default Addcrop;
