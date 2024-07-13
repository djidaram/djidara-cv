"use client";

import Link from "next/link";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  { name: "home", path: "/" },
  { name: "resume", path: "#resume" },
  { name: "work", path: "#work" },
  { name: "contact", path: "#contact" },
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
          className={`${link.path === anchor && "text-emerald-500 border-b-2 border-emerald-500"} capitalize font-medium hover:text-emerald-500 transition-all`}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
};

export default Navigation;
