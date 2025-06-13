import React from "react";
import DoctorCard from "./DoctorCard";

const DoctorsSection = () => {
  const doctors = [
    {
      id: 1,
      name: "Dr. Shraddha Sharma",
      qualification: "BDS",
      experience: "More than 5 years",
      specialization: "General Dentistry",
      // Updated image path
      image: "/assets/Dr.ShraddhaSharmaSmiling.jpg",
    },
    {
      id: 2,
      name: "Dr. Vijay Sharma",
      qualification: "MDS",
      experience: "More than 8 years",
      specialization: "Maxillofacial Surgeon",
      // Updated image path
      image: "/assets/Dr.VijaySharmaWorking.jpg",
    },
  ];

  return (
    <section id="doctors" className="py-20 bg-dark">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-light mb-4">
            Our <span className="text-primary">Expert</span> Doctors
          </h2>
          <p className="text-light/70 max-w-2xl mx-auto">
            Meet our team of experienced dental professionals dedicated to
            providing you with the best dental care possible.
          </p>
          <div className="w-24 h-1 bg-primary mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {doctors.map((doctor) => (
            <DoctorCard
              key={doctor.id}
              name={doctor.name}
              image={doctor.image}
              qualification={doctor.qualification}
              experience={doctor.experience}
              specialization={doctor.specialization}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DoctorsSection;
