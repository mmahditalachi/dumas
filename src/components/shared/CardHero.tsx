import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  title: string;
  description: string;
  image: string;
};

export const CardHero = (props: Props) => {
  return (
    <Link
      href="#"
      className="sm:w-full h-36 md:w-1/2 flex flex-row bg-white border border-gray-200 rounded-lg shadow md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
    >
      <div className="py-3 px-2">
        <Image
          className="object-cover w-28 rounded-t-lg h-28  md:rounded-none md:rounded-s-lg"
          width={112}
          height={112}
          src="/image-4.jpg"
          alt=""
        />
      </div>
      <div className="w-full flex flex-col justify-start pt-4 px-3 leading-normal space-y-1">
        <p className="font-normal text-base text-gray-700 dark:text-gray-400">
          {props.title}
        </p>
        <p className="font-normal text-base text-gray-700 dark:text-gray-400">
          ظرفیت: 2
        </p>
        <p className="font-normal text-base text-gray-700 dark:text-gray-400 text-left">
          تومان 3000
        </p>
        <div></div>
      </div>
    </Link>
  );
};
