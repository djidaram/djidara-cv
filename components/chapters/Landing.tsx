import { Button } from "../ui/button";
import { FiDownload } from "react-icons/fi";

import Socials from "../Socials";
import Photo from "../Photo";
import Typewriter from "../Typewriter";
import Link from "next/link";

const Landing = () => {
  return (
    <section id="home" className="h-full pt-[105px]">
      <div className="container mx-auto h-full">
        <div className="flex flex-col items-center justify-center xl:flex-row xl:justify-between xl:pb-24 xl:pt-8">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <h3 className="h3">{"Hello, I'm"}</h3>
            <h1 className="h1">
              <span className="text-main">Marko Đidara</span>
            </h1>

            <h3 className="text-2xl">
              And {"I'm"} a{" "}
              <span className="h3 text-main flex justify-center xl:inline-block">
                <Typewriter />
              </span>
            </h3>
            <p className="mb-8 mt-2 max-w-[500px]">
              Lore ipsum Lore ipsum Lore ipsum Lore ipsum Lore ipsum Lore ipsum
              Lore ipsum Lore ipsum
            </p>
            <div className="flex flex-col items-center gap-8 xl:flex-row">
              <a href="/assets/resume/Marko-Djidara-CV.pdf" download>
                <Button
                  variant="outline"
                  size="lg"
                  className="flex items-center justify-center gap-4 uppercase"
                >
                  <span>Download CV</span>
                  <FiDownload className="text-xl" />
                </Button>
              </a>
              <div className="mb-8 xl:mb-0">
                <Socials
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-main rounded-full flex justify-center items-center text-main text-base hover:bg-main hover:text-secondary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing;
