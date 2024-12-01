"use client";
import React from "react";
import Footer from "../Footer";
// import Why from "./Why";
import Trade from "./Trade";
import Stats from "./Stats";
// import Hero from "./Hero";

function LandingPage() {
  return (
    <div className="bg-custom-gradient">
      {/* <Hero /> */}
      <Stats />
      {/* <Why /> */}
      <Trade />
      <Footer />
    </div>
  );
}

export default LandingPage;
