import { cookies } from "next/headers";
import Link from "next/link";
import { FaBell, FaShoppingCart } from "react-icons/fa";

const getTotalCount = (cart: { [id: string]: number }): number => {
  return Object.values(cart).reduce((acc, value) => acc + (value as number), 0);
};

export const Cart = async () => {
  const cookieStore = await cookies();
  const cart = JSON.parse(cookieStore.get("cart")?.value ?? "{}");
  const totalItems = getTotalCount(cart);

  return (
    <>
      <div className="items-center space-x-6 text-white text-xl md:ml-40 h-full hidden md:flex">
        {/* Icono de Notificaciones */}
        <FaBell
          className="cursor-pointer text-white  w-[25px] h-[25px] 
          transition-transform duration-200 ease-in-out hover:scale-110 active:scale-90"
        />

        {/* Icono de Carrito */}
        <Link
          href={`/cart`}
          className="flex relative w-12 rounded p-1 items-center"
        >
          <FaShoppingCart
            className="cursor-pointer text-white  w-[25px] h-[25px] 
            transition-transform duration-200 ease-in-out hover:scale-110 active:scale-90"
          />
          {totalItems > 0 && (
            <span className="absolute -bottom-2 -right-2 text-[14px] w-[20px] h-[20px] flex justify-center items-center rounded-full bg-gray-100 text-[#093F51] font-semibold">
              {totalItems}
            </span>
          )}
        </Link>
      </div>

      {/* Versión móvil */}
      <div className="md:hidden">
        <Link
          href={`/cart`}
          className="flex relative w-12 rounded p-1 items-center"
        >
          <FaShoppingCart
            className="cursor-pointer text-white hover:text-gray-200 w-[25px] h-[25px] 
            transition-transform duration-200 ease-in-out hover:scale-110 active:scale-90"
          />
          {totalItems > 0 && (
            <span className="absolute -bottom-2 -right-2 text-[14px] w-[20px] h-[20px] flex justify-center items-center rounded-full bg-gray-100 text-[#093F51] font-semibold">
              {totalItems}
            </span>
          )}
        </Link>
      </div>
    </>
  );
};
