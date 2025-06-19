import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Footer from "./Foot";


const RateAnalysis = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          "https://api.data.gov.in/resource/9ef84268-d588-465a-a308-a864a43d0070?api-key=579b464db66ec23bdd000001cdd3946e44ce4aad7209ff7b23ac571b&format=json&limit=20"
        );
        const json = await res.json();
        setData(json.records);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch data.");
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-blue-50 py-10 px-4 md:px-20">
      <motion.h1
        className="text-4xl font-bold text-center text-blue-800 mb-10"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        Rate Analysis - Crop Market Prices
      </motion.h1>

      {loading ? (
        <p className="text-center text-gray-600 animate-pulse">Loading data...</p>
      ) : error ? (
        <p className="text-center text-red-600">{error}</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.map((item, index) => (
            <motion.div
              key={index}
              className="rounded-xl shadow-lg bg-white p-4 space-y-2"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <h2 className="text-xl font-bold text-green-700">
                {item.commodity}
              </h2>
              <p>
                <span className="font-semibold">Market:</span> {item.market}
              </p>
              <p>
                <span className="font-semibold">State:</span> {item.state}
              </p>
              <p>
                <span className="font-semibold">Modal Price:</span> ₹{item.modal_price}
              </p>
              <p className="text-sm text-gray-600">
                Date: {item.arrival_date}
              </p>
            </motion.div>
          ))}
        </div>
      )}
       <Footer/>
    </div>
  );
};

export default RateAnalysis;
