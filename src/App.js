import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
// import Resume from "./components/Resume";
import Footer from "./components/Footer";
// import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";
// import other components here
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Route exact path="/" component={Home} />
        {/* <Route exact path="/about" component={About} /> */}
        {/* <Route exact path="/resume" component={Resume} /> */}
        <Route exact path="/projects" component={Portfolio} />
        {/* <Route exact path="/contact" component={Contact} /> */}

        {/* <Route exact path="/about" component={About} />
        <Route exact path="/discover" component={Discover} />
        <Route exact path="/search" component={Search} /> */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
