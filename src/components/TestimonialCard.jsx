import React from "react";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

const TestimonialCard = ({ name, image, message, rating }) => {
  return (
    <div className="bg-secondary rounded-lg p-6 hover-glow">
      <FaQuoteLeft className="text-primary text-2xl mb-4" />
      <p className="text-light/80 mb-6">{message}</p>

      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <img
            src={image}
            alt={name}
            className="w-12 h-12 rounded-full object-cover mr-3"
          />
          <div>
            <h4 className="font-medium text-light">{name}</h4>
            <p className="text-xs text-light/50">Patient</p>
          </div>
        </div>

        <div className="flex">
          {[...Array(rating)].map((_, i) => (
            <FaStar key={i} className="text-primary" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
