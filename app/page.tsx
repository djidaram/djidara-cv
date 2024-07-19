import Contact from "@/components/chapters/Contact";
import Landing from "@/components/chapters/Landing";
import Resume from "@/components/chapters/Resume";
import Work from "@/components/chapters/Work";

export default function Home() {
  return (
    <main>
      <Landing />

      <Resume />

      <Work />
      <Contact />
    </main>
  );
}
