import Contact from "@/components/chapters/Contact";
import Landing from "@/components/chapters/Landing";
import Resume from "@/components/chapters/Resume";
import About from "@/components/chapters/About";
import VelocityLine from "@/components/VelocityLine/VelocityLine";

export default function Home() {
  return (
    <main>
      <Landing />

      <Resume />

      <VelocityLine />

      <About />
      <Contact />
    </main>
  );
}
