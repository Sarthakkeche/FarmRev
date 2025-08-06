// import React, { useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import Footer from "./Foot";


// const RateAnalysis = () => {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const res = await fetch(
//           "https://api.data.gov.in/resource/9ef84268-d588-465a-a308-a864a43d0070?api-key=579b464db66ec23bdd000001cdd3946e44ce4aad7209ff7b23ac571b&format=json&limit=20"
//         );
//         const json = await res.json();
//         setData(json.records);
//         setLoading(false);
//       } catch (err) {
//         setError("Failed to fetch data.");
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div className="min-h-screen bg-blue-50 py-10 px-4 md:px-20">
//       <motion.h1
//         className="text-4xl font-bold text-center text-blue-800 mb-10"
//         initial={{ y: -20, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ duration: 0.6 }}
//       >
//         Rate Analysis - Crop Market Prices
//       </motion.h1>

//       {loading ? (
//         <p className="text-center text-gray-600 animate-pulse">Loading data...</p>
//       ) : error ? (
//         <p className="text-center text-red-600">{error}</p>
//       ) : (
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {data.map((item, index) => (
//             <motion.div
//               key={index}
//               className="rounded-xl shadow-lg bg-white p-4 space-y-2"
//               initial={{ scale: 0.9, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               transition={{ duration: 0.4, delay: index * 0.05 }}
//             >
//               <h2 className="text-xl font-bold text-green-700">
//                 {item.commodity}
//               </h2>
//               <p>
//                 <span className="font-semibold">Market:</span> {item.market}
//               </p>
//               <p>
//                 <span className="font-semibold">State:</span> {item.state}
//               </p>
//               <p>
//                 <span className="font-semibold">Modal Price:</span> ₹{item.modal_price}
//               </p>
//               <p className="text-sm text-gray-600">
//                 Date: {item.arrival_date}
//               </p>
//             </motion.div>
//           ))}
//         </div>
//       )}
//        <Footer/>
//     </div>
//   );
// };

// export default RateAnalysis;
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
// Data for states and districts
const indianStatesAndDistricts = {
    "Andhra Pradesh": ["Anantapur", "Chittoor", "East Godavari", "Guntur", "Krishna", "Kurnool", "Prakasam", "Srikakulam", "Sri Potti Sriramulu Nellore", "Visakhapatnam", "Vizianagaram", "West Godavari", "Y.S.R. Kadapa"],
    "Arunachal Pradesh": ["Tawang", "West Kameng", "East Kameng", "Papum Pare", "Kurung Kumey", "Kra Daadi", "Lower Subansiri", "Upper Subansiri", "West Siang", "East Siang", "Siang", "Upper Siang", "Lower Siang", "Lower Dibang Valley", "Dibang Valley", "Anjaw", "Lohit", "Namsai", "Changlang", "Tirap", "Longding"],
    "Assam": ["Baksa", "Barpeta", "Biswanath", "Bongaigaon", "Cachar", "Charaideo", "Chirang", "Darrang", "Dhemaji", "Dhubri", "Dibrugarh", "Dima Hasao", "Goalpara", "Golaghat", "Hailakandi", "Hojai", "Jorhat", "Kamrup", "Kamrup Metropolitan", "Karbi Anglong", "Karimganj", "Kokrajhar", "Lakhimpur", "Majuli", "Morigaon", "Nagaon", "Nalbari", "Sivasagar", "Sonitpur", "South Salmara-Mankachar", "Tinsukia", "Udalguri", "West Karbi Anglong"],
    "Bihar": ["Araria", "Arwal", "Aurangabad", "Banka", "Begusarai", "Bhagalpur", "Bhojpur", "Buxar", "Darbhanga", "East Champaran", "Gaya", "Gopalganj", "Jamui", "Jehanabad", "Kaimur", "Katihar", "Khagaria", "Kishanganj", "Lakhisarai", "Madhepura", "Madhubani", "Munger", "Muzaffarpur", "Nalanda", "Nawada", "Patna", "Purnia", "Rohtas", "Saharsa", "Samastipur", "Saran", "Sheikhpura", "Sheohar", "Sitamarhi", "Siwan", "Supaul", "Vaishali", "West Champaran"],
    "Chhattisgarh": ["Balod", "Baloda Bazar", "Balrampur", "Bastar", "Bemetara", "Bijapur", "Bilaspur", "Dantewada", "Dhamtari", "Durg", "Gariaband", "Janjgir-Champa", "Jashpur", "Kabirdham", "Kanker", "Kondagaon", "Korba", "Koriya", "Mahasamund", "Mungeli", "Narayanpur", "Raigarh", "Raipur", "Rajnandgaon", "Sukma", "Surajpur", "Surguja"],
    "Goa": ["North Goa", "South Goa"],
    "Gujarat": ["Ahmedabad", "Amreli", "Anand", "Aravalli", "Banaskantha", "Bharuch", "Bhavnagar", "Botad", "Chhota Udaipur", "Dahod", "Dang", "Devbhoomi Dwarka", "Gandhinagar", "Gir Somnath", "Jamnagar", "Junagadh", "Kheda", "Kutch", "Mahisagar", "Mehsana", "Morbi", "Narmada", "Navsari", "Panchmahal", "Patan", "Porbandar", "Rajkot", "Sabarkantha", "Surat", "Surendranagar", "Tapi", "Vadodara", "Valsad"],
    "Haryana": ["Ambala", "Bhiwani", "Charkhi Dadri", "Faridabad", "Fatehabad", "Gurugram", "Hisar", "Jhajjar", "Jind", "Kaithal", "Karnal", "Kurukshetra", "Mahendragarh", "Nuh", "Palwal", "Panchkula", "Panipat", "Rewari", "Rohtak", "Sirsa", "Sonipat", "Yamunanagar"],
    "Himachal Pradesh": ["Bilaspur", "Chamba", "Hamirpur", "Kangra", "Kinnaur", "Kullu", "Lahaul and Spiti", "Mandi", "Shimla", "Sirmaur", "Solan", "Una"],
    "Jharkhand": ["Bokaro", "Chatra", "Deoghar", "Dhanbad", "Dumka", "East Singhbhum", "Garhwa", "Giridih", "Godda", "Gumla", "Hazaribagh", "Jamtara", "Khunti", "Koderma", "Latehar", "Lohardaga", "Pakur", "Palamu", "Ramgarh", "Ranchi", "Sahebganj", "Seraikela Kharsawan", "Simdega", "West Singhbhum"],
    "Karnataka": ["Bagalkot", "Ballari", "Belagavi", "Bengaluru Rural", "Bengaluru Urban", "Bidar", "Chamarajanagar", "Chikballapur", "Chikkamagaluru", "Chitradurga", "Dakshina Kannada", "Davanagere", "Dharwad", "Gadag", "Hassan", "Haveri", "Kalaburagi", "Kodagu", "Kolar", "Koppal", "Mandya", "Mysuru", "Raichur", "Ramanagara", "Shivamogga", "Tumakuru", "Udupi", "Uttara Kannada", "Vijayapura", "Yadgir"],
    "Kerala": ["Alappuzha", "Ernakulam", "Idukki", "Kannur", "Kasaragod", "Kollam", "Kottayam", "Kozhikode", "Malappuram", "Palakkad", "Pathanamthitta", "Thiruvananthapuram", "Thrissur", "Wayanad"],
    "Madhya Pradesh": ["Agar Malwa", "Alirajpur", "Anuppur", "Ashoknagar", "Balaghat", "Barwani", "Betul", "Bhind", "Bhopal", "Burhanpur", "Chhatarpur", "Chhindwara", "Damoh", "Datia", "Dewas", "Dhar", "Dindori", "Guna", "Gwalior", "Harda", "Hoshangabad", "Indore", "Jabalpur", "Jhabua", "Katni", "Khandwa", "Khargone", "Mandla", "Mandsaur", "Morena", "Narsinghpur", "Neemuch", "Panna", "Raisen", "Rajgarh", "Ratlam", "Rewa", "Sagar", "Satna", "Sehore", "Seoni", "Shahdol", "Shajapur", "Sheopur", "Shivpuri", "Sidhi", "Singrauli", "Tikamgarh", "Ujjain", "Umaria", "Vidisha"],
    "Maharashtra": ["Ahmednagar", "Akola", "Amravati", "Aurangabad", "Beed", "Bhandara", "Buldhana", "Chandrapur", "Dhule", "Gadchiroli", "Gondia", "Hingoli", "Jalgaon", "Jalna", "Kolhapur", "Latur", "Mumbai City", "Mumbai Suburban", "Nagpur", "Nanded", "Nandurbar", "Nashik", "Osmanabad", "Palghar", "Parbhani", "Pune", "Raigad", "Ratnagiri", "Sangli", "Satara", "Sindhudurg", "Solapur", "Thane", "Wardha", "Washim", "Yavatmal"],
    "Manipur": ["Bishnupur", "Chandel", "Churachandpur", "Imphal East", "Imphal West", "Jiribam", "Kakching", "Kamjong", "Kangpokpi", "Noney", "Pherzawl", "Senapati", "Tamenglong", "Tengnoupal", "Thoubal", "Ukhrul"],
    "Meghalaya": ["East Garo Hills", "East Jaintia Hills", "East Khasi Hills", "North Garo Hills", "Ri Bhoi", "South Garo Hills", "South West Garo Hills", "South West Khasi Hills", "West Garo Hills", "West Jaintia Hills", "West Khasi Hills"],
    "Mizoram": ["Aizawl", "Champhai", "Kolasib", "Lawngtlai", "Lunglei", "Mamit", "Saiha", "Serchhip"],
    "Nagaland": ["Dimapur", "Kiphire", "Kohima", "Longleng", "Mokokchung", "Mon", "Peren", "Phek", "Tuensang", "Wokha", "Zunheboto"],
    "Odisha": ["Angul", "Balangir", "Balasore", "Bargarh", "Bhadrak", "Boudh", "Cuttack", "Deoghar", "Dhenkanal", "Gajapati", "Ganjam", "Jagatsinghpur", "Jajpur", "Jharsuguda", "Kalahandi", "Kandhamal", "Kendrapara", "Kendujhar", "Khordha", "Koraput", "Malkangiri", "Mayurbhanj", "Nabarangpur", "Nayagarh", "Nuapada", "Puri", "Rayagada", "Sambalpur", "Sonepur", "Sundargarh"],
    "Punjab": ["Amritsar", "Barnala", "Bathinda", "Faridkot", "Fatehgarh Sahib", "Fazilka", "Ferozepur", "Gurdaspur", "Hoshiarpur", "Jalandhar", "Kapurthala", "Ludhiana", "Mansa", "Moga", "Pathankot", "Patiala", "Rupnagar", "Sahibzada Ajit Singh Nagar", "Sangrur", "Shahid Bhagat Singh Nagar", "Sri Muktsar Sahib", "Tarn Taran"],
    "Rajasthan": ["Ajmer", "Alwar", "Banswara", "Baran", "Barmer", "Bharatpur", "Bhilwara", "Bikaner", "Bundi", "Chittorgarh", "Churu", "Dausa", "Dholpur", "Dungarpur", "Hanumangarh", "Jaipur", "Jaisalmer", "Jalore", "Jhalawar", "Jhunjhunu", "Jodhpur", "Karauli", "Kota", "Nagaur", "Pali", "Pratapgarh", "Rajsamand", "Sawai Madhopur", "Sikar", "Sirohi", "Sri Ganganagar", "Tonk", "Udaipur"],
    "Sikkim": ["East Sikkim", "North Sikkim", "South Sikkim", "West Sikkim"],
    "Tamil Nadu": ["Ariyalur", "Chengalpattu", "Chennai", "Coimbatore", "Cuddalore", "Dharmapuri", "Dindigul", "Erode", "Kallakurichi", "Kanchipuram", "Kanyakumari", "Karur", "Krishnagiri", "Madurai", "Mayiladuthurai", "Nagapattinam", "Namakkal", "Nilgiris", "Perambalur", "Pudukkottai", "Ramanathapuram", "Ranipet", "Salem", "Sivaganga", "Tenkasi", "Thanjavur", "Theni", "Thoothukudi", "Tiruchirappalli", "Tirunelveli", "Tirupathur", "Tiruppur", "Tiruvallur", "Tiruvannamalai", "Tiruvarur", "Vellore", "Viluppuram", "Virudhunagar"],
    "Telangana": ["Adilabad", "Bhadradri Kothagudem", "Hyderabad", "Jagtial", "Jangaon", "Jayashankar Bhupalpally", "Jogulamba Gadwal", "Kamareddy", "Karimnagar", "Khammam", "Komaram Bheem", "Mahabubabad", "Mahabubnagar", "Mancherial", "Medak", "Medchal-Malkajgiri", "Mulugu", "Nagarkurnool", "Nalgonda", "Narayanpet", "Nirmal", "Nizamabad", "Peddapalli", "Rajanna Sircilla", "Ranga Reddy", "Sangareddy", "Siddipet", "Suryapet", "Vikarabad", "Wanaparthy", "Warangal Rural", "Warangal Urban", "Yadadri Bhuvanagiri"],
    "Tripura": ["Dhalai", "Gomati", "Khowai", "North Tripura", "Sepahijala", "South Tripura", "Unakoti", "West Tripura"],
    "Uttar Pradesh": ["Agra", "Aligarh", "Ambedkar Nagar", "Amethi", "Amroha", "Auraiya", "Ayodhya", "Azamgarh", "Baghpat", "Bahraich", "Ballia", "Balrampur", "Banda", "Barabanki", "Bareilly", "Basti", "Bhadohi", "Bijnor", "Budaun", "Bulandshahr", "Chandauli", "Chitrakoot", "Deoria", "Etah", "Etawah", "Farrukhabad", "Fatehpur", "Firozabad", "Gautam Buddh Nagar", "Ghaziabad", "Ghazipur", "Gonda", "Gorakhpur", "Hamirpur", "Hapur", "Hardoi", "Hathras", "Jalaun", "Jaunpur", "Jhansi", "Kannauj", "Kanpur Dehat", "Kanpur Nagar", "Kasganj", "Kaushambi", "Kushinagar", "Lakhimpur Kheri", "Lalitpur", "Lucknow", "Maharajganj", "Mahoba", "Mainpuri", "Mathura", "Mau", "Meerut", "Mirzapur", "Moradabad", "Muzaffarnagar", "Pilibhit", "Pratapgarh", "Prayagraj", "Raebareli", "Rampur", "Saharanpur", "Sambhal", "Sant Kabir Nagar", "Shahjahanpur", "Shamli", "Shravasti", "Siddharthnagar", "Sitapur", "Sonbhadra", "Sultanpur", "Unnao", "Varanasi"],
    "Uttarakhand": ["Almora", "Bageshwar", "Chamoli", "Champawat", "Dehradun", "Haridwar", "Nainital", "Pauri Garhwal", "Pithoragorh", "Rudraprayag", "Tehri Garhwal", "Udham Singh Nagar", "Uttarkashi"],
    "West Bengal": ["Alipurduar", "Bankura", "Birbhum", "Cooch Behar", "Dakshin Dinajpur", "Darjeeling", "Hooghly", "Howrah", "Jalpaiguri", "Jhargram", "Kalimpong", "Kolkata", "Malda", "Murshidabad", "Nadia", "North 24 Parganas", "Paschim Bardhaman", "Paschim Medinipur", "Purba Bardhaman", "Purba Medinipur", "Purulia", "South 24 Parganas", "Uttar Dinajpur"],
};


// Placeholder for the Footer component to make the code runnable
const Footer = () => (
  <footer className="text-center text-gray-500 mt-12 pb-4">
    <p>&copy; 2025 FarmRev. All rights reserved.</p>
  </footer>
);

const RateAnalysis = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedState, setSelectedState] = useState("Maharashtra");
  const [selectedDistrict, setSelectedDistrict] = useState("Amravati");

  useEffect(() => {
    // Do not fetch data if no state is selected
    if (!selectedState) {
        setData([]);
        setLoading(false);
        return;
    };

    const fetchDataWithGemini = async () => {
      setLoading(true);
      setError(null);

      const currentDate = new Date();
      const currentMonthYear = currentDate.toLocaleString('default', { month: 'long', year: 'numeric' });

      // Dynamically create the prompt based on user selection
      let prompt = `Get the current market prices for major agricultural commodities`;
      if (selectedDistrict) {
          prompt += ` in the ${selectedDistrict} district of ${selectedState}.`;
      } else {
          prompt += ` in the state of ${selectedState}.`;
      }
      prompt += ` All prices must be provided per Quintal.`;
      prompt += ` For each commodity, also provide a future expected price based on an average of previous years' records. Specify the month for this prediction (e.g., "October 2025").`;
      prompt += ` IMPORTANT: The prediction_month must be in the future, after ${currentMonthYear}.`;
      prompt += " Ensure the current data is recent and provide around 20 top results.";


      // The schema defines the exact JSON structure we want back from the API.
      const schema = {
        type: "ARRAY",
        items: {
          type: "OBJECT",
          properties: {
            commodity: { type: "STRING" },
            market: { type: "STRING" },
            state: { type: "STRING" },
            modal_price: { type: "NUMBER" },
            arrival_date: { type: "STRING" },
            expected_price: { type: "NUMBER" },
            prediction_month: { type: "STRING" },
          },
          required: ["commodity", "market", "state", "modal_price", "arrival_date"],
        },
      };
      
      const apiKey = "AIzaSyDSb2rcSAwiACcdcOFgY0KZ4-M-skvgm2I"; // The API key will be injected by the environment.
      const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`;

      const payload = {
        contents: [{ parts: [{ text: prompt }] }],
        generationConfig: {
          response_mime_type: "application/json",
          response_schema: schema,
        },
      };

      try {
        const response = await fetch(apiUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });

        if (!response.ok) {
          const errorBody = await response.text();
          throw new Error(`API call failed with status: ${response.status}. Body: ${errorBody}`);
        }

        const result = await response.json();
        
        if (result.candidates && result.candidates.length > 0 && result.candidates[0].content && result.candidates[0].content.parts && result.candidates[0].content.parts.length > 0) {
            const responseText = result.candidates[0].content.parts[0].text;
            const parsedData = JSON.parse(responseText);
            setData(parsedData);
        } else {
            throw new Error("Received an invalid response structure from the API.");
        }
        
      } catch (err) {
        console.error("Error fetching data from Gemini:", err);
        setError("Failed to fetch live market data. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchDataWithGemini();
  }, [selectedState, selectedDistrict]); // Re-run the effect when state or district changes

  const handleStateChange = (e) => {
      setSelectedState(e.target.value);
      // Reset district when state changes
      setSelectedDistrict(""); 
  }

  return (
    <>
    <Navbar/>
    <div className="min-h-screen bg-green-50 py-10 px-4 sm:px-6 lg:px-8 relative">
      
      
      <div className="max-w-7xl mx-auto">
        <motion.h1
          className="text-4xl font-extrabold text-center text-green-800 mb-4 pt-16 md:pt-0"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, type: "spring" }}
        >
          Live Crop Market Prices
        </motion.h1>
        <p className="text-center text-lg text-gray-600 mb-8">
          Select a state and district to view real-time commodity rates.
        </p>

        {/* Filter Dropdowns */}
        <div className="flex flex-col md:flex-row gap-4 justify-center mb-12">
            {/* State Dropdown */}
            <div className="w-full md:w-1/3">
                <label htmlFor="state-select" className="block text-sm font-medium text-gray-700 mb-1">State</label>
                <select 
                    id="state-select"
                    value={selectedState} 
                    onChange={handleStateChange}
                    className="block w-full p-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 text-base"
                >
                    <option value="">Select a State</option>
                    {Object.keys(indianStatesAndDistricts).map(state => (
                        <option key={state} value={state}>{state}</option>
                    ))}
                </select>
            </div>

            {/* District Dropdown */}
            <div className="w-full md:w-1/3">
                <label htmlFor="district-select" className="block text-sm font-medium text-gray-700 mb-1">District</label>
                <select 
                    id="district-select"
                    value={selectedDistrict} 
                    onChange={(e) => setSelectedDistrict(e.target.value)}
                    disabled={!selectedState}
                    className="block w-full p-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 text-base disabled:bg-gray-200"
                >
                    <option value="">All Districts</option>
                    {selectedState && indianStatesAndDistricts[selectedState].map(district => (
                        <option key={district} value={district}>{district}</option>
                    ))}
                </select>
            </div>
        </div>


        {loading ? (
          <div className="flex justify-center items-center h-64">
             <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-green-600"></div>
          </div>
        ) : error ? (
          <p className="text-center text-red-600 bg-red-100 p-4 rounded-lg">{error}</p>
        ) : data.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {data.map((item, index) => (
              <motion.div
                key={index}
                className="rounded-2xl shadow-lg bg-white p-6 flex flex-col space-y-3 border border-gray-200 hover:shadow-xl hover:border-green-500 transition-all duration-300"
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <h2 className="text-2xl font-bold text-gray-800">
                  {item.commodity}
                </h2>
                <div className="text-gray-600 space-y-2 text-base">
                  <p>
                    <span className="font-semibold text-gray-700">Market:</span> {item.market}
                  </p>
                  <p>
                    <span className="font-semibold text-gray-700">State:</span> {item.state}
                  </p>
                </div>
                 <div className="pt-2 mt-auto">
                   <p className="text-2xl font-bold text-green-600">
                      ₹{item.modal_price.toLocaleString('en-IN')}
                      <span className="text-sm font-medium text-gray-500"> / Quintal</span>
                   </p>
                   <p className="text-sm text-gray-500 pt-1">
                     Last Updated: {new Date(item.arrival_date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}
                   </p>
                 </div>
                 {item.expected_price && item.prediction_month && (
                    <div className="mt-4 pt-4 border-t border-dashed border-gray-200">
                        <p className="text-sm font-semibold text-gray-700">
                            Future Outlook
                        </p>
                        <p className="text-base font-medium text-teal-600">
                            In {item.prediction_month}, the rate may be ≈ ₹{item.expected_price.toLocaleString('en-IN')}
                        </p>
                    </div>
                )}
              </motion.div>
            ))}
          </div>
        ) : (
            <div className="text-center py-16">
                <p className="text-gray-600 text-lg">No market data found for the selected area. Please try a different selection.</p>
            </div>
        )}
      </div>
      <Footer />
    </div></>
  );
};

export default RateAnalysis;
