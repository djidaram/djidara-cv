"use client";
import Contact from "@/components/chapters/Contact";
import Resume from "@/components/chapters/Resume";
import Work from "@/components/chapters/Work";
import { useState } from "react";

export default function Home() {
  return (
    <main>
      <div className="h-[1000px] bg-red-300"></div>

      <Resume />
      <div className="h-[1000px] bg-green-300"></div>

      <Work />
      <div className="h-[1000px] bg-blue-300"></div>
      <Contact />
    </main>
  );
}
