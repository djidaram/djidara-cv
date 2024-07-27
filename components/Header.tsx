import Link from "next/link";
import { Button } from "./ui/button";
import Navigation from "./Navigation";
import ModeToggle from "@/components/ModeToggle";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="py-8 fixed w-full z-10 bg-secondary glass-header">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            djidara<span className="text-main">.</span>
          </h1>
        </Link>
        <div className="hidden xl:flex items-center gap-8">
          <Navigation />

          <ModeToggle />
        </div>
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
