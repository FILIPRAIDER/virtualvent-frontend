import { FaStar } from "react-icons/fa";
import { ProductProps } from "./interfaces/product";
import { TbShoppingCartPlus } from "react-icons/tb";

export const ProductInfo = (product: ProductProps) => {
  return (
    <div className="bg-white flex flex-col p-6 gap-4 border border-gray-200 rounded-[8px] shadow-md h-[500px]">
      <h1 className="text-3xl font-semibold">{product.nombre}</h1>
      <div className="flex items-center gap-1 text-green-600">
        <FaStar className="text-[#349999]" /> 5.0
      </div>
      <p className="text-[30px] font-normal text-[#093F51]">
        ${product.precio.toLocaleString()}
      </p>
      <p className="text-sm text-blue-600 cursor-pointer">
        Ver los medios de pago
      </p>

      <p className="mt-2 text-green-700 font-medium">Disponible</p>
      <p className="text-sm">Cantidad: 1 unidad - 5 disponibles</p>

      <button className="w-full bg-[#093F51] text-white py-2 font-semibold rounded-md mt-4">
        Comprar Ahora
      </button>
      <button className="w-full  flex items-center justify-center gap-2 bg-[#349999] text-white py-2 rounded-md mt-2">
        <TbShoppingCartPlus />
        Agregar al carrito
      </button>
    </div>
  );
};
