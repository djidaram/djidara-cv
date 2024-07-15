"use client";

import Link from "next/link";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  { name: "home", path: "#home", scroll: true },
  { name: "resume", path: "#resume", scroll: true },
  { name: "work", path: "#work", scroll: true },
  { name: "contact", path: "#contact", scroll: true },
];

const Navigation = () => {
  const [anchor, setAnchor] = useState("/");
  const params = useParams();

  useEffect(() => {
    setAnchor(window.location.hash ? window.location.hash : "/");
  }, [params]);

  return (
    <nav className="flex gap-8">
      {links.map((link) => (
        <Link
          href={link.path}
          key={`navi-${link.name}`}
          className={`${link.path === anchor && "text-main border-b-2 border-main"} capitalize font-medium hover:text-main transition-all`}
          scroll={link.scroll}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
};

export default Navigation;
