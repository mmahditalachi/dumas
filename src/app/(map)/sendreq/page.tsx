"use client";

import LinkHero from "@/components/shared/LinkHero";
import React, { useEffect, useRef, useState } from "react";
import "@neshan-maps-platform/react-openlayers/dist/style.css";
import Style from "@neshan-maps-platform/ol/style/Style";
import Icon from "@neshan-maps-platform/ol/style/Icon";
import { Point } from "@neshan-maps-platform/ol/geom";
import { Vector as VectorSource } from "@neshan-maps-platform/ol/source";
import { FaArrowRightLong } from "react-icons/fa6";

import NeshanMap, {
  NeshanMapRef,
  OlMap,
  Ol,
} from "@neshan-maps-platform/react-openlayers";
import { BaseMapOptions } from "@neshan-maps-platform/react-openlayers/dist/types/components/Map.model";
import Image from "next/image";
import ButtonHero from "@/components/shared/ButtonHero";

const page = () => {
  const mapRef = useRef<NeshanMapRef | null>(null);

  const [ol, setOl] = useState<Ol>();
  const [sourceLocation, setSourceLocation] = useState([]);
  const [olMap, setOlMap] = useState<OlMap>();
  const [mapOption, setMapOption] = useState<BaseMapOptions>();

  const onInit = (ol: Ol, map: OlMap) => {
    console.log("onInit");

    setOl(ol);
    setOlMap(map);

    setTimeout(() => {
      const view = map.getView();
      view.animate({
        center: ol.proj.fromLonLat([51.36281969540723, 35.69672648316882]),
        zoom: 17,
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
      console.log(mapOption);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const removeMarker = () => {
    if (mapRef.current) {
      setSourceLocation([]);
      const map = mapRef.current.map;
      // Get the vectorLayer from the map using mapRef
      const vectorLayer = map
        ?.getLayers()
        .getArray()
        .find((layer) => layer.getType() == "VECTOR");
      console.log(vectorLayer);

      // Check if the vectorLayer is found
      if (vectorLayer) {
        map?.removeLayer(vectorLayer);
      }
    }
  };

  const handleSetDestination = () => {
    const view = olMap?.getView();
    const center = view?.getCenter();
    const transformedCoordinates = ol.proj.transform(
      center,
      "EPSG:3857", // Assuming your original coordinates are in EPSG:3857
      "EPSG:4326" // Assuming you want to transform to EPSG:4326 (standard latitude and longitude)
    );

    if (transformedCoordinates) {
      setSourceLocation(transformedCoordinates);
      var layer = new ol.layer.Vector({
        source: new ol.source.Vector({
          features: [
            new ol.Feature({
              geometry: new ol.geom.Point(
                ol.proj.fromLonLat(transformedCoordinates)
              ),
            }),
          ],
        }),
        style: new ol.style.Style({
          image: new ol.style.Icon({
            color: "#BADA55",
            crossOrigin: "anonymous",
            src: "/navigation.png",
          }),
        }),
      });

      mapRef.current?.map?.addLayer(layer);
    }
  };

  return (
    <div className="relative h-screen">
      {sourceLocation.length === 2 && (
        <button
          onClick={removeMarker}
          className="flex items-center justify-center text-lg h-10 w-10 absolute z-50 top-10 right-10 rounded-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 cursor-pointer"
        >
          <FaArrowRightLong />
        </button>
      )}
      {sourceLocation.length !== 2 && (
        <div
          className="absolute top-1/2 left-1/2 z-50"
          style={{ transform: "translate(-50%, -50%)" }}
          id="navIcon"
        >
          <Image
            alt="navigation"
            src="/navigation.png"
            width={50}
            height={50}
          />
        </div>
      )}
      <NeshanMap
        ref={mapRef}
        mapKey={`${process.env.NEXT_PUBLIC_MAP_KEY}`}
        traffic={false}
        onInit={onInit}
        defaultType="dreamy"
        style={{ height: "100vh", width: "100%" }}
      ></NeshanMap>
      <div className="z-50 absolute w-full flex bottom-10 py-14 font-bold text-xl px-1">
        {sourceLocation.length !== 2 && (
          <ButtonHero
            title="انتخاب مبدا"
            type="submit"
            onClick={handleSetDestination}
            className="w-full"
          />
        )}

        {sourceLocation.length === 2 && (
          <LinkHero
            title="ارسال درخواست"
            href="/finding"
            className="w-full setSource"
          />
        )}
      </div>
    </div>
  );
};

export default page;
