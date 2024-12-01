"use client";
import React from "react";
// import Page from "@/components/LandingPage/index";
import { redirect } from "next/navigation";

export default function Home() {
  setTimeout(() => {
    redirect("home");
  }, 500);
  return <div></div>;
}
