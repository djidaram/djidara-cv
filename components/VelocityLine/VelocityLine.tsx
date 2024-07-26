"use client";

import "./styles.css";
import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from "framer-motion";
import { wrap } from "@motionone/utils";

import {
  DiReact,
  DiCss3,
  DiHtml5,
  DiPython,
  DiNodejsSmall,
  DiGit,
  DiDatabase,
} from "react-icons/di";

import {
  BiLogoTypescript,
  BiLogoGoLang,
  BiLogoDocker,
  BiLogoGoogleCloud,
  BiLogoKubernetes,
  BiLogoPostgresql,
  BiLogoRedux,
  BiLogoTailwindCss,
} from "react-icons/bi";
import { RiJavaLine, RiJavascriptFill, RiNextjsFill } from "react-icons/ri";
import { SiNestjs } from "react-icons/si";

interface ParallaxProps {
  children: any;
  baseVelocity: number;
}

function ParallaxText({ children, baseVelocity = 100 }: ParallaxProps) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  /**
   * This is a magic wrapping for the length of the text - you
   * have to replace for wrapping that works for you or dynamically
   * calculate
   */
  const x = useTransform(baseX, (v) => `${wrap(-10, -60, v)}%`);

  const directionFactor = useRef<number>(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    /**
     * This is what changes the direction of the scroll once we
     * switch scrolling directions.
     */
    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  /**
   * The number of times to repeat the child text should be dynamically calculated
   * based on the size of the text and viewport. Likewise, the x motion value is
   * currently wrapped between -20 and -45% - this 25% is derived from the fact
   * we have four children (100% / 4). This would also want deriving from the
   * dynamically generated number of children.
   */
  return (
    <div className="parallax">
      <motion.div className="scroller" style={{ x }}>
        <span>{children} </span>
        <span>{children} </span>
        <span>{children} </span>
        <span>{children} </span>
        <span>{children} </span>
        <span>{children} </span>
      </motion.div>
    </div>
  );
}

const VelocityLine = () => {
  const icons = (
    <div className="flex flex-row gap-10">
      <RiNextjsFill />
      <DiReact className="text-[#61dafb]" />
      <BiLogoRedux className="text-[#7649bd]" />
      <DiCss3 className="text-[#214ce5]" />
      <BiLogoTailwindCss className="text-[#38bdf8]" />
      <RiJavascriptFill className="text-[#f7d804]" />
      <BiLogoTypescript className=" text-[#2f74c0]" />
      <DiHtml5 className="text-[#e43d2f]" />
      <DiNodejsSmall className="text-[#53a040]" />
      <SiNestjs className="text-[#da214c]" />
      <DiPython />
      <RiJavaLine />
      <BiLogoGoLang className="text-[#09a9d2]" />
      <DiGit className="text-[#e84f32]" />
      <BiLogoGoogleCloud />
      <DiDatabase />
      <BiLogoPostgresql />
      <BiLogoDocker className="text-[#1c63ed]" />
      <BiLogoKubernetes className="text-[#3069dd]" />
    </div>
  );

  return (
    <section className="pt-32">
      <ParallaxText baseVelocity={1}>{icons}</ParallaxText>
      <ParallaxText baseVelocity={-1}>{icons}</ParallaxText>
    </section>
  );
};

export default VelocityLine;
