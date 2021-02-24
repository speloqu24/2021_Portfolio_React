import React from "react";
// import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import Resume from "./components/Resume";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
// import other components here

function App() {
  return (
    <>
      <Header />;
      <Home />
      <Resume />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
