"use client";
import Header from "./_components/Header";
import LeftSidebar from "./_components/LeftSidebar";
import PromptBar from "./_components/PromptBar";
import { useState } from "react";

const HomePage = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="relative grid grid-cols-12">
        <div className={`${isOpen ? "col-span-2" : ""}`}>
          <Header isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
        <div
          className={`${isOpen ? "col-span-10 mt-10" : "col-span-12 mt-10"}`}
        >
          <PromptBar isOpen={isOpen} />
        </div>
      </div>
    </>
  );
};

export default HomePage;
