import React from "react";
import { FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";

const DoctorCard = ({
  name,
  image,
  qualification,
  experience,
  specialization,
}) => {
  return (
    <div className="bg-secondary rounded-lg overflow-hidden shadow-lg hover-glow card-gradient">
      <div className="h-80 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-primary">{name}</h3>
        <p className="text-light/80 mb-2">{qualification}</p>
        <p className="text-light/80 mb-4">{specialization}</p>
        <div className="flex items-center mb-4">
          <div className="h-1 w-10 bg-blue-gradient mr-2"></div>
          <p className="text-light/70 text-sm">{experience} of Experience</p>
        </div>
        <div className="flex space-x-4 text-light/70">
          <button
            className="hover:text-primary transition-colors duration-300"
            aria-label="LinkedIn Profile"
          >
            <FaLinkedin size={18} />
          </button>
          <button
            className="hover:text-primary transition-colors duration-300"
            aria-label="Email Contact"
          >
            <FaEnvelope size={18} />
          </button>
          <button
            className="hover:text-primary transition-colors duration-300"
            aria-label="Phone Contact"
          >
            <FaPhone size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;
