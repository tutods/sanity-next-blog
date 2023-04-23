import Link from "next/link";
import { Icon } from "@components/ui";
import { NavLink } from "@components/ui/Header/partials/NavLink";

export const Header = () => {
  return (
    <header
      className={"py-6 px-2 md:px-0 bg-white shadow-sm sticky top-0 z-10"}
    >
      <div className={"container mx-auto flex justify-between items-center"}>
        <Link href={"/"} passHref className={"font-bold"}>
          Daniel Sousa @TutoDS
        </Link>

        <div className={"flex items-center gap-8 justify-between"}>
          <nav>
            <ul className={"flex items-center gap-4"}>
              <li>
                <NavLink href={"/blog"} passHref>
                  Blog
                </NavLink>
              </li>
            </ul>
          </nav>
          <ul className={"flex gap-2 items-center"}>
            <li>
              <Link locale={"pt"} href={"/"}>
                <Icon name={"flag-pt"} size={"xl"} />
              </Link>
            </li>
            <li>
              <Link locale={"en"} href={"/"}>
                <Icon name={"flag-en"} size={"xl"} />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};
