"use client";

import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { ProductCard } from "./ProductCard";
import { productos } from "@/app/data/products";

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
    <div className="relative flex items-center justify-center w-full max-w-screen mx-auto">
      <button
        onClick={anterior}
        className="absolute left-0 p-2 bg-white hover:bg-gray-400 cursor-pointer rounded-full shadow-sm"
      >
        <FaArrowLeft className="text-gray-600 text-3xl" />
      </button>

      <div className="flex gap-4 overflow-hidden">
        {productosActuales.map(({ id, imagen, nombre, precio }) => (
          <ProductCard
            key={id}
            imagen={imagen}
            nombre={nombre}
            precio={precio}
          />
        ))}
      </div>

      <button
        onClick={siguiente}
        className="absolute right-0 p-2 bg-white hover:bg-gray-400 rounded-full cursor-pointer shadow-sm"
      >
        <FaArrowRight className="text-gray-600 text-3xl" />
      </button>
    </div>
  );
};

export default ProductsSlider;
