import Link from "next/link";
import { Button } from "./ui/button";
import Navigation from "./Navigation";
import ModeToggle from "@/components/ModeToggle";

const Header = () => {
  return (
    <header className="py-8 xl:py-12">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            Marko<span className="text-emerald-500">.</span>
          </h1>
        </Link>
        <div className="hidden xl:flex items-center gap-8">
          <Navigation />
          <Link href="#contact">
            <Button>Hire me</Button>
          </Link>
          <ModeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;