import React from "react";
import Menu from "./components/Menu";
import Intro from "./components/Intro";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

import "./assets/styles/App.css";
import "./assets/styles/Responsive.css";

const App = () => {
  return (
    <div className="app">
      <header className="header">
        <Menu />
      </header>
      <main className="main">
        <Intro />
        <Skills />
        <hr />
        <Projects />
      </main>
      <footer className="footer">
        <Contact />
      </footer>
    </div>
  );
};

export default App;
