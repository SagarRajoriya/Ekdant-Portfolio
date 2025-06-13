import React from "react";
import { FaPhone, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";

const Appointment = () => {
  return (
    <section id="appointment" className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-light mb-4">
            Book <span className="text-primary">Appointment</span>
          </h2>
          <p className="text-light/70 max-w-2xl mx-auto">
            Schedule your dental appointment today and take the first step
            towards a healthier smile.
          </p>
          <div className="w-24 h-1 bg-primary mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="bg-dark border border-gray-900 rounded-lg p-8 hover-glow">
            <h3 className="text-2xl font-semibold text-primary mb-6">
              Get in Touch
            </h3>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-primary/20 p-3 rounded-full text-primary">
                  <FaPhone />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-light mb-1">
                    Phone Number
                  </h4>
                  <p className="text-light/70">+91 98765 43210</p>
                  <p className="text-light/70">+91 12345 67890</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-primary/20 p-3 rounded-full text-primary">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-light mb-1">
                    Clinic Address
                  </h4>
                  <p className="text-light/70">
                    123 Dental Street, Landmark Area
                    <br />
                    City, State - 123456
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-primary/20 p-3 rounded-full text-primary">
                  <FaEnvelope />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-light mb-1">
                    Email Address
                  </h4>
                  <p className="text-light/70">info@ekdantclinic.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-dark border border-gray-900 rounded-lg p-8 hover-glow card-gradient">
            <h3 className="text-2xl font-semibold text-primary mb-6">
              Appointment Form
            </h3>

            <form>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div>
                  <label htmlFor="name" className="block text-light mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full bg-secondary border border-gray-800 rounded-md px-4 py-2 text-light focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-light mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full bg-secondary border border-gray-700 rounded-md px-4 py-2 text-light focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Your Phone"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="email" className="block text-light mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full bg-secondary border border-gray-700 rounded-md px-4 py-2 text-light focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Your Email"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="date" className="block text-light mb-2">
                  Preferred Date
                </label>
                <input
                  type="date"
                  id="date"
                  className="w-full bg-secondary border border-gray-700 rounded-md px-4 py-2 text-light focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-light mb-2">
                  Message (Optional)
                </label>
                <textarea
                  id="message"
                  rows="4"
                  className="w-full bg-secondary border border-gray-700 rounded-md px-4 py-2 text-light focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Tell us about your dental concerns..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-primary hover:bg-transparent gradient-btn text-dark hover:text-white font-semibold px-6 py-3 rounded-md transition-all duration-300 border border-transparent hover:border-primary hover-glow"
              >
                Book Appointment
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Appointment;
