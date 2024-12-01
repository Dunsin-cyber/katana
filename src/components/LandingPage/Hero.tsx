"use client";
import React, { useState } from "react";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { useRouter } from "next/navigation";
import Navbar from "../Navbar/Nav2";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { FlipWords } from "@/components/ui/flip-words";
import Lottie from "lottie-react";
import ICON from "@/components/GIF/home-icon.json";

const words = [
  {
    text: "Easily",
    className: "text-white sm:text-4xl",
  },
  {
    text: "raise",
    className: "text-white sm:text-4xl",
  },
  {
    text: "funds",
    className: "text-white sm:text-4xl",
  },
  {
    text: "on",
    className: "text-white sm:text-4xl",
  },
  {
    text: "Tron.",
    className: "text-purple-500 dark:text-purple-500 sm:text-4xl",
  },
];

function Hero() {
  const router = useRouter();
  const words_ = ["High-Value Digital Assets", "music", "art"];

  return (
    <section>
      <BackgroundBeams />
      <div className="container mx-auto">
        <Navbar />
        <div className="flex flex-col items-center lg:flex-row mt-[30px]">
          <div className="flex-1">
            {/* badge text */}

            {/* title */}
            <h1
              className="text-[32px] lg:text-[56px] font-bold leading-tight mb-6"
              data-aos="fade-down"
              data-aos-delay="500"
            >
              Empowering Collaborative Asset Ownership with
              <span className="text-[#A52A2A]"> Ethereum </span>
              and
              <span className="text-[#A52A2A]"> Ethena&apos;s </span>
              Cutting-Edge Innovation.
            </h1>
            <p
              className="max-w-[440px] text-[16px] lg:text-[24px] leading-relaxed mb-8"
              data-aos="fade-down"
              data-aos-delay="600"
            >
              Slicing
              <FlipWords className="text-[#A52A2A]" words={words_} />
              into Opportunities for Everyone.{" "}
            </p>
            <button
              className="btn gap-x-6 pl-6 text-sm lg:h-16 lg:text-base z-50"
              data-aos="fade-down"
              data-aos-delay="700"
              onClick={() => {
                router.push("/connect-wallet");
              }}
            >
              Get Started
              <IoIosArrowDroprightCircle className="text-2xl lg:text-3xl" />
            </button>
          </div>
          {/* Hero image */}
          <div
            className="flex-1 w-[90%]"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <Lottie animationData={ICON} loop={true} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
