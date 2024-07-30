import EmailForm from "../EmailForm";
import Socials from "../Socials";
import { Card } from "../ui/card";

const Contact = () => {
  return (
    <section id="contact" className="h-full pt-[110px]">
      <div className="container flex flex-row items-start justify-center xl:justify-start relative mt-10">
        <h2 className="h2 capitalize mb-4">contact</h2>
      </div>
      <div className="bg-main/30 w-full rounded-t-xl pb-5">
        <div className="container mx-auto h-full">
          <div className="flex flex-col items-start xl:justify-center xl:flex-row justify-start relative pt-8 gap-8">
            <div className="w-full xl:w-1/2 order-2 xl:order-1">
              <Card className="flex flex-col items-center bg-white rounded-3xl glass-card">
                <EmailForm />
              </Card>
            </div>
            <div className="w-full xl:w-1/2 xl:order-2 order-1">
              <h3 className="h3 mb-4">Let`s Connect!</h3>
              <p>
                I`m currently looking for new opportunities, and my inbox is
                always open. Whether you have a question or just to say hi, I`ll
                try my best to get back to you! :)
              </p>
              <div className="mt-4">
                <Socials
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-primary rounded-full flex justify-center items-center text-primary text-base hover:bg-primary hover:text-secondary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
