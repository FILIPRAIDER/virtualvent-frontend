"use client";
import { productos } from "@/app/data/products";
import Image from "next/image";
// import { useState } from "react";

export const ImageGallery = () => {
  // const [mainImage, setMainImage] = useState(productos[0].imagen);

  return (
    <div className="w-full max-w-[500px] h-[450px] flex flex-col items-center gap-4">
      {/* Imagen Principal */}
      <div className="w-full aspect-square bg-white border border-gray-200 rounded-sm flex justify-center items-center overflow-hidden">
        <Image
          width={500}
          height={500}
          src={productos[0].imagen}
          alt="Producto"
          className="w-full h-full object-contain"
        />
      </div>

      {/* Miniaturas en una sola fila */}
      {/* <div className="w-full flex gap-2 overflow-x-auto h-24">
        {productos.map(({ id, imagen }) => (
          <button
            key={id}
            className="border border-gray-200 rounded-md overflow-hidden w-16 h-16 flex-shrink-0 flex justify-center items-center hover:border-gray-700 transition"
            onMouseEnter={() => setMainImage(imagen)}
          >
            <Image
              width={64}
              height={64}
              src={imagen}
              alt="Miniatura"
              className="w-full h-full object-contain"
            />
          </button>
        ))}
      </div> */}
    </div>
  );
};
