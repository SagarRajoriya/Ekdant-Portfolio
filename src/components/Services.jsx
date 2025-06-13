import React from "react";
import {
  FaTooth,
  FaTeeth,
  FaProcedures,
  FaBriefcaseMedical,
  FaSmile,
  FaChild,
} from "react-icons/fa";

// Use the external ServiceCard component instead of redefining it here
import ServiceCard from "./ServiceCard";

const Services = () => {
  const services = [
    {
      id: 1,
      icon: <FaTooth />,
      title: "General Dentistry",
      description:
        "Comprehensive dental care for patients of all ages, including regular checkups, cleanings, and fillings.",
    },
    {
      id: 2,
      icon: <FaTeeth />,
      title: "Cosmetic Dentistry",
      description:
        "Enhance your smile with our cosmetic services including teeth whitening, veneers, and cosmetic bonding.",
    },
    {
      id: 3,
      icon: <FaProcedures />,
      title: "Oral Surgery",
      description:
        "Expert surgical procedures including tooth extractions, dental implants, and jaw surgeries.",
    },
    {
      id: 4,
      icon: <FaBriefcaseMedical />,
      title: "Emergency Care",
      description:
        "Prompt dental care for emergencies such as severe toothaches, broken teeth, or dental injuries.",
    },
    {
      id: 5,
      icon: <FaSmile />,
      title: "Orthodontics",
      description:
        "Straighten your teeth and correct bite issues with our modern orthodontic treatments.",
    },
    {
      id: 6,
      icon: <FaChild />,
      title: "Pediatric Dentistry",
      description:
        "Specialized dental care for children in a friendly and comfortable environment.",
    },
  ];

  return (
    <section id="services" className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-light mb-4">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="text-light/70 max-w-2xl mx-auto">
            We provide a wide range of dental services to meet all your oral
            health needs.
          </p>
          <div className="w-24 h-1 bg-primary mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
