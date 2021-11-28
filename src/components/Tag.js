import React from "react";

export default function Tag({ name, type }) {
  return (
    <div
      className={`text-twhite shadow-sm flex-initial px-2 text-center rounded-md ${
        type === "topSkill" ? `bg-torange` : `bg-tdgray`
      }`}
    >
      <span>{name}</span>
    </div>
  );
}
