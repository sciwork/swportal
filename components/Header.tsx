"use client";

import clsx from "clsx";
import Image from "next/image";
import { useState } from "react";
import Banner from "@/components/Banner";
import NavLink from "@/components/NavLink";
import iconImg from "@/assets/android-chrome-192x192.png";

const MenuButton = ({
  className,
  onClick,
  opened,
}: {
  className?: string;
  onClick: () => void;
  opened: boolean;
}) => {
  return (
    <button
      className={clsx(
        "flex items-center p-1 text-white hover:text-red-800",
        className,
      )}
      onClick={onClick}
    >
      <div className={clsx("nav_icon w-6", { open: opened })}>
        <span className="bar rounded block bg-white duration-200 ease-in-out" />
        <span className="bar rounded block bg-white duration-200 ease-in-out" />
        <span className="bar rounded block bg-white duration-200 ease-in-out" />
      </div>
    </button>
  );
};

const Header: React.FC = () => {
  const [opened, setOpened] = useState(false);
  const onToggleMenu = () => setOpened(!opened);
  const onNavLinkClick = (e: React.MouseEvent) => {
    const el = e.target as HTMLAnchorElement;
    if (!el.href) return;

    onToggleMenu();
  };

  return (
    <header>
      <nav className="fixed top-0 z-30 w-full bg-black">
        <div className="flex flex-wrap items-center justify-between px-5 py-2">
          <div>
            <div className="hidden items-center gap-2 md:flex">
              <Image
                className="mb-1 aspect-square w-10"
                src={iconImg}
                alt="sciwork icon"
              />
              <div className="text-bold font-yk text-5xl text-white">
                sciwork
              </div>
            </div>
          </div>
          <MenuButton
            className="block lg:hidden"
            onClick={onToggleMenu}
            opened={opened}
          />
          <div
            className={clsx(
              "flex-grow h-screen w-full flex-col lg:flex lg:h-auto lg:w-auto lg:flex-row",
              { hidden: !opened, flex: opened },
            )}
            onClick={onNavLinkClick}
          >
            <hr className="border-b mt-4 border-gray-100 py-0 opacity-25" />
            <NavLink href="/">home</NavLink>
            <NavLink href="/blog">blog</NavLink>
            <NavLink href="/sprint">sprint</NavLink>
            <NavLink href="/meetup">meetup</NavLink>
            <NavLink href="/training">training</NavLink>
            <NavLink href="/conference">conference</NavLink>
            <NavLink href="/project">project</NavLink>
            <NavLink href="/about">about</NavLink>
          </div>
        </div>
      </nav>
      <Banner />
    </header>
  );
};

export default Header;
