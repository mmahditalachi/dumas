import Link from "next/link";
import React from "react";

type Props = {
  title: string;
  className?: string;
  href: string;
  disable?: boolean;
};

const LinkHero = (props: Props) => {
  return (
    <Link
      aria-disabled={true}
      href={props.href}
      tabIndex={props.disable ? undefined : -1}
      className={`text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ${
        props.className
      } ${props.disable ? "pointer-events-none" : ""}`}
    >
      {props.title}
    </Link>
  );
};

export default LinkHero;
