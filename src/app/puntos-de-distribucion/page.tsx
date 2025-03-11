"use client";
import { MapBox } from "@/map/MapBox";
import Image from "next/image";

export default function PuntosPage() {
  return (
    <div className="flex flex-col text-center items-center p-4">
      <Image
        src="/Ubicacion.svg"
        alt="Puntos de distribución"
        width={450}
        height={450}
        className="h-[450px] w-[650px]"
      />
      <h2 className="text-3xl md:text-4xl font-semibold my-6 text-[#093F51]">
        Conoce nuestros puntos de distribucion
      </h2>
      <div className="w-full flex flex-col text-center">
        <h3 className="text-xl font-normal text-[#093F51]">
          Encuentra el punto de distribución más cercano a ti
        </h3>
        <div className="w-[350px] md:w-5/6 mt-4 p-4 h-[450px] rounded-lg flex flex-col text-left gap-2 justify-center bg-white mx-auto shadow-md">
          <p className="text-[#349999] text-xl">UCC Monteria</p>
          <MapBox />
        </div>
      </div>
    </div>
  );
}
