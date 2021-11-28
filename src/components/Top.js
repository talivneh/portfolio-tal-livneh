import React, { useEffect, useState } from "react";
import Section from "./Section";
import Typing from "react-typing-animation";

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
          className={`flex flex-col h-screen ${
            windowSize < 1341 && "justify-center items-center"
          }`}
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
            className={`text-misty fixed ${
              windowSize > 1340 ? "mt-80 ml-80 pl-28" : "w-10/12 h-64"
            }`}
          >
            <Typing>
              <Typing.Delay ms={900} />
              <div className="flex flex-col sm:flex-row text-5xl sm:text-7xl font-bold leading-normal w-full">
                <h1 className="mr-3">Hi,</h1>
                <Typing.Delay ms={500} />
                <h1>I'm Tal</h1>
              </div>
              <div className="mt-5 ml-2">
                <Typing.Delay ms={1000} />
                <div className="text-lg sm:text-xl font-bold w-100 h-100">
                  <span>A self taught Full Stack developer.</span>
                  <Typing.Backspace count={21} delay={500} />
                  <span>
                    Front End developer
                    <br />
                    <span className="text-sm">(with Back End knowledge).</span>
                    <br />
                  </span>
                </div>
                <Typing.Delay ms={2000} />
                <div className="mt-10 ml-24">
                  <span className="text-tdgray">
                    Litle more about me...
                    <span className="text-3xl animate-pulse font-bold">
                      {" "}
                      &#8595;
                    </span>
                  </span>
                </div>
              </div>
            </Typing>
          </div>
        </div>
      }
    />
  );
}
