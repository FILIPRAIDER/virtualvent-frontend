"use client";

import { useState } from "react";
import { ProductCard } from "./ProductCard";
import { productos } from "@/app/data/products";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";

export const ProductsSlider = () => {
  const [pagina, setPagina] = useState(0);
  const itemsPorPagina = 5;

  const productosActuales = productos.slice(
    pagina * itemsPorPagina,
    (pagina + 1) * itemsPorPagina
  );

  const siguiente = () => {
    setPagina(
      (prev) => (prev + 1) % Math.ceil(productos.length / itemsPorPagina)
    );
  };

  const anterior = () => {
    setPagina((prev) =>
      prev === 0 ? Math.ceil(productos.length / itemsPorPagina) - 1 : prev - 1
    );
  };

  return (
    <section className="w-[90%] xl:w-[98%] bg-[#eefafa] rounded-[8px] py-6 mx-auto">
      <div className="relative flex items-center justify-center w-fit  mx-auto">
        <button
          onClick={anterior}
          className="absolute -left-8 p-2 bg-white hover:bg-gray-400 cursor-pointer rounded-full shadow-sm "
        >
          <GoArrowLeft className="text-gray-600 text-3xl" />
        </button>

        <div className="flex gap-4 overflow-hidden">
          {productosActuales.map(({ id, cantidad, imagen, nombre, precio }) => (
            <ProductCard
              key={id}
              id={id}
              cantidad={cantidad}
              imagen={imagen}
              nombre={nombre}
              precio={precio}
            />
          ))}
        </div>

        <button
          onClick={siguiente}
          className="absolute -right-8 p-2 bg-white hover:bg-gray-400 rounded-full cursor-pointer shadow-sm"
        >
          <GoArrowRight className="text-gray-600 text-3xl" />
        </button>
      </div>
    </section>
  );
};

export default ProductsSlider;
