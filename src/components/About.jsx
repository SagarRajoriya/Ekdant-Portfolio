import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const About = () => {
  return (
    <section id="about" className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-light mb-4">
            About <span className="text-primary">Ekdant</span> Dental Clinic
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="flex flex-col lg:flex-row gap-10 items-center">
          <div className="lg:w-1/2">
            {/* Updated with your actual clinic image */}
            <div className="rounded-lg overflow-hidden shadow-xl hover-glow">
              <img
                src="/assets/Dr.ShraddhaSharmaWorking.jpg"
                alt="Ekdant Dental Clinic"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          <div className="lg:w-1/2">
            <h3 className="text-2xl font-semibold text-primary mb-4">
              Welcome to Ekdant Dental Clinic
            </h3>
            <p className="text-light/90 mb-6">
              At Ekdant Dental Clinic, we are dedicated to providing
              comprehensive dental care in a comfortable and modern environment.
              Our team of experienced dental professionals is committed to
              delivering personalized treatments that address your unique dental
              needs.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div className="flex items-start space-x-3">
                <FaCheckCircle className="text-primary mt-1 flex-shrink-0" />
                <span>Advanced Technology</span>
              </div>
              <div className="flex items-start space-x-3">
                <FaCheckCircle className="text-primary mt-1 flex-shrink-0" />
                <span>Experienced Dentists</span>
              </div>
              <div className="flex items-start space-x-3">
                <FaCheckCircle className="text-primary mt-1 flex-shrink-0" />
                <span>Comfortable Environment</span>
              </div>
              <div className="flex items-start space-x-3">
                <FaCheckCircle className="text-primary mt-1 flex-shrink-0" />
                <span>Comprehensive Care</span>
              </div>
            </div>

            <a
              href="#services"
              className="inline-block bg-primary hover:bg-transparent gradient-btn text-dark hover:text-white font-semibold px-6 py-3 rounded-md transition-all duration-300 border border-transparent hover:border-primary hover-glow"
            >
              Explore Our Services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
