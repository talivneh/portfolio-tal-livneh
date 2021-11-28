import React, { useState } from "react";
import Typing from "react-typing-animation";
import Typewriter from "typewriter-effect";
import Typed from "typed.js";
import Aos from "aos";
import "aos/dist/aos.css";

export default function TypingComp() {
  const [lastCursor, setLastCursor] = useState(
    "<span className='text-3xl animate-pulse font-bold'> &#8595;</span>"
  );
  const [secondLineOn, setSecondLineOn] = useState(false);
  const [thirdLineOn, setThirdLineOn] = useState(false);

  const firstLine = (typewriter) => {
    typewriter
      .typeString("Hi,")
      .pauseFor(500)
      .typeString("I'm Tal")
      .pauseFor(1000)
      .callFunction(() => {
        setSecondLineOn(true);
      })
      .start();
  };

  const secondLine = (typewriter) => {
    typewriter
      .typeString("A self taught Full Stack developer.")
      .pauseFor(300)
      .deleteChars(21)
      .typeString("Front End developer <br /> (with Back End knowledge).")
      .pauseFor(1000)
      .callFunction(() => {
        setThirdLineOn(true);
      })
      .start();
  };

  const thirdLine = (typewriter) => {
    typewriter.typeString("").start();
  };

  return (
    <>
      <div>
        <div className="flex flex-col sm:flex-row text-5xl sm:text-7xl font-bold leading-normal w-full">
          {secondLineOn ? (
            "Hi,I'm Tal"
          ) : (
            <Typewriter
              options={{ delay: 80 }}
              onInit={(typewriter) => {
                return <h1>{firstLine(typewriter)}</h1>;
              }}
            />
          )}
        </div>
      </div>

      <div className="mt-5 ml-2">
        <div className="text-lg sm:text-xl font-bold w-100 h-100">
          {secondLineOn &&
            (thirdLineOn ? (
              <div>
                A self taught Front End developer <br /> (with Back End
                knowledge).
              </div>
            ) : (
              <Typewriter
                options={{ delay: 50, deleteSpeed: 10 }}
                onInit={(typewriter) => {
                  return <h1>{secondLine(typewriter)}</h1>;
                }}
              />
            ))}
          <span className="text-tdgray flex mt-10 ml-20">
            <a href="#About" className="mr-5 flex">
              {thirdLineOn && (
                <>
                  <span data-aos="fade-right"> Litle more about me... </span>
                  <Typewriter
                    options={{ delay: 300, cursor: lastCursor }}
                    onInit={(typewriter) => {
                      return <h1>{thirdLine(typewriter)}</h1>;
                    }}
                  />
                </>
              )}
            </a>
          </span>
        </div>
      </div>
    </>
  );
}
