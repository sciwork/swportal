"use client";

import clsx from "clsx";
import NextLink from "next/link";
import { usePathname } from "next/navigation";

const isActive = (href: string, pathname: string) => {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname.startsWith(href);
};

const NavLink = ({
  className,
  children,
  href,
}: {
  className?: string;
  children: React.ReactNode;
  href: string;
}) => {
  const pathname = usePathname();
  const active = isActive(href, pathname);

  return (
    <NextLink
      className={clsx(
        "mx-8 py-2 font-yk text-3xl no-underline hover:text-red-600 lg:mr-4 lg:py-0 lg:text-2xl",
        className,
        { "active:text-red-600": active },
        { "text-white": !active },
      )}
      href={href}
    >
      {children}
    </NextLink>
  );
};

export default NavLink;
