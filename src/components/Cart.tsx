import { cookies } from "next/headers";
import Link from "next/link";
import { FaBell, FaShoppingCart } from "react-icons/fa";

const getTotalCount = (cart: { [id: string]: number }): number => {
  let items = 0;
  Object.values(cart).forEach((value) => {
    items += value as number;
  });

  return items;
};

export const Cart = async () => {
  const cookieStore = await cookies();
  const cart = JSON.parse(cookieStore.get("cart")?.value ?? "{}");

  const totalItems = getTotalCount(cart);
  return (
    <>
      <div className=" items-center space-x-6 text-white text-xl  h-full hidden md:flex">
        <FaBell className="cursor-pointer text-white hover:text-gray-200 w-[25px] h-[25px]" />
        <Link
          href={`/cart`}
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
      <div className="md:hidden">
        <Link
          href={`/cart`}
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
    </>
  );
};
