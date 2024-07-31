"use client";

import { TypeAnimation } from "react-type-animation";

const Typewriter = () => {
  return (
    <TypeAnimation
      preRenderFirstString={true}
      className="text-2xl sm:text-3xl"
      sequence={[
        500,
        "Full-Stack Developer", // initially rendered starting point
        1000,
        "Software Engineer",
        1000,
        "Problem Solver",
        500,
      ]}
      wrapper="span"
      speed={50}
      style={{ display: "inline-block" }}
      repeat={Infinity}
    />
  );
};

export default Typewriter;
