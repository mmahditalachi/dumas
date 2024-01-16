"use client";

import ButtonHero from "@/components/shared/ButtonHero";
import HeroInput from "@/components/shared/InputHero";
import LinkHero from "@/components/shared/LinkHero";
import Logo from "@/components/shared/Logo";
import Image from "next/image";
import React, { useState } from "react";
import { MdOutlinePhoneAndroid } from "react-icons/md";

const page = () => {
  const [error, seterror] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  return (
    <form className="flex flex-col space-y-3 justify-center font-bold text-xl h-screen max-w-sm mx-auto">
      <div className="text-center">
        <Logo />
      </div>
      <h1 className="text-black dark:text-white">ورود | ثبت‌ نام</h1>
      <HeroInput
        title="لطفا شماره موبایل یا ایمیل خود را وارد کنید"
        error="شماره موبایل یا ایمیل نادرست است."
        enTitle="phone"
        Icon={<MdOutlinePhoneAndroid />}
        hasError={error}
        value={phoneNumber}
        onChange={(e) => {
          const input = e.target.value;

          const numericInput = input.replace(/[^0-9]/g, "");
          setPhoneNumber(numericInput);

          if (numericInput.length != 11) {
            seterror(true);
            return;
          }

          seterror(false);
        }}
      />
      {/* <ButtonHero title="ادامه" type="submit" className="w-full" /> */}
      <LinkHero
        disable={phoneNumber.length != 11 || error}
        title="ادامه"
        href="/otp"
        className="w-full"
      />
    </form>
  );
};

export default page;
