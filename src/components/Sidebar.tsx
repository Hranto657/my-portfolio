'use client';

import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { AnimatePresence } from 'framer-motion';
import { NavLinks } from '@/constants';
import Transition from './Transition';

const Sidebar = () => {
  const [isRouting, setIsRouting] = useState(false);
  const [prevPath, setPrevPath] = useState('/');

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
    <div className="fixed z-[20] h-[200px] w-[48px] rounded-full bg-gray-500 bg-opacity-50 sm:right-2 sm:top-[65%] md:right-8 md:top-[40%]">
      {isRouting && <Transition />}
      <AnimatePresence mode="wait">
        <div className="flex h-full flex-col items-center justify-center gap-5 pb-3">
          {NavLinks.map((link) => (
            <Link key={link.name} href={link.link} onClick={() => setPrevPath(link.link)}>
              <link.icon
                className={`h-[28px] w-[28px] ${
                  path === link.link ? 'text-orange-500' : 'text-white'
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
