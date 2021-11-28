import React from "react";

export default function Section({ bgColor, content }) {
  return <div className={`relative h-auto ${bgColor}`}>{content}</div>;
}
