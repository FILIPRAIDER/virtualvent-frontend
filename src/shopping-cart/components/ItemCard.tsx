"use client";

import Image from "next/image";

import { useRouter } from "next/navigation";

import { addProductToCart, removeSingleItemFromCart } from "../actions/action";
import { ProductProps } from "@/products";
import { IoAddOutline, IoRemove } from "react-icons/io5";
import Link from "next/link";

interface Props {
  product: ProductProps;
  quantity: number;
}

export const ItemCard = ({ product, quantity }: Props) => {
  const router = useRouter();
  const nombreNormalizado = product.nombre.toLowerCase().replace(/\s+/g, "-");

  function onAddToCart() {
    addProductToCart(product.id);
    router.refresh();
  }

  function onRemoveItem() {
    removeSingleItemFromCart(product.id);
    router.refresh();
  }

  return (
    <div className="flex items-center rounded-lg w-[590px] bg-white border border-gray-300 mx-auto h-34">
      {/* Product Image */}
      <div className="w-34 h-34 flex items-center justify-center items-center border-r border-gray-200">
        <Image
          width={96} // Ajusta según necesidad
          height={96}
          className="rounded object-contain w-full h-full border"
          src={product.imagen}
          alt={product.nombre}
        />
      </div>

      {/* Title */}
      <div className=" w-[55%] flex flex-col py-2 text-black  h-full">
        <Link href={`/products/${nombreNormalizado}`}>
          <h3 className="font-normal text-[18px] tracking-tight  px-2">
            {product.nombre}
          </h3>
        </Link>
        <div className=" flex gap-2 px-2 py-2 text-black h-full">
          <p className="text-[16px] font-semibold">Total: </p>
          <span className="font-bold">
            ${(product.precio * quantity).toFixed(2)}
          </span>
        </div>
        <div className=" flex justify-between px-2 py-2 text-blue-300 font-semibold">
          <button className="text-[10px]">Remover</button>
        </div>
      </div>

      <div className="flex p-5 items-center justify-center h-10 w-[100px] border border-gray-200 rounded-[8px]">
        <button
          onClick={onRemoveItem}
          className="font-medium border-r border-gray-200 text-sm  text-center cursor-pointer"
        >
          <IoRemove size={25} />
        </button>
        <span className="text-[18px] mx-4">{quantity}</span>
        <button
          onClick={onAddToCart}
          className="font-normal text-center border-l border-gray-200 cursor-pointer"
        >
          <IoAddOutline size={25} />
        </button>
      </div>
    </div>
  );
};
