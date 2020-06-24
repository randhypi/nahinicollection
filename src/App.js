import React from "react";
import "./Style.css";
import "animate.css";
import Header from "./components/header/Header";
// import Title1 from "./components/owlcarousel/Title1";
import Title2 from "./components/title2/Title2";
import Footer from "./components/footer/Footer";
import Follow from "./components/screen/Follow";
import { Helmet } from "react-helmet";

function App() {
  return (
    <div className="App">
      <Helmet>
        <meta charSet="utf-8" />
        <title>My Title</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <Header />
      <Follow />
      <Title2 />
      <Footer />
    </div>
  );
}

export default App;
