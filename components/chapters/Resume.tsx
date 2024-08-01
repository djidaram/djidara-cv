"use client";

import { ReactNode, useEffect, useRef, useState } from "react";
import Image from "next/image";

import _ from "lodash";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { motion, Variants } from "framer-motion";

import "../glass.css";

// Photo by Pawel Czerwinski on Unsplash
import DarkBackground from "@/public/assets/resume/background-dark.jpg";
import LightBacground from "@/public/assets/resume/background-light.jpg";

type ResumeContent = {
  title: string;
  description: ReactNode;
  imagePath: string;
  period: string;
  subtitle?: string;
}[];

type WindowSize = { height: number | null; width: number | null };

const experience: ResumeContent = [
  {
    title: "Deutsche Telekom Cloud Services",
    description: (
      <div>
        <p className="mb-2">
          In my role, I worked extensively with a diverse range of advanced
          technologies, making substantial contributions to both technical
          development and project management.
        </p>

        <br />

        <Tabs defaultValue="development">
          <TabsList>
            <TabsTrigger value="development">Development</TabsTrigger>
            <TabsTrigger value="client">Client Engagement</TabsTrigger>
          </TabsList>
          <Card className="glass-card mt-2">
            <div className="p-4">
              <TabsContent value="development">
                <div>
                  <strong>Frontend Development:</strong>
                  <ul className="mb-2">
                    <li>
                      Utilized <strong className="text-main">React</strong> to
                      build sophisticated and responsive user interfaces.
                    </li>
                  </ul>

                  <strong>Backend Development:</strong>
                  <ul className="mb-2">
                    <li>
                      Employed <strong className="text-main">Java</strong>,{" "}
                      <strong className="text-main">Python</strong>, and{" "}
                      <strong className="text-main">NestJS</strong> to develop
                      high-performance backend systems.
                    </li>
                  </ul>

                  <strong>Database Management:</strong>
                  <ul>
                    <li>
                      Managed time series databases such as{" "}
                      <strong className="text-main">VictoriaMetrics</strong> and{" "}
                      <strong className="text-main">Prometheus</strong> for
                      handling large-scale data.
                    </li>
                    <li>
                      Ensured efficient and scalable data solutions with
                      relational databases like{" "}
                      <strong className="text-main">MySQL</strong> and{" "}
                      <strong className="text-main">PostgreSQL</strong>.
                    </li>
                  </ul>
                </div>
              </TabsContent>
              <TabsContent value="client">
                <>
                  <strong>Client Interaction:</strong>
                  <ul className="mb-2">
                    <li>
                      Engaged deeply with clients, effectively translating their
                      needs into tailored, innovative solutions.
                    </li>
                  </ul>

                  <strong>Research and Problem-Solving:</strong>
                  <ul>
                    <li>Led critical research initiatives.</li>
                    <li>Played a key role in addressing complex challenges.</li>
                  </ul>
                </>
              </TabsContent>
            </div>
          </Card>
        </Tabs>
        <br />

        <h4 className="h4 mt-2 mb-2">Skills and Impact</h4>
        <p>
          This role allowed me to blend technical proficiency with strategic
          customer interaction, significantly enhancing my skills in both
          technology and communication while driving impactful project outcomes
          and fostering data-driven innovation.
        </p>
      </div>
    ),
    imagePath: "/assets/resume/DTCS2.png",
    period: "2021 - Present",
  },
  {
    title: "Reversing Labs",
    description: (
      <div>
        <Tabs defaultValue="intern">
          <TabsList>
            <TabsTrigger value="intern">Threat Analyst Intern</TabsTrigger>
            <TabsTrigger value="full-stack">Full-Stack Developer</TabsTrigger>
          </TabsList>
          <Card className="glass-card mt-2">
            <div className="p-4">
              <TabsContent value="intern">
                <p>
                  At the start of my career as a Threat Analyst intern, I dived
                  into the world of monitoring and maintaining PostgreSQL
                  databases and created automation tools to speed up the process
                  of identifying and mapping new cybersecurity threats.
                </p>
              </TabsContent>
              <TabsContent value="full-stack">
                <p>
                  By the end of my time there, I had evolved into a full-stack
                  developer, seamlessly integrating all these skills into a
                  cohesive development approach. This role was a crucial step in
                  my journey, setting the stage for my career in software
                  engineering.
                </p>
              </TabsContent>
            </div>
          </Card>
        </Tabs>

        <br />
        <h4 className="h4 mb-2">Technologies and Development</h4>
        <p>
          Along the way, I picked up a range of technologies that were key in
          shaping my path to becoming a full-stack engineer. I worked with:
        </p>
        <ul>
          <li>
            <strong className="text-main">Python</strong>
          </li>
          <li>
            <strong className="text-main">Golang</strong>
          </li>
          <li>
            <strong className="text-main">RabbitMQ</strong>
          </li>
          <li>
            <strong className="text-main">Docker</strong>
          </li>
          <li>
            <strong className="text-main">MongoDB</strong>
          </li>
          <li>
            <strong className="text-main">React</strong>
          </li>
        </ul>
      </div>
    ),
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

const Resume = () => {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: null,
    height: null,
  });

  const cardVariants: Variants = {
    offscreen: {
      x: 700,
      y: -20,
      rotate: -10,
    },
    onscreen: {
      x: 80,
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
      opacity: windowSize.width && windowSize.width <= 420 ? 1 : 0,
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
      opacity: windowSize.width && windowSize.width <= 420 ? 1 : 0,
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
    <section id="resume" className="h-full pt-[50px]">
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{
          root: scrollRef,
          amount: windowSize.width && windowSize.width <= 640 ? 0 : 0.2,
        }}
      >
        {/* Background Imgage */}
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

            {/* experience section text */}
            {_.map(experience, (resumeContent, index) => (
              <div key={`experience - ${index}`} className="mt-4 xl:mt-8">
                <div className="flex xl:flex-row flex-col items-center xl:justify-start justify-center relative">
                  <div className="xl:order-1 order-2 mt-10 xl:mt-0">
                    <motion.div
                      variants={textVariant}
                      className="text-justify"
                      initial="offscreen"
                      whileInView="onscreen"
                      viewport={{
                        root: scrollRef,
                        amount:
                          windowSize.width && windowSize.width <= 640 ? 0 : 0.4,
                      }}
                    >
                      <div className="flex flex-col xl:items-start items-center">
                        <h4 className="h4 pb-4">{resumeContent.period}</h4>
                        {resumeContent.description}
                      </div>
                    </motion.div>
                  </div>
                  <motion.div
                    className="xl:order-2"
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{
                      root: scrollRef,
                      amount:
                        windowSize.width && windowSize.width <= 640 ? 0.1 : 0.4,
                    }}
                  >
                    <motion.div variants={cardVariants}>
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
                  </motion.div>
                </div>
                {/* </motion.div> */}
              </div>
            ))}

            <div className="flex xl:flex-row flex-col items-center xl:justify-start justify-center relative mt-10">
              <h2 className="h2 capitalize">education</h2>
            </div>

            {/* This section Is for education text */}
            <div className="flex xl:flex-row flex-col items-center xl:justify-start justify-center relative">
              <div className="xl:order-1 order-2 w-full">
                <motion.div variants={textVariant} className="text-justify">
                  {_.map(education, (resumeContent, index) => (
                    <div
                      className="flex flex-row items-center gap-4 mb-4"
                      key={`education - ${index}`}
                    >
                      <h4 className="h4">{resumeContent.period}</h4>
                      {resumeContent.description}
                    </div>
                  ))}
                </motion.div>
              </div>

              {/* This section Is for education Card */}

              <motion.div
                className="xl:order-2"
                initial="offscreen"
                whileInView="onscreen"
                viewport={{
                  root: scrollRef,
                  amount:
                    windowSize.width && windowSize.width <= 640 ? 0.1 : 0.4,
                }}
              >
                <motion.div variants={cardVariants}>
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
              </motion.div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Resume;
