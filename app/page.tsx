import Contact from "@/components/chapters/Contact";
import Landing from "@/components/chapters/Landing";
import Resume from "@/components/chapters/Resume";
import About from "@/components/chapters/About";
import VelocityLine from "@/components/VelocityLine/VelocityLine";
import { Toaster } from "@/components/ui/toaster";
import AnimatedNumberSection from "@/components/AnimatedNumberSerction";

export default function Home() {
  return (
    <>
      <main>
        <Landing />

        <AnimatedNumberSection />

        <Resume />

        <VelocityLine />

        <About />
        <Contact />
      </main>
      <Toaster />
    </>
  );
}
