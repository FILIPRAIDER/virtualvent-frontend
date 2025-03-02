import Image from "next/image";
import { TbShoppingCartPlus } from "react-icons/tb";

interface Props {
  imagen: string;
  nombre: string;
  precio: number;
}

export const ProductCard = ({ imagen, nombre, precio }: Props) => {
  return (
    <div className="flex h-[360px] w-[240px] flex-col bg-white p-4 rounded-lg shadow-sm">
      <div className="w-full h-[180px] overflow-hidden flex items-center justify-center bg-white shadow-sm rounded-md">
        <Image
          src={imagen}
          alt={nombre}
          width={200}
          height={200}
          className="w-full h-full object-contain rounded-md"
        />
      </div>
      <div className="text-left flex flex-col gap-2 mt-4">
        <p className="text-[20px] font-normal mt-2">{nombre}</p>
        <span className="text-[24px] font-bold text-[#093F51]">
          ${precio.toLocaleString()}
        </span>
      </div>
      <button className="bg-[#093F51] text-white text-lg rounded-md p-2 mt-4 text-[18px] flex items-center justify-center gap-2">
        <TbShoppingCartPlus className="text-white " />
        <span>Agregar al carrito</span>
      </button>
    </div>
  );
};
