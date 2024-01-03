import { CardHero } from "@/components/shared/CardHero";
import React from "react";

const page = () => {
  const list = Array.from({ length: 9 }, () => (
    <CardHero title="عنوان" description="توضیحات" image="random" />
  ));
  return (
    <div className="w-full h-screen flex justify-start items-center sm:flex-col md:space-x-3 md:rtl:space-x-reverse space-y-3 py-5">
      {list && list.map((e) => e)}
    </div>
  );
};

export default page;
