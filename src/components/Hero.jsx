import React, { useState } from "react";
import { FaRegCalendarCheck } from "react-icons/fa";
// Import the image directly
const Hero = () => {from '../assets/CoverPage.jpg';
  const [imageError, setImageError] = useState(false);
  const primaryImage = "/assets/CoverPage.jpg";
  // Fallback to a placeholder image service
  const fallbackImage = "https://placehold.co/1920x1080/000000/FFFFFF/png?text=Ekdant+Dental";
      {/* Background gradient overlay */}
  return (from-dark via-dark/80 to-dark z-10"></div>
    <section id="home" className="relative h-screen flex items-center">
      {/* Background gradient overlay */}*/}
      <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/80 to-dark z-10"></div>
Name="absolute inset-0 bg-cover bg-center"
      {/* Hero background image with fallback */}        style={{ backgroundImage: `url(${coverPageImg})` }}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${imageError ? fallbackImage : primaryImage})` }}
        onError={() => setImageError(true)}
      ></div>lassName="text-4xl md:text-5xl lg:text-6xl font-bold text-light mb-4">
e</span> Is Our Priority
      <div className="container mx-auto px-6 relative z-20">
        <div className="max-w-xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-light mb-4">eam of expert
            Your <span className="text-primary">Smile</span> Is Our Priorityofessionals at Ekdant Dental Clinic. We're committed to providing
          </h1>
          <p className="text-light/90 text-lg mb-8">
            Experience exceptional dental care with our team of expertex-col sm:flex-row gap-4">
            professionals at Ekdant Dental Clinic. We're committed to providing
            you with the highest quality dental services. href="#appointment"
          </p>gap-2 bg-primary hover:bg-primary/90 text-dark font-semibold px-6 py-3 rounded-md transition-all duration-300 hover-glow"
          <div className="flex flex-col sm:flex-row gap-4">
            <aaRegCalendarCheck className="text-dark" />
              href="#appointment"Book Appointment
              className="flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-dark font-semibold px-6 py-3 rounded-md transition-all duration-300 hover-glow"
            >
              <FaRegCalendarCheck className="text-dark" /> href="#services"
              Book Appointmentlex items-center justify-center border border-primary text-primary hover:text-primary/90 hover:border-primary/90 px-6 py-3 rounded-md transition-all duration-300"
            </a>
            <ar Services
              href="#services"a>
              className="flex items-center justify-center border border-primary text-primary hover:text-primary/90 hover:border-primary/90 px-6 py-3 rounded-md transition-all duration-300"div>
            >
              Our Services  </div>
            </a>  </section>
          </div>  );
        </div>
      </div>






export default Hero;};  );    </section>export default Hero;
