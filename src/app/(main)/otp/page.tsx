"use client";

import React, { useState } from "react";
import OtpInput from "react-otp-input";
import "./page.css";
import LinkHero from "@/components/shared/LinkHero";

const page = () => {
  const [otp, setOtp] = useState("");

  return (
    <div
      dir="ltr"
      id="otp-container"
      className="flex flex-col space-y-8 justify-center font-bold text-xl h-screen max-w-sm mx-auto"
    >
      <div className="text-right">
        <p className="text-lg text-black dark:text-white">
          :کد تایید را وارد کنید
        </p>
      </div>
      <OtpInput
        value={otp}
        onChange={setOtp}
        numInputs={5}
        inputStyle={
          "inputStyle bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
        }
        renderSeparator={<span className="m-3"></span>}
        renderInput={(props) => <input {...props} />}
      />
      <LinkHero title="ادامه" href="/sendreq" className="w-full" />
    </div>
  );
};

export default page;
