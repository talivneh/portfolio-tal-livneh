import React, { useEffect } from "react";
import Tag from "./Tag";
import Aos from "aos";
import "aos/dist/aos.css";

export default function WorkCard({
  headline,
  img,
  description,
  tags,
  src,
  aos,
}) {
  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);

  return (
    <div
      className="flex flex-wrap rounded-md w-96 bg-twhite p-2 shadow-xl"
      data-aos={aos}
    >
      <a
        href={src}
        target="_blank"
        className="flex flex-col place-content-between"
      >
        <img src={img} className="w-96" />
        <h1 className="font-bold text-lg text-center">{headline}</h1>
        <p>{description}</p>
        <div className="flex flex-wrap">
          {tags.map((tag, index) => (
            <div className="mx-1 my-2" key={index}>
              <Tag key={index} name={tag} />
            </div>
          ))}
        </div>
      </a>
    </div>
  );
}
