import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import FrequentlyBough from "../components/FrequentlyBough";
import CallToMenu from "../components/CallToMenu";
import FAQs from "../components/FAQs";
import Footer from "../components/Footer";

export default function Homepage() {
  return (
    <div className="font-arimo">
      <Header />
      <Hero />
      <FrequentlyBough />
      <CallToMenu />
      <FAQs />
      <Footer />
    </div>
  );
}
