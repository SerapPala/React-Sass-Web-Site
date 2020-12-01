import React from 'react';
import "./sass/main.scss"
import Header from "./components/Header"
import Navbar from "./components/Navbar"
import About from "./components/About"
import Works from "./components/Works"
import Blank from "./components/Blank"
import Portfolyo from "./components/Portfolyo"

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <About />
      <Works />
      <Blank />
      <Portfolyo />
    </div>
  );
}

export default App;
