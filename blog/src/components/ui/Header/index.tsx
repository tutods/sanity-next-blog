import Link from "next/link";
import { Icon } from "@components/ui";

export const Header = () => {
  return (
    <header className={"container"}>
      <div className={"limiter"}>
        <div className={"logo"}>
          <Link href={"/"} passHref>
            Daniel Sousa @TutoDS
          </Link>
        </div>

        <div className={"right-section"}>
          <nav className={"navigation"}>
            <ul>
              <li>
                <Link href={"/blog"} passHref>
                  Blog
                </Link>
              </li>
              <li>
                <Link href={"/contacts"} passHref>
                  Contacts
                </Link>
              </li>
            </ul>
          </nav>
          <div className={"locale-switcher"}>
            <ul>
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
      </div>
    </header>
  );
};
