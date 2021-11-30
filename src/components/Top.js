import React, { useEffect, useState } from "react";
import Section from "./Section";
import Typing from "./Typing";

export default function Top() {
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWindowSize(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
  });

  return (
    <Section
      bgColor="twhite"
      content={
        <div
          id="Top"
          className="flex flex-col h-screen justify-center items-center"
        >
          {windowSize > 1340 ? (
            <video
              src="files/HeroVideo.mp4"
              autoPlay
              muted
              loop
              className="-z-1 fixed"
            />
          ) : (
            <img
              src="files/smallScreenImg.jpg"
              className="-z-1 fixed w-full min-h-screen"
            />
          )}
          <div
            className={`text-misty fixed h-64 flex flex-col  ${
              windowSize > 1340 ? "w-2/5 mt-20 ml-14" : "w-4/6"
            }`}
          >
            <Typing />
          </div>
        </div>
      }
    />
  );
}
