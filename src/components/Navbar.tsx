import { FaBell, FaSearch, FaUserCircle } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import { SubNavbar } from "./SubNavbar";
import { Cart } from "./Cart";
import { MobileMenu } from "./MobileMenu";

export const Navbar = () => {
  return (
    <nav className="bg-[#349999] w-full z-10">
      <div className="md:flex items-center justify-between h-18 hidden ">
        {/* Logo */}
        <div className="relative flex items-center bg-[#A3D1D1] h-full w-[340px] rounded-br-[1000px] z-0">
          <div className="bg-white h-full absolute z-10 rounded-br-[1000px] w-[270px] flex items-center p-4">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/Logo.svg"
                alt="VirtualVent"
                width={72}
                height={42}
                className="h-10"
              />
              <span className="text-[#349999] text-xl font-bold hidden md:block">
                <span className="text-[#093F51]">Virtual</span>Vent
              </span>
            </Link>
          </div>
        </div>
        {/* input */}
        <div className="relative w-1/2  w-[536px]">
          <input
            type="text"
            placeholder="Buscar"
            className="w-full pl-4 pr-10 py-2 rounded-lg bg-white text-gray-700 focus:outline-none"
          />
          <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#349999] cursor-pointer" />
        </div>

        <Cart />

        <div className="flex items-center justify-end space-x-6 text-white text-xl  h-full bg-[#093F51] w-[120px] rounded-bl-[1000px] pr-4">
          <FaUserCircle className="cursor-pointer hover:text-gray-200 text-[#E0FCFC] w-[40px] h-[40px]" />
        </div>
      </div>
      {/* Navbar vista para movil */}
      <div className="md:hidden flex items-center h-18 w-full">
        {/* Logo */}
        <div className="relative flex items-center bg-[#A3D1D1] h-full w-[150px] rounded-br-[1000px] z-0">
          <div className="bg-white h-full absolute z-10 rounded-br-[1000px] w-[90px] flex items-center p-2">
            <Link href="/" className="flex items-center ">
              <Image
                src="/Logo.svg"
                alt="VirtualVent"
                width={50}
                height={32}
                className="h-10"
              />
            </Link>
          </div>
        </div>
        {/* Input */}
        <div className="relative w-[246px] mr-4">
          <input
            type="text"
            placeholder="Buscar"
            className="w-full pl-2 pr-8 py-2 rounded-sm bg-white text-gray-700 focus:outline-none"
          />
          <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#349999] cursor-pointer" />
        </div>
        <div className="flex gap-2 mr-2">
          <MobileMenu>
            <div>
              <FaBell className="cursor-pointer text-blue-700 hover:text-gray-200 w-[25px] h-[25px]" />
              <FaUserCircle className="cursor-pointer hover:text-gray-200 text-blue-700 w-[40px] h-[40px]" />
            </div>
          </MobileMenu>
          <Cart />
        </div>
      </div>
      {/* Menú lateral deslizable */}

      {/* Aqui va la subnavbar */}
      <SubNavbar />
    </nav>
  );
};
