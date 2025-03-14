"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const options = [
  { title: "Inicio", path: "/" },
  { title: "Tiendas oficiales", path: "/tiendas-oficiales" },
  { title: "Categorías", path: "/categorias" },
  { title: "Sobre Nosotros", path: "/sobre-nosotros" },
  { title: "Puntos de distribución", path: "/puntos-de-distribucion" },
];

export const SubNavbar = () => {
  const pathname = usePathname(); // Obtiene la ruta actual

  return (
    <div className="w-full bg-[#F2F2F2] h-[33px] flex items-center px-8 z-30 hidden md:flex">
      <ul className="text-[15px] text-slate-700 flex flex-row gap-8 font-semibold">
        {options.map(({ title, path }) => (
          <li key={title} className="relative group">
            <Link
              href={path}
              className="hover:text-[#093F51] transition-colors"
            >
              {title}
            </Link>
            {/* Línea debajo del enlace activo */}
            <span
              className={`absolute left-0 bottom-[-2px] w-full h-[2px] bg-[#093F51] transition-all duration-300 transform scale-x-0 group-hover:scale-x-100 ${
                pathname === path ? "scale-x-100" : ""
              }`}
            ></span>
          </li>
        ))}
      </ul>
    </div>
  );
};
