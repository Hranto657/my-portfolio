"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { AnimatePresence } from "framer-motion";
import { NavLinks } from "@/constants";
import Transition from "./Transition";

const Sidebar = () => {
  const [isRouting, setIsRouting] = useState(false);
  const [prevPath, setPrevPath] = useState("/");

  const path = usePathname();

  useEffect(() => {
    if (prevPath !== path) {
      setIsRouting(true);
    }
  }, [path, prevPath]);

  useEffect(() => {
    if (isRouting) {
      setPrevPath(path);
      const timeout = setTimeout(() => {
        setIsRouting(false);
      }, 1200);

      return () => clearTimeout(timeout);
    }
  }, [isRouting, path]);

  return (
    <div className="fixed md:right-8 sm:right-2 top-[40%] z-[20] h-[200px] w-[48px] rounded-full bg-gray-500 bg-opacity-50">
      {isRouting && <Transition />}
      <AnimatePresence mode="wait">
        <div className="flex flex-col gap-5 pb-3 justify-center items-center h-full">
          {NavLinks.map((link) => (
            <Link
              key={link.name}
              href={link.link}
              onClick={() => setPrevPath(link.link)}
            >
              <link.icon
                className={`w-[28px] h-[28px] ${
                  path === link.link ? "text-orange-500" : "text-white"
                }`}
              />
            </Link>
          ))}
        </div>
      </AnimatePresence>
    </div>
  );
};

export default Sidebar;
