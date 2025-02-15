import clsx from "clsx";
import NextLink from "next/link";
import { usePathname } from "next/navigation";

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
  return (
    <NextLink
      className={clsx(
        "font-yk mx-8 py-2 text-3xl text-white no-underline hover:text-red-600 lg:mr-4 lg:py-0 lg:text-2xl",
        className,
        { "text-red-600": pathname === href },
      )}
      href={href}
    >
      {children}
    </NextLink>
  );
};

export default NavLink;
