"use client";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useParams } from "next/navigation";
import Link from "next/link";

import { CiMenuFries } from "react-icons/ci";
import { useEffect, useState } from "react";
import ModeToggle from "./ModeToggle";

const links = [
  { name: "home", path: "#home", scroll: true },
  { name: "resume", path: "#resume", scroll: true },
  { name: "about", path: "#about", scroll: true },
  { name: "contact", path: "#contact", scroll: true },
];

const MobileNav = () => {
  const [anchor, setAnchor] = useState("/");
  const params = useParams();

  useEffect(() => {
    setAnchor(window.location.hash ? window.location.hash : "/");
  }, [params]);
  return (
    <nav>
      <Sheet>
        <SheetTrigger className="flex justify-center items-center">
          <CiMenuFries className="text-[32px] text-main" />
        </SheetTrigger>
        <SheetContent className="flex flex-col">
          <div className="absolute left-8 top-8 transition-opacity outline-none">
            <ModeToggle />
          </div>

          <div className="mt-32 mb-40 text-center text-2xl">
            <Link href="#home" scroll={true}>
              <h1 className="text-4xl font-semibold">
                Marko<span className="text-main">.</span>
              </h1>
            </Link>
          </div>

          <nav className="flex flex-col  items-center gap-4">
            {links.map((link) => (
              <SheetClose asChild key={`navi-${link.name}`}>
                <Link
                  href={link.path}
                  className={`${link.path === anchor && "text-main border-b-2 border-main"} capitalize font-medium hover:text-main transition-all`}
                  scroll={link.scroll}
                >
                  {link.name}
                </Link>
              </SheetClose>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
    </nav>
  );
};

export default MobileNav;
