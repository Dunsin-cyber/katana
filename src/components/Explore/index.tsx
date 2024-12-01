"use client";
// / Dummy dashboard component with content
import React from "react";
// import { SidebarDemo } from "../Sidebar";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { Input } from "@chakra-ui/react";
import Modal from "./Modal";

const Campaign = () => {
  React.useEffect(() => {}, []);

  return (
    <div className="bg-bgGradient mx-auto px-8">
      <div className="flex pt-3 justify-between items-center  mx-auto ">
        <h2 className="font-extrabold">Musics and Arts</h2>
        <Input maxW={"40%"} placeholder="search for campaign" />
      </div>
      <HoverEffect items={projects} />
      <Modal />
    </div>
  );
};

export default Campaign;

export const projects = [
  {
    id: 1,
    title: "Stripe",
    description:
      "A technology company that builds economic infrastructure for the internet.",
    link: "https://stripe.com",
    src: "album-1.jpg",
    progress: 20,
  },
  {
    id: 2,
    title: "Netflix",
    description:
      "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
    link: "https://netflix.com",
    src: "album-2.jpg",
    progress: 30,
  },
  {
    id: 3,
    title: "Google",
    description:
      "A multinational technology company that specializes in Internet-related services and products.",
    link: "https://google.com",
    src: "album-3.jpg",
    progress: 0,
  },
  {
    id: 4,
    title: "Meta",
    description:
      "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
    link: "https://meta.com",
    src: "album-4.jpg",
    progress: 78,
  },
  {
    id: 5,
    title: "Amazon",
    description:
      "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
    link: "https://amazon.com",
    src: "album-1.jpg",
    progress: 49,
  },
  {
    id: 6,
    title: "Microsoft",
    description:
      "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
    link: "https://microsoft.com",
    src: "album-2.jpg",
    progress: 90,
  },
];
