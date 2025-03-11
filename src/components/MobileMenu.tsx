"use client";
import { useCallback, useState } from "react";
import { IoClose, IoMenu } from "react-icons/io5";
import Link from "next/link";
import { options } from "./SubNavbar";
import { motion } from "framer-motion";

interface MobileMenuProps {
  children: React.ReactNode;
}

export const MobileMenu = ({ children }: MobileMenuProps) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = useCallback(() => setMenuOpen((prev) => !prev), []);

  return (
    <>
      <button
        onClick={toggleMenu}
        className="text-3xl text-white flex gap-2 mr-2"
      >
        <motion.div
          key={menuOpen ? "close" : "menu"} // Clave única para que Framer Motion anime correctamente
          initial={{ rotate: 90, scale: 0.8, opacity: 0 }}
          animate={{ rotate: 0, scale: 1, opacity: 1 }}
          exit={{ rotate: -90, scale: 0.8, opacity: 0 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
        >
          {menuOpen ? <IoClose /> : <IoMenu />}
        </motion.div>
      </button>

      {/* Menú lateral con animación */}
      <div
        className={`fixed text-center items-center top-0 left-0 w-full h-full bg-white z-10 shadow-md transform transition-transform duration-300 ease-in-out mt-18 ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {children}

        <ul className="flex flex-col space-y-4 p-4 text-xl gap-2 text-[#093F51] border-t border-gray-200">
          {options.map(({ title, path }) => (
            <Link key={title} href={path} onClick={toggleMenu}>
              {title}
            </Link>
          ))}
        </ul>
      </div>
    </>
  );
};
