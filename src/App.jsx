import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Testimonalis from "./components/Testimonalis/Testimonalis";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <div className="w-full overflow-hidden">
      <Navbar />
      <Header />
      <About />
      <Projects />
      <Testimonalis/>
      <Contact/>
    </div>
  );
}

export default App;
