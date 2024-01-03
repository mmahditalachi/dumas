"use client";

import React, { useState } from "react";
import OtpInput from "react-otp-input";
import "./page.css";

const page = () => {
  const [otp, setOtp] = useState("");

  return (
    <div
      dir="ltr"
      id="otp-container"
      className="flex flex-col space-y-3 justify-center font-bold text-xl h-screen max-w-sm mx-auto"
    >
      <OtpInput
        value={otp}
        onChange={setOtp}
        numInputs={5}
        inputStyle={
          "bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
        }
        renderSeparator={<span className="m-2"></span>}
        renderInput={(props) => <input {...props} />}
      />
    </div>
  );
};

export default page;
