import React from "react";
import Header from "../components/Header";
import MainContent from "../components/MainContent";
import Banners from "../components/Banners";
import Services from "../components/services/Services";
import Destinations from "../components/destinations/Destinations";
import TravelPoint from "../components/travelpoint/TravelPoint";
import Features from "../components/features/Features";
import Footer from "../components/Footer";
import ElipseDiv from "../components/ElipseDiv";

const Home = () => {
  return (
    <div>
      <ElipseDiv />
      <Header />
      <MainContent />
      <Banners />
      <Services />
      <Destinations />
      <TravelPoint />
      <Features />
      <Footer />
    </div>
  );
};

export default Home;
