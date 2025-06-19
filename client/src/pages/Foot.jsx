import React from "react";


const Footer = () => {
  return (
    <footer className="bg-green-700 text-white py-6 mt-10">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm text-center md:text-left mb-2 md:mb-0">
          © {new Date().getFullYear()} FarmRev. All rights reserved.
        </p>
        <div className="flex gap-4">
          <a
            href="https://www.linkedin.com/in/sarthak-keche"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-300 transition"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/sarthakkeche"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-300 transition"
          >
            GitHub
          </a>
          <a
            href="https://twitter.com/sarthakkeche"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-300 transition"
          >
            Twitter
          </a>
          <a
            href="mailto:sarthakkeche@gmail.com"
            className="hover:text-yellow-300 transition"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
