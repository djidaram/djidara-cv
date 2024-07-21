"use client";

import Link from "next/link";

import { useEffect, useState } from "react";

type Links = {
  name: string;
  path: string;
  scroll: boolean;
  positionTop: number | undefined;
  elementHeight: number | undefined;
}[];

const Navigation = () => {
  const [anchor, setAnchor] = useState("#home");
  const [links, setLinks] = useState<Links>([]);
  useEffect(() => {
    setLinks([
      {
        name: "home",
        path: "#home",
        scroll: true,
        positionTop: document.getElementById("home")?.offsetTop,
        elementHeight: document.getElementById("home")?.offsetHeight,
      },
      {
        name: "resume",
        path: "#resume",
        scroll: true,
        positionTop: document.getElementById("resume")?.offsetTop,
        elementHeight: document.getElementById("resume")?.offsetHeight,
      },
      {
        name: "about",
        path: "#about",
        scroll: true,
        positionTop: document.getElementById("about")?.offsetTop,
        elementHeight: document.getElementById("about")?.offsetHeight,
      },
      {
        name: "contact",
        path: "#contact",
        scroll: true,
        positionTop: document.getElementById("contact")?.offsetTop,
        elementHeight: document.getElementById("contact")?.offsetHeight,
      },
    ]);
  }, []);

  useEffect(() => {
    links.length > 0 &&
      window.addEventListener("scroll", () => {
        for (const link of links) {
          const positionTop = Number(link.positionTop) - 100;
          const positionBottom = positionTop + Number(link.elementHeight) - 100;

          if (
            window.scrollY >= positionTop &&
            window.scrollY < positionBottom &&
            anchor !== link.path
          ) {
            setAnchor(link.path);
            break;
          }
        }
      });
  }, [anchor, links]);

  return (
    <nav className="flex gap-8">
      {links.map((link) => (
        <Link
          href={link.path}
          key={`navi-${link.name}`}
          className={`${link.path === anchor ? "text-main border-b-2 border-main" : "border-transparent"} capitalize font-medium border-b-2 hover:text-main transition-all`}
          scroll={link.scroll}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
};

export default Navigation;
