import React, { useRef } from "react";
import About from "./container/About/about";
import Contact from "./container/ContactMe/contact";
import Footer from "./container/Footer/Footer";
import Header from "./container/Header/Header";
import LandingPage from "./container/LandingPage/landingPage";
import Resume from "./container/MyResume/resume";
import Project from "./container/Projects/project";
import Skills from "./container/Skills/skills";

/**
 * @author
 * @function App
 **/

const App = (props) => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const ref5 = useRef(null);

  return (
    <div>
      <Header ref1={ref1} ref2={ref2} ref3={ref3} ref4={ref4} ref5={ref5} />
      <LandingPage refProp={ref1} />
      <About refProp={ref2} />
      <Skills refProp={ref3} />
      <Resume refProp={ref4} />
      <Project />
      <Contact refProp={ref5} />
      <Footer refProp={ref1} />
    </div>
  );
};

export default App;
