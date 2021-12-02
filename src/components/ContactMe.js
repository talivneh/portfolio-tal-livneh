import React, { useEffect } from "react";
import Section from "./Section";
import Aos from "aos";
import "aos/dist/aos.css";

export default function ContactMe() {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <Section
      bgColor="bg-tblack"
      content={
        <div
          id="ContactMe"
          className="flex flex-col h-screen text-twhite justify-center items-center"
          data-aos="zoom-in-up"
        >
          <h1 className="sm:flex-row text-3xl sm:text-5xl my-5">Contact Me</h1>
          <p className="mb-10 text-xl font-bold">
            Feel free to contact me for any reason!
          </p>
          <section className="ContactMeSection text-lg">
            <span className="flex flex-col">
              <span data-aos="fade-up">
                <i className="fas fa-phone-square-alt"></i> Phone:{" "}
                <a href="tel: +972-0544680050"> 0544680050</a>
              </span>
              <span data-aos="fade-up">
                <i className="fas fa-envelope"></i> Email:{" "}
                <a href="mailto: talivneh8@gmail.com" target="_blank">
                  talivneh8@gmail.com
                </a>
              </span>
              <span data-aos="fade-up">
                <i className="fab fa-linkedin"></i> LinkedIn:{" "}
                <a
                  href="https://www.linkedin.com/in/tal-livneh"
                  target="_blank"
                >
                  Tal Livneh's Profile
                </a>
              </span>
              <span data-aos="fade-up">
                <i className="fab fa-github"></i> GitHub:{" "}
                <a href="https://github.com/talivneh" target="_blank">
                  talivneh
                </a>
              </span>
            </span>
          </section>
        </div>
      }
    />
  );
}
