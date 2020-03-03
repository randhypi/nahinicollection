import React from "react";
import "./Style.css";
import "animate.css";
import Header from "./components/header/Header";
import Title1 from "./components/owlcarousel/Title1";
import Title2 from "./components/title2/Title2";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Title1 />
      <Title2 />
      <Footer />
    </div>
  );
}

export default App;
