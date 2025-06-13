import React from "react";
import { FaRegCalendarCheck } from "react-icons/fa";

const Hero = () => {
  const coverPageUrl = `${process.env.PUBLIC_URL}/assets/CoverPage.jpg`;

  return (
    <section id="home" className="relative h-screen flex items-center">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/80 to-dark z-10"></div>

      {/* Hero background image - fixed path for Vercel */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${coverPageUrl})` }}
      ></div>

      <div className="container mx-auto px-6 relative z-20">
        <div className="max-w-xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-light mb-4">
            Your <span className="text-primary">Smile</span> Is Our Priority
          </h1>
          <p className="text-light/90 text-lg mb-8">
            Experience exceptional dental care with our team of expert
            professionals at Ekdant Dental Clinic. We're committed to providing
            you with the highest quality dental services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#appointment"
              className="flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-dark font-semibold px-6 py-3 rounded-md transition-all duration-300 hover-glow"
            >
              <FaRegCalendarCheck className="text-dark" />
              Book Appointment
            </a>
            <a
              href="#services"
              className="flex items-center justify-center border border-primary text-primary hover:text-primary/90 hover:border-primary/90 px-6 py-3 rounded-md transition-all duration-300"
            >
              Our Services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
