import "./App.css";
import { useRef, useEffect, useState } from "react";
import Top from "./components/Top";
import About from "./components/About";
import Works from "./components/Works";
import ContactMe from "./components/ContactMe";
import ArrowUp from "./components/ArrowUp";
import "tailwindcss/tailwind.css";

function App() {
  const showArrowRef = useRef(null);
  const [showArrowState, setShowArrowState] = useState(false);

  const rrr = window.addEventListener("scroll", () => {
    window.pageYOffset >= showArrowRef.current.offsetTop
      ? setShowArrowState(true)
      : setShowArrowState(false);
  });

  return (
    <div className="App">
      {showArrowState && <ArrowUp />}
      <Top />
      <div ref={showArrowRef} />
      <About />
      <Works id="Works" />
      <ContactMe id="ContactMe" />
    </div>
  );
}

export default App;
