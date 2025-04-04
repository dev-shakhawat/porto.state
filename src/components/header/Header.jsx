
import React from "react";
import TopBar from "./TopBar";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className="flex flex-col w-full">
      <TopBar />
      <Navbar />
    </header>
  );
};

export default Header;
