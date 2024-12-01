"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
// import { AppContext } from "../../Context";
import Footer from "../Footer";
import Why from "./Why";
import Trade from "./Trade";
import Stats from "./Stats";
import Hero from "./Hero";

function LandingPage() {
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useRouter();
  const words_ = ["crowd funds", "manage NFT’s", "manage your balances"];
  const handleClick = async () => {
    navigate.push("profile");
  };

  return (
    <div className="bg-custom-gradient">
      <Hero />
      {/* <Stats /> */}
      {/* <Why /> */}
      {/* <Trade /> */}
      <Footer />
    </div>
  );
}

export default LandingPage;
