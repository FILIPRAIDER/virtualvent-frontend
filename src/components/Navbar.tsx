import { FaSearch, FaBell, FaShoppingCart, FaUserCircle } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import { SubNavbar } from "./SubNavbar";
import { cookies } from "next/headers";

const getTotalCount = (cart: { [id: string]: number }): number => {
  let items = 0;
  Object.values(cart).forEach((value) => {
    items += value as number;
  });

  return items;
};

export const Navbar = async () => {
  const cookieStore = await cookies();
  const cart = JSON.parse(cookieStore.get("cart")?.value ?? "{}");

  const totalItems = getTotalCount(cart);

  return (
    <nav className="bg-[#349999] w-full z-10">
      <div className="flex items-center justify-between h-18">
        <div className="relative flex items-center bg-[#A3D1D1] h-full w-[340px] rounded-br-[1000px] z-0">
          <div className="bg-white h-full absolute z-10 rounded-br-[1000px] w-[270px] flex items-center p-4">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/logo.svg"
                alt="VirtualVent"
                width={72}
                height={42}
                className="h-10"
              />
              <span className="text-[#349999] text-xl font-bold">
                <span className="text-[#093F51]">Virtual</span>Vent
              </span>
            </Link>
          </div>
        </div>
        <div className="relative w-1/2  w-[536px]">
          <input
            type="text"
            placeholder="Buscar"
            className="w-full pl-4 pr-10 py-2 rounded-lg bg-white text-gray-700 focus:outline-none"
          />
          <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#349999] cursor-pointer" />
        </div>

        <div className="flex items-center space-x-6 text-white text-xl  h-full ">
          <FaBell className="cursor-pointer text-white hover:text-gray-200 w-[25px] h-[25px]" />
          <Link
            href={`/shopping-cart`}
            className="flex relative  w-12 rounded p-1 items-center gap"
          >
            <FaShoppingCart className="cursor-pointer text-white hover:text-gray-200 w-[25px] h-[25px]" />
            {totalItems > 0 && (
              <span className="absolute -bottom-2 m -right-2 text-[14px] w-[20px] h-[20px] flex justify-center text-center items-center  mr-2 rounded-full  bg-gray-100  text-[#093F51] font-semibold">
                {totalItems}
              </span>
            )}
          </Link>
        </div>
        <div className="flex items-center justify-end space-x-6 text-white text-xl  h-full bg-[#093F51] w-[120px] rounded-bl-[1000px] pr-4">
          <FaUserCircle className="cursor-pointer hover:text-gray-200 text-[#E0FCFC] w-[40px] h-[40px]" />
        </div>
      </div>
      {/* Aqui va la subnavbar */}

      <SubNavbar />
    </nav>
  );
};
