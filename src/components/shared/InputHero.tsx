import React from "react";
import { IconType } from "react-icons";
import { MdOutlinePhoneAndroid } from "react-icons/md";

type Props = {
  title: string;
  Icon: React.ReactNode;
  enTitle: string;
  error: string;
  hasError: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const HeroInput = (props: Props) => {
  const errorStyle =
    "bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-red-100 dark:border-red-400";
  const mainStyle =
    "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500";
  return (
    <div>
      <label
        htmlFor="phone-icon"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        {props.title}
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
          {props.Icon}
        </div>
        <input
          type="text"
          dir="ltr"
          id="phone-icon"
          className={`${props.hasError ? errorStyle : mainStyle} `}
          placeholder="0912"
          onChange={props.onChange}
        />
      </div>
      {props.hasError && (
        <p className="mt-2 text-sm text-red-600 dark:text-red-500">
          <span className="font-medium"> {props.error}</span>
        </p>
      )}
    </div>
  );
};

export default HeroInput;
