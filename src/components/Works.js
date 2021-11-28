import React from "react";
import Section from "./Section";
import WorkCard from "./WorkCard";
import worksList from "../contentText/works.json";

export default function Works() {
  return (
    <Section
      bgColor="bg-tdgray"
      content={
        <div className="flex flex-col justify-center" id="Works">
          <h1 className="sm:flex-row text-3xl sm:text-5xl font-bold my-10 text-twhite text-center">
            Latest Works
          </h1>
          <div className="grid grid-cols-1 xl:grid-cols-2 min-h-screen justify-items-center gap-10 mt-10 mb-20">
            {worksList.map((work, index) => (
              <WorkCard
                key={index}
                headline={work.headLine}
                img={work.image}
                description={work.description}
                tags={work.tags}
                src={work.src}
                aos={index % 2 ? "flip-left" : "flip-right"}
              />
            ))}
          </div>
        </div>
      }
    />
  );
}
