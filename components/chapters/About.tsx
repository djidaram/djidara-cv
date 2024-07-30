import Image from "next/image";
import { Card } from "../ui/card";

const aboutText = (
  <>
    <p>
      I`m a <strong>Full Stack Developer</strong> with a knack for creating
      efficient and user-friendly web applications. My experience covers both
      frontend and backend technologies, allowing me to deliver comprehensive
      solutions tailored to various business needs.
    </p>
    <br />

    <h2>Passions and Interests</h2>
    <ul>
      <li>Staying up-to-date with the latest tech trends</li>
      <li>Working collaboratively in team settings</li>
      <li>Translating client visions into reality</li>
      <li>Leading project initiatives</li>
    </ul>
    <br />

    <p>
      Whether it`s <span>translating client visions into reality</span> or{" "}
      <span>leading project initiatives</span>, I`m committed to delivering
      high-quality results.
    </p>

    <p>
      Always ready to tackle new challenges, I look forward to contributing to
      innovative projects.{" "}
      <strong className="text-main">
        Let`s connect and build something great together!
      </strong>
    </p>
  </>
);

const About = () => {
  return (
    <section id="about" className="h-full pt-[110px]">
      <div className="container mx-auto h-full">
        <div className="flex flex-col items-start xl:justify-start justify-center relative mt-10">
          <div className="flex justify-center xl:justify-start w-full">
            <h2 className="h2 capitalize mb-4">about</h2>
          </div>
          <div className="flex lg:flex-row xl:flex-row flex-col items-start xl:justify-start justify-center relative mt-10">
            <div className="xl:w-5/12 lg:w-1/3 w-full">
              <Card className="flex flex-col items-center justify-center bg-white rounded-3xl xl:w-[450px] xl:h-[350px] w-full h-1/3 glass-card">
                {/* Image was created using Microsoft Designer */}
                <Image
                  src={"/assets/photoshoped-table-image.png"}
                  alt="dark-mode-image"
                  width={430}
                  height={100}
                  className="-translate-y-12"
                  sizes="100%"
                />
              </Card>
            </div>
            <div className="xl:w-7/12 lg:w-2/3 lg:pl-4 w-full">
              <div className="text-justify whitespace-pre-line mt-4 xl:mt-0">
                {aboutText}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
