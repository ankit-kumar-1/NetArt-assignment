import React from "react";
import Logo from "./components/Logo";
import Body from "./components/Body";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="bg-gradient-to-b from-yellow-50 to-yellow-100">
      <div className=" mx-8">
        <Logo />
      </div>
      <div className=" mx-8">
        <Body />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
