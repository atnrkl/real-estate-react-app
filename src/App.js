import React from "react";
import Navbar from "./components/Navbar";
import { GlobalStyles } from "./GlobalStyles";
import Hero from "./components/Hero";
import { HeroData } from "./data/HeroData";

const App = () => {
  return (
    <div>
      <GlobalStyles />
      <Navbar />
      <Hero data={HeroData} />
    </div>
  );
};

export default App;
