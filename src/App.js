import React from "react";
import Features from "./components/Features";
import Header from "./components/Header";
import Services from "./components/Services";


function App() {
  return (
    <div className="App">
      <Header />
      <div>
        <h1>Features</h1>
        <p>Here are some features of the software</p>
      </div>
      <Features />
      <Services />
    </div>
  );
}

export default App;
