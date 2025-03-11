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
    <div className="flex flex-col bg-white p-4 rounded-lg shadow-sm border border-slate-300 h-[310px] min-w-[180px] md:h-[350px] md:w-[210px]">
      {/* Imagen y Nombre dentro del Link */}
      <Link
        href={`/products/${nombreNormalizado}`}
        className="flex flex-col flex-grow"
      >
        <div className="w-full h-[130px] border border-gray-200 flex items-center justify-center bg-white rounded-md overflow-hidden">
          <Image
            src={imagen}
            alt={nombre}
            width={200}
            height={200}
            className="w-full h-full object-contain rounded-md"
          />
        </div>
        <p className="text-[16px] md:font-semibold line-clamp-2 md:line-clamp-3 mt-3 min-h-[40px] ">
          {nombre}
        </p>
      </Link>

      {/* Precio */}
      <span className="text-[20px] font-semibold text-[#093F51] mt-auto">
        ${precio.toLocaleString()}
      </span>

      {/* Botón de Agregar al Carrito */}
      <button
        type="button"
        onClick={onAddToCart}
        className="bg-[#093F51] text-white text-lg rounded-md p-2 mt-2 cursor-pointer hover:border-2 hover:border-[#093F51] hover:bg-white hover:text-[#093F51] h-[34px] md:h-[48px] flex items-center justify-center gap-2 transition-all"
      >
        <TbShoppingCartPlus className="hover:text-[#093F51]" />
        <span className="md:hidden text-[16px]">Agregar</span>
        <span className="hidden md:block text-[16px]">Agregar al carrito</span>
      </button>
    </div>
  );
};
