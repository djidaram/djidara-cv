"use client";

import _ from "lodash";
import { useState } from "react";
import AnimatedNumbers from "react-animated-numbers";

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
            className="flex flex-row xl:flex-col xl:justify-start items-center justify-center mx-4 my-4"
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
