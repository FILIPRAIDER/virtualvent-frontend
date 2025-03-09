"use client";

import Image from "next/image";
import Link from "next/link"; // Importamos Link
import { TbShoppingCartPlus } from "react-icons/tb";
import { ProductProps } from "./interfaces/product";

export const ProductCard = ({ imagen, nombre, precio }: ProductProps) => {
  const nombreNormalizado = nombre.toLowerCase().replace(/\s+/g, "-");

  return (
    <Link
      href={`/products/${nombreNormalizado}`}
      className="flex h-[370px] w-[240px] flex-col bg-white p-4 rounded-lg shadow-sm border border-slate-300"
    >
      {/* Imagen del Producto */}
      <div className="w-full h-[180px] flex items-center justify-center bg-white shadow-sm rounded-md overflow-hidden">
        <Image
          src={imagen}
          alt={nombre}
          width={200}
          height={200}
          className="w-full h-full object-contain rounded-md"
        />
      </div>

      {/* Información del Producto */}
      <div className="flex flex-col mt-3 h-[93px]">
        <p className="text-[18px] font-normal line-clamp-2">{nombre}</p>
        <span className="text-[24px] font-normal text-[#093F51] mt-auto">
          ${precio.toLocaleString()}
        </span>
      </div>

      {/* Botón de Agregar al Carrito */}
      <button
        type="button"
        onClick={(e) => e.preventDefault()} // Evitamos que el botón active el Link
        className="bg-[#093F51] text-white text-lg rounded-md p-2 mt-auto h-[48px] flex items-center justify-center gap-2"
      >
        <TbShoppingCartPlus className="text-white" />
        <span>Agregar al carrito</span>
      </button>
    </Link>
  );
};
