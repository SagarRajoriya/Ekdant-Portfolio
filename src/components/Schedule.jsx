import React from "react";
import { FaClock } from "react-icons/fa";

const Schedule = () => {
  const doctorsImage = "/assets/BothTheDoctorsTogether.jpg";

  const openingHours = [
    { day: "Monday", hours: "9:00 AM - 6:00 PM" },
    { day: "Tuesday", hours: "9:00 AM - 6:00 PM" },
    { day: "Wednesday", hours: "9:00 AM - 6:00 PM" },
    { day: "Thursday", hours: "9:00 AM - 6:00 PM" },
    { day: "Friday", hours: "9:00 AM - 6:00 PM" },
    { day: "Saturday", hours: "9:00 AM - 4:00 PM" },
    { day: "Sunday", hours: "Closed" },
  ];

  return (
    <section className="py-20 bg-dark">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <div className="mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-light mb-4">
                Opening <span className="text-primary">Hours</span>
              </h2>
              <div className="w-24 h-1 bg-primary"></div>
            </div>

            <p className="text-light/70 mb-8">
              Ekdant Dental Clinic is open six days a week to accommodate your
              busy schedule. Book your appointment during our working hours for
              comprehensive dental care.
            </p>

            <div className="bg-secondary rounded-lg p-6 hover-glow">
              <div className="flex items-center mb-4">
                <FaClock className="text-primary text-xl mr-2" />
                <h3 className="text-xl font-semibold text-light">
                  Working Hours
                </h3>
              </div>

              <div className="space-y-3">
                {openingHours.map((item, index) => (
                  <div
                    key={index}
                    className="flex justify-between border-b border-gray-700 pb-2 last:border-b-0"
                  >
                    <span
                      className={`${
                        item.day === "Sunday" ? "text-primary" : "text-light"
                      }`}
                    >
                      {item.day}
                    </span>
                    <span
                      className={`${
                        item.day === "Sunday" ? "text-primary" : "text-light/70"
                      }`}
                    >
                      {item.hours}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="md:w-1/2">
            <div className="rounded-lg overflow-hidden shadow-xl hover-glow">
              <img
                src={doctorsImage}
                alt="Ekdant Dental Clinic Interior"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Schedule;
