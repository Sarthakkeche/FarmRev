import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useNavigate } from "react-router-dom";


function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const token = localStorage.getItem("token");
    const navigate = useNavigate();

  return (
    <nav className="bg-green-600 p-4 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-white text-2xl font-bold">
          FarmRev
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6 text-white">
          <Link to="/farmer" className="hover:text-gray-200 transition">Home</Link>
          <Link to="/about" className="hover:text-gray-200 transition">About</Link>
          <Link to="/msg" className="hover:text-gray-200 transition">Message</Link>

          {token ? (
            <Link to="/farmer" className="hover:text-gray-200 transition">Dashboard</Link>
          ) : null}
          <Link to="/contact" className="hover:text-gray-200 transition">Contact</Link>
        </div>

        {/* Auth Buttons */}
        <div className="hidden md:flex space-x-4">
       
            <button
              onClick={() => {
                navigate("/");
                localStorage.removeItem("token");
                window.location.reload();
               
              }}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition"
            >
              Logout
            </button>
       
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col bg-green-700 text-white p-4 space-y-4">
          <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>
          {token && <Link to="/farmer" onClick={() => setIsOpen(false)}>Dashboard</Link>}
          <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
          {token ? (
            <button
              onClick={() => {
                localStorage.removeItem("token");
                window.location.reload();
              }}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition"
            >
              Logout
            </button>
          ) : (
            <>
              <Link to="/signin" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition">
                Sign In
              </Link>
              <Link to="/signup" className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg transition">
                Sign Up
              </Link>
            </>
          )}
        </div>
      )}
    </nav>
  );
}

export default Navbar;