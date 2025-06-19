import React from "react";
import { motion } from "framer-motion";
import Footer from "./Foot";

const About = () => {
  return (
    <>
    <div className="min-h-screen bg-green-50 px-6 py-12 md:px-20">
      <motion.h1
        className="text-4xl font-bold text-center text-green-800 mb-10"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        About FarmRev
      </motion.h1>

      <motion.div
        className="max-w-4xl mx-auto text-lg text-gray-800 space-y-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <p>
          <strong>FarmRev</strong> is a platform dedicated to revolutionizing the agricultural ecosystem by connecting farmers and buyers across India. We aim to empower our farmers by providing them with a digital space to showcase their produce, gain visibility, and access fair market rates.
        </p>

        <p>
          Our mission is to bridge the gap between traditional farming practices and modern technology, creating a transparent and efficient marketplace. Through FarmRev, farmers can list their crops, track rates, and communicate directly with interested buyers—eliminating middlemen and ensuring better profits.
        </p>

        <p>
          We believe in inclusivity, sustainability, and innovation. Whether you're a seasoned farmer, a budding agri-entrepreneur, or a conscious consumer, FarmRev provides the tools and insights you need to thrive in the evolving agricultural economy.
        </p>

        <p>
          Join us in transforming Indian agriculture—one crop at a time.
        </p>
      </motion.div>
      
    </div><Footer/>
    </>
  );
};

export default About;
