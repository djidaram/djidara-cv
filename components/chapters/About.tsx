import Image from "next/image";
import { Card } from "../ui/card";

const aboutText =
  "I`m a Full Stack Developer with a knack for creating efficient and user-friendly web applications. My experience covers both frontend and backend technologies, allowing me to deliver comprehensive solutions tailored to various business needs.\n\nI`m passionate about staying up-to-date with the latest tech trends and enjoy working collaboratively in team settings. Whether it's translating client visions into reality or leading project initiatives, I’m committed to delivering high-quality results.\n\nAlways ready to tackle new challenges, I look forward to contributing to innovative projects. Let`s connect and build something great together!";

const About = () => {
  return (
    <section id="about" className="h-full pt-[110px]">
      <div className="container mx-auto h-full">
        <div className="flex flex-col items-start xl:justify-start justify-center relative mt-10">
          <h2 className="h2 capitalize mb-4">about</h2>
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
              <p className="text-justify whitespace-pre-line mt-4">
                {aboutText}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
