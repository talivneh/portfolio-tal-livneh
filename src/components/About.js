import React, { useEffect } from "react";
import Section from "./Section";
import Tag from "./Tag";
import Aos from "aos";
import "aos/dist/aos.css";
import { aboutMe } from "../contentText/content";

function About() {
  const topSkills = ["JavaScript", "HTML", "CSS", "React.JS", "Next.JS"];
  const experiencedSkills = ["Node.JS", "jQuery", "C#"];

  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <Section
      bgColor="bg-tgray"
      content={
        <div
          className="flex flex-col h-screen justify-center items-center text-twhite"
          id="About"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 justify-items-center items-center ">
            <h1 className="sm:flex-row text-3xl sm:text-5xl font-bold">
              About Me
            </h1>
            <img
              src="files/potfolioPic.jpg"
              className="w-28 h-28 rounded-full"
            />
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 w-full justify-around mt-4 sm:mt-14 text-md sm:text-xl overflow-hidden">
            <div
              className="inline-grid col-span-3 sm:col-span-2"
              data-aos="fade-right"
            >
              <div className="mx-4 sm:mx-14">
                <p>{aboutMe[0]}</p>
                <p className="my-2">{aboutMe[1]}</p>
                <p>{aboutMe[2]}</p>

                <div className="mt-4 sm:mt-8 h-10">
                  <a
                    className="bg-twhite rounded-md p-2 text-tdgray shadow-md hover:shadow-none"
                    href="files/Tal Livneh_CV.pdf"
                    target="_blank"
                  >
                    View My Full Resume
                  </a>
                </div>
              </div>
            </div>
            <div
              className="inline-grid col-span-3 mt-14 mx-4 sm:col-span-1 sm:mt-0 sm:mx-2 content-start px-4"
              data-aos="fade-left"
            >
              <h2 className="font-bold">My Top Skills</h2>
              <div className="flex flex-wrap">
                {topSkills.map((skill, index) => (
                  <div className="mx-1 my-2 cursor-default" key={index}>
                    <Tag name={topSkills[index]} type="topSkill" />
                  </div>
                ))}
              </div>
              <h2 className="font-bold mt-4">Also Experienced In</h2>
              <div className="flex flex-wrap">
                {experiencedSkills.map((skill, index) => (
                  <div className="mx-1 my-2 cursor-default" key={index}>
                    <Tag name={experiencedSkills[index]} type="skill" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      }
    />
  );
}

export default About;
