import t from "@shared/translations";
import Link from "next/link";
import { Locales } from "@enums";
import { Icon } from "@components/ui";
import clsx from "clsx";

type Props = {
  page: number;
  totalOfPages: number;
  locale?: Locales;
};

const COMMON_PAGE_STYLE = "py-2 px-4 border rounded";

export const BlogPagination = ({
  page,
  totalOfPages,
  locale = Locales.EN,
}: Props) => {
  const isPrevVisible = page > 1;
  const isNextVisible = page < totalOfPages;

  const PreviousWrapper = isPrevVisible ? Link : "button";
  const NextWrapper = isNextVisible ? Link : "button";

  return (
    <ul className={"flex items-center justify-center gap-4"}>
      <li>
        <PreviousWrapper
          href={
            isPrevVisible
              ? {
                  pathname: "/blog",
                  query: {
                    page: page - 1,
                  },
                }
              : {}
          }
          className={clsx([
            COMMON_PAGE_STYLE,
            "inline-flex items-center justify-center gap-1",
            {
              "border-gray-600 text-gray-600 hover:border-violet-600 hover:text-violet-600 cursor-pointer transition-colors ease-in-out duration-300":
                isPrevVisible,
            },
            {
              "border-gray-300 hover:text-gray-300 cursor-not-allowed text-gray-300":
                !isPrevVisible,
            },
          ])}
        >
          <Icon name={"chevron-left"} size={"md"} />
          {t[locale].pagination.previous}
        </PreviousWrapper>
      </li>
      <li>
        <button
          disabled
          className={clsx([
            COMMON_PAGE_STYLE,
            "border-violet-600 text-violet-600 font-semibold cursor-not-allowed px-4",
          ])}
        >
          {page}
        </button>
      </li>
      <li>
        <NextWrapper
          href={
            isNextVisible
              ? {
                  pathname: "/blog",
                  query: {
                    page: page + 1,
                  },
                }
              : {}
          }
          className={clsx([
            COMMON_PAGE_STYLE,
            "inline-flex items-center justify-center gap-1",
            {
              "border-gray-600 text-gray-600 hover:border-violet-600 hover:text-violet-600 cursor-pointer transition-colors ease-in-out duration-300":
                isNextVisible,
            },
            {
              "border-gray-300 hover:text-gray-300 cursor-not-allowed text-gray-300":
                !isNextVisible,
            },
          ])}
        >
          {t[locale].pagination.next}{" "}
          <Icon name={"chevron-right"} size={"md"} />
        </NextWrapper>
      </li>
    </ul>
  );
};
