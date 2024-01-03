import LinkHero from "@/components/shared/LinkHero";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col space-y-3 justify-center font-bold text-xl h-screen max-w-sm mx-auto">
      <p className="text-black dark:text-white">موقعیت خود را ثبت کنید</p>

      <div className="h-48 bg-gray-50 border border-gray-400 dark:bg-gray-700 rounded-lg"></div>

      <LinkHero title="ارسال درخواست" href="/otp" className="w-full" />
    </div>
  );
};

export default page;
