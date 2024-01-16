import LinkHero from "@/components/shared/LinkHero";
import React from "react";
import "./page.css";
import TicTacToe from "@/components/shared/TicTacToe";
import Waiting from "@/components/shared/Waiting";

const page = () => {
  return (
    <div className="px-5 py-5 h-screen flex flex-col justify-end items-center space-y-28">
      <div className="mb-24" role="status" dir="ltr">
        <div className="relative h-16 w-16">
          <div className="item-loader"></div>
          <div className="item-loader"></div>
          <div className="item-loader"></div>
          <div className="item-loader"></div>
        </div>
      </div>
      <div className="inline-flex justify-center  items-center">
        <p>در حال یافتن جای پارک </p>
        <Waiting />
      </div>
      <TicTacToe />
      <LinkHero title="لفو درخواست" href="/sendreq" className="w-full" />
    </div>
  );
};

export default page;
