import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import DoctorsSection from "./components/DoctorsSection";
import Services from "./components/Services";
import Schedule from "./components/Schedule";
import Appointment from "./components/Appointment";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-dark">
      <Header />
      <main>
        <Hero />
        <About />
        <DoctorsSection />
        <Services />
        <Schedule />
        <Appointment />
      </main>
      <Footer />
    </div>
  );
}

export default App;
