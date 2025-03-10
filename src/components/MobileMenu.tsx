"use client";
import { useState } from "react";
import { IoClose, IoMenu } from "react-icons/io5";
import Link from "next/link";

interface MobileMenuProps {
  children: React.ReactNode;
}

export const MobileMenu = ({ children }: MobileMenuProps) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {menuOpen ? (
        <button
          onClick={() => setMenuOpen(false)}
          className=" text-3xl text-white flex gap-2 mr-2"
        >
          <IoClose />
        </button>
      ) : (
        <div className="flex gap-2 mr-2">
          <IoMenu
            className="text-white text-3xl cursor-pointer"
            onClick={() => setMenuOpen(true)}
          />
        </div>
      )}

      {/* Menú lateral con animación */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-white shadow-md transform transition-transform duration-300 ease-in-out mt-18 ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {children}

        <ul className="flex flex-col space-y-4 p-4 text-[#093F51]">
          <li>
            <Link
              href="/"
              className="block p-2 text-lg hover:bg-gray-200 rounded"
            >
              Inicio
            </Link>
          </li>
          <li>
            <Link
              href="/cursos"
              className="block p-2 text-lg hover:bg-gray-200 rounded"
            >
              Cursos
            </Link>
          </li>
          <li>
            <Link
              href="/contacto"
              className="block p-2 text-lg hover:bg-gray-200 rounded"
            >
              Contacto
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};
