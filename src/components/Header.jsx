import React, { useState, useEffect } from "react";
import { FaTooth } from "react-icons/fa";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/90 backdrop-blur-sm shadow-md" : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <FaTooth className="text-primary text-2xl mr-2" />
          <span className="text-xl font-bold text-light">
            Ekdant Dental Clinic
          </span>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-8">
          <li>
            <a href="#home" className="nav-link">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="nav-link">
              About
            </a>
          </li>
          <li>
            <a href="#doctors" className="nav-link">
              Our Doctors
            </a>
          </li>
          <li>
            <a href="#services" className="nav-link">
              Services
            </a>
          </li>
          <li>
            <a href="#appointment" className="nav-link">
              Appointment
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-light focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {mobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black border-t border-gray-900">
          <ul className="flex flex-col p-4 space-y-4">
            <li>
              <a
                href="#home"
                className="nav-link block"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="nav-link block"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#doctors"
                className="nav-link block"
                onClick={() => setMobileMenuOpen(false)}
              >
                Our Doctors
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="nav-link block"
                onClick={() => setMobileMenuOpen(false)}
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#appointment"
                className="nav-link block"
                onClick={() => setMobileMenuOpen(false)}
              >
                Appointment
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
