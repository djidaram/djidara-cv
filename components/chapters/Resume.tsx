"use client";

import { useEffect, useRef, useState } from "react";

import { Card, CardContent, CardFooter } from "@/components/ui/card";

import { motion, Variants } from "framer-motion";
import Image from "next/image";

import "../glass.css";

// Photo by Pawel Czerwinski on Unsplash
import DarkBackground from "@/public/assets/resume/background-dark.jpg";
import LightBacground from "@/public/assets/resume/background-light.jpg";

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
  },
};

const work: ResumeContent = [
  {
    title: "Deutsche Telekom Cloud Services",
    description:
      "This position enabled me to get in touch with many tech stacks. Ranging from Ract as frontend, Java/Python/Nestjs as backend, and Victoria Metrics and Prometheus as time series database and mysql/postgre as relational database. Also Kafka, Airflow, S3, etc., were a part of the projects. Apart from technical part, comunication with customers, was also a big part of the role, research and cataloging data from data lake, and exploring ML waters.",
    imagePath: "/assets/resume/DTCS2.png",
    period: "2021 - Present",
  },
  {
    title: "Reversing Labs",
    description:
      "As a member of the Threat Analyst team, I worked on monitoring and maintaining the Postgre database, developing automatizations for internal use to speed up the process of finding and mapping new cybersecurity threats, Revering and analysis of files, and Data analysis of some of the records from the RL database which consists of more than 10 billion records. Technologies and skills used: Python, Golang, RabbitMQ, Docker, MongoDB, PostgreSQL, React, and Flux. And for fun, being in mentoring/organization team for internal CTFs.",
    imagePath: "/assets/resume/RL3.svg",
    period: "2017 - 2021",
  },
];

const education: ResumeContent = [
  {
    title: "Faculty of Electrical Engineering and Computing",
    description:
      "Masters of Science in Computing, Computer Science. It offers a robust blend of theory and practice. Core courses cover algorithms, data structures, computer architecture, operating systems, and databases. Electives include AI, machine learning, networks, cybersecurity, software engineering, HCI, and data science. Students engage in research projects, culminating in a thesis. Practical experience is emphasized through industry projects, internships, and labs. The program also develops soft skills and covers entrepreneurship, preparing students for diverse careers in academia and industry.",
    imagePath: "/assets/resume/FER.png",
    period: "2017-2019",
  },
  {
    title: "Faculty of Electrical Engineering and Computing",
    description:
      "Bachelor of Science in Computing, Computer Science. Curriculum includes programming, algorithms, data structures, computer architecture, databases, operating systems, and software engineering. Mathematics courses such as calculus, linear algebra, and discrete mathematics are also integral to the program. The program includes elective courses, allowing students to specialize in areas such as artificial intelligence, computer networks, cybersecurity, and web development.",
    imagePath: "/assets/resume/FER.png",
    period: "2013 - 2017",
  },
];

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
          amount: windowSize.width && windowSize.width <= 640 ? 0 : 0.22,
        }}
      >
        <motion.div variants={backgroundVariant} className="overflow-x-clip">
          <Image
            className="hidden dark:block opacity-0 lg:opacity-50 h-full w-full absolute"
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
            {/* work section */}
            {work.map((content, index) => (
              <motion.div
                key={`work - ${index}`}
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
                    <motion.div variants={textVariant}>
                      {content.description}
                    </motion.div>
                  </div>

                  <motion.div className="xl:order-2" variants={cardVariants}>
                    <Card className="flex flex-col items-center justify-center bg-white rounded-3xl w-[300px] h-[430px] glass-card text-center">
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
                      <CardFooter>{content.title}</CardFooter>
                    </Card>
                  </motion.div>
                </div>
              </motion.div>
            ))}

            <div className="flex xl:flex-row flex-col items-center xl:justify-start justify-center relative mt-10">
              <h2 className="h2">Education</h2>
            </div>

            {/* education section */}
            {education.map((content, index) => (
              <motion.div
                key={index}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{
                  root: scrollRef,
                  amount:
                    windowSize.width && windowSize.width <= 640 ? 0.22 : 0.8,
                }}
              >
                <div className="flex xl:flex-row flex-col items-center xl:justify-start justify-center relative">
                  <div className="xl:order-1 order-2">
                    <motion.div variants={textVariant}>
                      {content.description}
                    </motion.div>
                  </div>

                  <motion.div className="xl:order-2" variants={cardVariants}>
                    <Card className="flex flex-col items-center justify-center bg-white rounded-3xl w-[300px] h-[430px] glass-card text-center">
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
                      <CardFooter>{content.title}</CardFooter>
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
