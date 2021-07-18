import React from "react";
import About from "./container/About/about";
import LandingPage from "./container/LandingPage/landingPage";
import Skills from "./container/Skills/skills";

/**
 * @author
 * @function App
 **/

const App = (props) => {
  return (
    <div>
      <LandingPage />
      <About />
      <Skills />
    </div>
  );
};

export default App;
