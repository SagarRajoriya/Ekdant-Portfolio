import React from "react";
import { FaTooth, FaPhone, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-dark pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Column */}
          <div>
            <div className="flex items-center mb-4">
              <FaTooth className="text-primary text-2xl mr-2" />
              <h3 className="text-xl font-bold text-light">Ekdant Dental</h3>
            </div>
            <p className="text-light/70 mb-6">
              Providing exceptional dental care with a focus on patient comfort
              and satisfaction since 2010.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-light/70 hover:text-primary transition-colors duration-300"
              >
                <FaFacebook size={20} />
              </a>
              <a
                href="#"
                className="text-light/70 hover:text-primary transition-colors duration-300"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href="#"
                className="text-light/70 hover:text-primary transition-colors duration-300"
              >
                <FaTwitter size={20} />
              </a>
              <a
                href="#"
                className="text-light/70 hover:text-primary transition-colors duration-300"
              >
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="text-lg font-semibold text-light mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#home"
                  className="text-light/70 hover:text-primary transition-colors duration-300"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-light/70 hover:text-primary transition-colors duration-300"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-light/70 hover:text-primary transition-colors duration-300"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#doctors"
                  className="text-light/70 hover:text-primary transition-colors duration-300"
                >
                  Our Doctors
                </a>
              </li>
              <li>
                <a
                  href="#appointment"
                  className="text-light/70 hover:text-primary transition-colors duration-300"
                >
                  Book Appointment
                </a>
              </li>
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="text-lg font-semibold text-light mb-4">Services</h3>
            <ul className="space-y-2">
              <li className="text-light/70">General Dentistry</li>
              <li className="text-light/70">Cosmetic Dentistry</li>
              <li className="text-light/70">Orthodontics</li>
              <li className="text-light/70">Pediatric Dentistry</li>
              <li className="text-light/70">Emergency Care</li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-lg font-semibold text-light mb-4">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <FaMapMarkerAlt className="text-primary mt-1 mr-3 flex-shrink-0" />
                <span className="text-light/70">
                  123 Dental Street, Landmark Area, City, State - 123456
                </span>
              </li>
              <li className="flex items-center">
                <FaPhone className="text-primary mr-3 flex-shrink-0" />
                <span className="text-light/70">+91 98765 43210</span>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="text-primary mr-3 flex-shrink-0" />
                <span className="text-light/70">info@ekdantclinic.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <p className="text-center text-light/50">
            &copy; {new Date().getFullYear()} Ekdant Dental Clinic. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
