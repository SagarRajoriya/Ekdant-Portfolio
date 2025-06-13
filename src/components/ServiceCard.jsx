import React from "react";

const ServiceCard = ({ icon, title, description }) => {
  return (
    <div className="bg-dark border border-gray-900 rounded-lg p-6 hover-glow card-gradient">
      <div className="text-primary text-3xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-light mb-2">{title}</h3>
      <p className="text-light/70">{description}</p>
    </div>
  );
};

export default ServiceCard;
