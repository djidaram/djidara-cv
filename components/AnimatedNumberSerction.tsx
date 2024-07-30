"use client";

import React from "react";
import _ from "lodash";

import dynamic from "next/dynamic";
const AnimatedNumbers = dynamic(() => import("react-animated-numbers"), {
  ssr: false,
});

const numAchivment = [
  {
    metric: "Yers of experience",
    value: 5,
    postfix: "+",
  },
  {
    metric: "Projects completed",
    value: 7,
  },
  {
    metric: "Technology experience",
    value: 15,
    postfix: "+",
  },
];

const AnimatedNumberSection = () => {
  return (
    <div className="container">
      <div className="flex xl:flex-row flex-col xl:justify-between">
        {_.map(numAchivment, (achivment, index) => (
          <div
            key={`num-achievment-${index}`}
            className="flex flex-col xl:justify-start items-center justify-center mx-4 my-4"
          >
            <h2 className="h2 flex flex-row">
              <AnimatedNumbers
                includeComma
                animateToNumber={achivment.value}
                locale="eu"
                transitions={(index) => ({
                  delay: 0.5,
                  type: "spring",
                  duration: 3 - index + 0.5,
                })}
              />
              {achivment.postfix}
            </h2>
            <p className="text-base">{achivment.metric}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimatedNumberSection;
