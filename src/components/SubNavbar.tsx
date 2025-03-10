import Link from "next/link";

export const options = [
  { title: "Tiendas oficiales", path: "/tiendas-oficiales" },
  { title: "Categorías", path: "/categorias" },
  { title: "Sobre Nosotros", path: "/about" },
  { title: "Puntos de distribución", path: "/puntos-de-distribucion" },
];

export const SubNavbar = () => {
  return (
    <div className="w-full bg-[#F2F2F2] h-[33px]  items-center px-8 z-30 hidden md:flex ">
      <ul className="text-[15px] text-slate-700 flex flex-row gap-8 font-semibold">
        {options.map(({ title, path }) => (
          <Link key={title} href={path}>
            {title}
          </Link>
        ))}
      </ul>
    </div>
  );
};
