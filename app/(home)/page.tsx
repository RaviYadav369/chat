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
        <div className={}>
          <Header isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
        <div>
          <PromptBar isOpen={isOpen} />
        </div>
      </div>
    </>
  );
};

export default HomePage;
