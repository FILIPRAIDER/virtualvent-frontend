"use client";

import Image from "next/image";
import Link from "next/link";
import { TbShoppingCartPlus } from "react-icons/tb";
import { ProductProps } from "../interfaces/product";
import { addProductToCart } from "@/shopping-cart";
import { useRouter } from "next/navigation";

export const ProductCard = ({ id, imagen, nombre, precio }: ProductProps) => {
  const nombreNormalizado = nombre.toLowerCase().replace(/\s+/g, "-");
  const router = useRouter();

  const onAddToCart = () => {
    addProductToCart(id);
    router.refresh();
  };

  return (
    <div className="flex h-[370px] w-[240px] flex-col bg-white p-4 rounded-lg shadow-sm border border-slate-300">
      {/* Imagen y Nombre dentro del Link */}
      <Link href={`/products/${nombreNormalizado}`} className="flex flex-col">
        <div className="w-full h-[180px] flex items-center justify-center bg-white shadow-sm rounded-md overflow-hidden">
          <Image
            src={imagen}
            alt={nombre}
            width={200}
            height={200}
            className="w-full h-full object-contain rounded-md"
          />
        </div>
        <p className="text-[18px] font-normal line-clamp-2 mt-3">{nombre}</p>
      </Link>

      {/* Precio */}
      <span className="text-[24px] font-normal text-[#093F51] mt-auto">
        ${precio.toLocaleString()}
      </span>

      {/* Botón de Agregar al Carrito (fuera del Link) */}
      <button
        type="button"
        onClick={onAddToCart}
        className="bg-[#093F51] text-white text-lg rounded-md p-2 mt-auto cursor-pointer hover:border-2 hover:border-[#093F51] hover:bg-white hover:text-[#093F51] h-[48px] flex items-center justify-center gap-2 transition-all"
      >
        <TbShoppingCartPlus className="hover:text-[#093F51]" />
        <span>Agregar al carrito</span>
      </button>
    </div>
  );
};
