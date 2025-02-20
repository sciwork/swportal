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
        "mx-8 py-2 font-yk text-3xl no-underline hover:text-red-600 lg:mr-4 lg:py-0 lg:text-2xl",
        className,
        { "active:text-red-600": pathname === href },
        { "text-white": pathname !== href },
      )}
      href={href}
    >
      {children}
    </NextLink>
  );
};

export default NavLink;
