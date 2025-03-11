"use client";

import { useState, useEffect } from "react";
import { ProductCard } from "./ProductCard";
import { productos } from "@/app/data/products";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";

export const ProductsSlider = () => {
  const [pagina, setPagina] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const itemsPorPagina = 5;

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const productosActuales = isMobile
    ? productos
    : productos.slice(pagina * itemsPorPagina, (pagina + 1) * itemsPorPagina);

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
    <section className="w-[90%] xl:w-fit md:px-10 bg-[#eefafa] rounded-[8px] py-6 mx-auto overflow-hidden">
      <div className="relative flex items-center justify-center w-full mx-auto">
        {!isMobile && (
          <button
            onClick={anterior}
            className="absolute -left-8 p-2 bg-white hover:bg-gray-400 cursor-pointer rounded-full shadow-sm"
          >
            <GoArrowLeft className="text-gray-600 text-3xl" />
          </button>
        )}

        {/* Contenedor del slider */}
        <div
          className={`flex items-center gap-4 ${
            isMobile
              ? "overflow-x-auto flex-nowrap scroll-smooth scrollbar-none w-full px-4"
              : "overflow-hidden flex-wrap justify-center w-full"
          }`}
          style={{
            maxWidth: isMobile ? "100%" : "calc(240px * 5 + 16px * 4)", // Ajusta al tamaño exacto de las cards
          }}
        >
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

        {!isMobile && (
          <button
            onClick={siguiente}
            className="absolute -right-8 p-2 bg-white hover:bg-gray-400 rounded-full cursor-pointer shadow-sm"
          >
            <GoArrowRight className="text-gray-600 text-3xl" />
          </button>
        )}
      </div>
    </section>
  );
};
