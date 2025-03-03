import Link from "next/link";

const options = [
  { title: "Tiendas oficiales", path: "/tiendas-oficiales" },
  { title: "Categorías", path: "/categorias" },
  { title: "Sobre Nosotros", path: "/about" },
];

export const SubNavbar = () => {
  return (
    <div className="w-full bg-[#F2F2F2] h-[45px] flex items-center items-center px-8 z-30">
      <ul className="text-[18px] text-slate-700 flex flex-row gap-8 font-semibold">
        {options.map(({ title, path }) => (
          <Link key={title} href={path}>
            {title}
          </Link>
        ))}
      </ul>
    </div>
  );
};
