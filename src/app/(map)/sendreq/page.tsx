"use client";

import LinkHero from "@/components/shared/LinkHero";
import React, { useEffect, useRef, useState } from "react";
import "@neshan-maps-platform/react-openlayers/dist/style.css";

import NeshanMap, {
  NeshanMapRef,
  OlMap,
  Ol,
} from "@neshan-maps-platform/react-openlayers";

const page = () => {
  const mapRef = useRef<NeshanMapRef | null>(null);

  const [ol, setOl] = useState<Ol>();
  const [olMap, setOlMap] = useState<OlMap>();

  const onInit = (ol: Ol, map: OlMap) => {
    setOl(ol);
    setOlMap(map);

    setTimeout(() => {
      const view = map.getView();
      view.animate({
        center: ol.proj.fromLonLat([51.36281969540723, 35.69672648316882]),
        zoom: 12,
        duration: 1000,
      });
    }, 2000);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (mapRef.current?.map) {
        mapRef.current?.map.setMapType("standard-night");
        clearInterval(interval);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-screen">
      <NeshanMap
        ref={mapRef}
        mapKey={`${process.env.NEXT_PUBLIC_MAP_KEY}`}
        // mapKey={`web.d5ae07c075fa444098a19ec06f89a2a0`}
        traffic={false}
        onInit={onInit}
        defaultType="dreamy"
        style={{ height: "100vh", width: "100%" }}
      ></NeshanMap>
      <div className="z-50 absolute w-full flex bottom-10 py-14 font-bold text-xl px-1">
        <LinkHero title="ارسال درخواست" href="#" className="w-full" />
      </div>
    </div>
  );
};

export default page;
