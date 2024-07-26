"use client";

import { useEffect, useRef, useState } from "react";

import { Card, CardContent, CardFooter } from "@/components/ui/card";

import { motion, Variants } from "framer-motion";
import Image from "next/image";

import "../glass.css";

// Photo by Pawel Czerwinski on Unsplash
import DarkBackground from "@/public/assets/resume/background-dark.jpg";
import LightBacground from "@/public/assets/resume/background-light.jpg";
import _ from "lodash";

type ResumeContent = {
  title: string;
  description: string;
  imagePath: string;
  period: string;
  subtitle?: string;
}[];

type WindowSize = { height: number | null; width: number | null };

const cardVariants: Variants = {
  offscreen: {
    x: 700,
    y: -20,
    rotate: -10,
  },
  onscreen: {
    x: 100,
    y: -20,
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
    whiteSpace: "pre-line",
  },
};

const experience: ResumeContent = [
  {
    title: "Deutsche Telekom Cloud Services",
    description:
      "In this role, I worked extensively with a diverse range of advanced technologies, making substantial contributions to both technical development and project management.\n" +
      "\nI utilized React to build sophisticated and responsive user interfaces, and employed Java, Python, and NestJS to develop high-performance backend systems. My expertise extended to managing time series databases such as VictoriaMetrics and Prometheus for handling large-scale data, as well as relational databases like MySQL and PostgreSQL to ensure efficient and scalable data solutions.\n\n" +
      "Additionally, I engaged deeply with clients, effectively translating their needs into tailored, innovative solutions. I led critical research initiatives and played a key role in addressing complex challenges. This role allowed me to blend technical proficiency with strategic customer interaction, significantly enhancing my skills in both technology and communication while driving impactful project outcomes and fostering data-driven innovation.",
    imagePath: "/assets/resume/DTCS2.png",
    period: "2021 - Present",
  },
  {
    title: "Reversing Labs",
    description:
      "At the start of my career as a Threat Analyst, I dived into the world of monitoring and maintaining PostgreSQL databases and created automation tools to speed up the process of identifying and mapping new cybersecurity threats. \n\n" +
      "Along the way, I picked up a range of technologies that were key in shaping my path to becoming a full-stack engineer. I worked with Python, Golang, RabbitMQ, Docker, MongoDB, and React, which gave me a solid grounding in both backend and frontend development. By the end of my time there, I had evolved into a full-stack developer, seamlessly integrating all these skills into a cohesive development approach. This role was a crucial step in my journey, setting the stage for my career in software engineering.",
    imagePath: "/assets/resume/RL3.svg",
    period: "2017 - 2021",
  },
];

const education: ResumeContent = [
  {
    title: "Faculty of Electrical Engineering and Computing",
    description: "Masters of Science in Computing.",
    imagePath: "/assets/resume/FER.png",
    period: "2017 - 2019",
  },
  {
    title: "Faculty of Electrical Engineering and Computing",
    description: "Bachelor of Science in Computing.",
    imagePath: "/assets/resume/FER.png",
    period: "2013 - 2017",
  },
];

const resumeContent = { experience, education };

const Resume = () => {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: null,
    height: null,
  });

  const scrollRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section id="resume" className="h-full pt-[110px]">
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{
          root: scrollRef,
          amount: windowSize.width && windowSize.width <= 640 ? 0 : 0.2,
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
            <div className="flex xl:flex-row flex-col items-center xl:justify-start justify-center relative mt-10">
              <h2 className="h2 capitalize">experience</h2>
            </div>

            {_.map(experience, (resumeContent, index) => (
              <motion.div
                key={`experience - ${index}`}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{
                  root: scrollRef,
                  amount:
                    windowSize.width && windowSize.width <= 640 ? 0.3 : 0.8,
                }}
              >
                <div className="flex xl:flex-row flex-col items-center xl:justify-start justify-center relative">
                  <div className="xl:order-1 order-2">
                    <motion.div variants={textVariant} className="text-justify">
                      <div className="flex flex-col">
                        <h4 className="h4 pb-4">{resumeContent.period}</h4>
                        <div>{resumeContent.description}</div>
                      </div>
                    </motion.div>
                  </div>
                  <motion.div className="xl:order-2" variants={cardVariants}>
                    <Card className="flex flex-col items-center justify-center bg-white rounded-3xl w-[300px] h-[430px] glass-card text-center">
                      <CardContent>
                        <Image
                          src={resumeContent.imagePath}
                          alt="dark-mode-image"
                          width={0}
                          height={100}
                          sizes="100%"
                          style={{ width: "100%", height: "150px" }}
                        />
                      </CardContent>
                      <CardFooter>{resumeContent.title}</CardFooter>
                    </Card>
                  </motion.div>
                </div>
              </motion.div>
            ))}

            <div className="flex xl:flex-row flex-col items-center xl:justify-start justify-center relative mt-10">
              <h2 className="h2 capitalize">education</h2>
            </div>

            <motion.div
              initial="offscreen"
              whileInView="onscreen"
              viewport={{
                root: scrollRef,
                amount: windowSize.width && windowSize.width <= 640 ? 0.3 : 0.8,
              }}
            >
              <div className="flex xl:flex-row flex-col items-center xl:justify-start justify-center relative">
                <div className="xl:order-1 order-2 w-full">
                  <motion.div variants={textVariant} className="text-justify">
                    {_.map(education, (resumeContent, index) => (
                      <div
                        className="flex flex-row items-center gap-4 mb-4"
                        key={`education - ${index}`}
                      >
                        <h4 className="h4">{resumeContent.period}</h4>
                        <div>{resumeContent.description}</div>
                      </div>
                    ))}
                  </motion.div>
                </div>
                <motion.div className="xl:order-2" variants={cardVariants}>
                  <Card className="flex flex-col items-center justify-center bg-white rounded-3xl w-[300px] h-[430px] glass-card text-center">
                    <CardContent>
                      <Image
                        src={_.get(education, 0).imagePath}
                        alt="dark-mode-image"
                        width={0}
                        height={100}
                        sizes="100%"
                        style={{ width: "100%", height: "150px" }}
                      />
                    </CardContent>
                    <CardFooter>{_.get(education, 0).title}</CardFooter>
                  </Card>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Resume;
