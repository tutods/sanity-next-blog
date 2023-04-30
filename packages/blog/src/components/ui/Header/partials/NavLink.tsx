import Link, { LinkProps } from "next/link";
import { ReactNode } from "react";
import clsx from "clsx";
import { useRouter } from "next/router";

type Props = LinkProps & {
  children: ReactNode;
  className?: string;
};

export const NavLink = ({
  href,
  passHref,
  className = "",
  children,
  ...props
}: Props) => {
  const { asPath } = useRouter();

  const isActive =
    asPath === href || asPath.includes(href.toString()) || asPath === props.as;

  return (
    <Link
      className={clsx([
        "px-2 py-1 hover:text-violet-600 transition-all ease-in-out duration-300",
        className,
        { "text-violet-600 font-semibold": isActive },
      ])}
      href={href}
      passHref={passHref}
      {...props}
    >
      {children}
    </Link>
  );
};
