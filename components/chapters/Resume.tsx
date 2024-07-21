"use client";

import { useRef } from "react";

import { Card, CardContent } from "@/components/ui/card";

import { motion, Variants } from "framer-motion";
import Image from "next/image";

import "./resume.css";

import DarkBackground from "@/public/assets/resume/background-dark.jpg";
import LightBacground from "@/public/assets/resume/background-light.jpg";

type ResumeContent = {
  title: string;
  description: string;
  imagePath: string;
  period: string;
  subtitle?: string;
}[];

const cardVariants: Variants = {
  offscreen: {
    x: 700,
    rotate: -10,
  },
  onscreen: {
    x: 200,
    rotate: -10,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 1.2,
    },
  },
};

const textVariant: Variants = {
  offscreen: {
    opacity: 0,
  },
  onscreen: {
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 1.2,
    },
  },
};

const backgroundVariant: Variants = {
  offscreen: {
    opacity: 0,
  },
  onscreen: {
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 1.2,
    },
  },
};

const Resume = () => {
  const work: ResumeContent = [
    {
      title: "Deutsche Telekom Cloud Services",
      description: "I work right now",
      imagePath: "/assets/resume/DTCS2.png",
      period: "2021 - Present",
    },
    {
      title: "Reversing Labs",
      description: "",
      imagePath: "/assets/resume/RL3.svg",
      period: "2017 - 2021",
    },
  ];

  const education: ResumeContent = [
    {
      title: "Faculty of Electronical Engineering and Computing",
      description: "Masters Degree",
      imagePath: "/assets/resume/FER.png",
      period: "2017-2019",
    },
    {
      title: "Deutsche Telekom Cloud Services",
      description: "Bachelors Degree",
      imagePath: "/assets/resume/FER.png",
      period: "2013 - 2017",
    },
  ];

  const scrollRef = useRef(null);

  // Photo by Pawel Czerwinski on Unsplash

  return (
    <section id="resume" className="h-full pt-[110px]">
      <div className="container mx-auto h-full">
        <div className="flex xl:flex-row flex-col items-center xl:justify-start justify-center relative mt-10">
          <h2 className="h2">Work</h2>
        </div>
      </div>
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{
          root: scrollRef,
          amount: 0.22,
        }}
      >
        <motion.div variants={backgroundVariant} className="overflow-x-clip">
          <Image
            className="hidden dark:block opacity-0 xl:opacity-50 h-full w-full absolute"
            src={DarkBackground.src}
            alt="dark-mode-image"
            width={0}
            height={100}
            sizes="100%"
            style={{ width: "100%", height: "auto" }}
          />
          <Image
            className="mb-4 block dark:hidden opacity-0 xl:opacity-50 h-full w-full absolute"
            src={LightBacground.src}
            alt="light-mode-image"
            width={0}
            height={100}
            sizes="100%"
            style={{ width: "100%", height: "auto" }}
          />
          <div className="container mx-auto h-full">
            <motion.div
              initial="offscreen"
              whileInView="onscreen"
              viewport={{
                root: scrollRef,
                amount: 1,
              }}
            ></motion.div>
            {work.map((content, index) => (
              <motion.div
                key={`work - ${index}`}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{
                  root: scrollRef,
                  amount: 1,
                }}
              >
                <div className="flex xl:flex-row flex-col items-center xl:justify-start justify-center relative">
                  <div className="xl:order-1 order-2">
                    <motion.div variants={textVariant}>
                      Lore ipsum Lore ipsum Lore ipsum Lore ipsum Lore ipsum
                      Lore ipsum Lore ipsum Lore ipsum
                    </motion.div>
                  </div>

                  <motion.div className="xl:order-2" variants={cardVariants}>
                    <Card className="flex items-center justify-center bg-white rounded-3xl w-[300px] h-[430px] text-[164px] glass-card">
                      <CardContent>
                        <Image
                          src={content.imagePath}
                          alt="dark-mode-image"
                          width={0}
                          height={100}
                          sizes="100%"
                          style={{ width: "100%", height: "150px" }}
                        />
                      </CardContent>
                    </Card>
                  </motion.div>
                </div>
              </motion.div>
            ))}

            <div className="flex xl:flex-row flex-col items-center xl:justify-start justify-center relative mt-10">
              <h2 className="h2">Education</h2>
            </div>
            {education.map((content, index) => (
              <motion.div
                key={index}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{
                  root: scrollRef,
                  amount: 1,
                }}
              >
                <div className="flex xl:flex-row flex-col items-center xl:justify-start justify-center relative">
                  <div className="xl:order-1 order-2">
                    <motion.div variants={textVariant}>
                      Lore ipsum Lore ipsum Lore ipsum Lore ipsum Lore ipsum
                      Lore ipsum Lore ipsum Lore ipsum
                    </motion.div>
                  </div>

                  <motion.div className="xl:order-2" variants={cardVariants}>
                    <Card className="flex items-center justify-center bg-white rounded-3xl w-[300px] h-[430px] text-[164px] glass-card">
                      <CardContent>
                        <Image
                          src={content.imagePath}
                          alt="dark-mode-image"
                          width={0}
                          height={100}
                          sizes="100%"
                          style={{ width: "100%", height: "auto" }}
                        />
                      </CardContent>
                    </Card>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Resume;
