import React from "react";
import ReactDOM from "react-dom";
import "../src/style.css";
import About from "./component/About";
import Footer from "./component/Footer";

import Header from "./component/Header";
import Hero from "./component/Hero";
import Services from "./component/Services";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Services />
      <Footer />
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
