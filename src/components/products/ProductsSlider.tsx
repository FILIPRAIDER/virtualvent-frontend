"use client";

import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { ProductCard } from "./ProductCard";

const productosMock = [
  {
    id: 1,
    nombre: "Producto 1",
    precio: 18900,
    imagen:
      "https://img.freepik.com/premium-photo/fresh-slice-pineapple-white-background_461160-11158.jpg?w=740",
  },
  {
    id: 2,
    nombre: "Producto 2",
    precio: 24900,
    imagen:
      "https://img.freepik.com/free-photo/close-up-tasty-kiwi-white-background_1112-453.jpg?t=st=1740945483~exp=1740949083~hmac=bb34d2e2d8d87f3a4a03f73fbca1fe67cddbdca549469fbcea45bc0eaac80cab&w=1380",
  },
  {
    id: 3,
    nombre: "Producto 3",
    precio: 42900,
    imagen:
      "https://img.freepik.com/free-psd/close-up-delicious-apple_23-2151868338.jpg?t=st=1740945512~exp=1740949112~hmac=1e4141a0ebfa681705bfddfd35bdb1691ef47a030e2120657db5d38b67c8cb53&w=826",
  },
  {
    id: 4,
    nombre: "Producto 4",
    precio: 19800,
    imagen:
      "https://img.freepik.com/premium-photo/watermelon-citrullus-lanatus-with-slice-isolated-white-background_190272-6708.jpg?w=1380",
  },
  {
    id: 5,
    nombre: "Producto 5",
    precio: 28800,
    imagen:
      "https://img.freepik.com/premium-photo/queso-blanco-cheese-isolated-solid-white-background_1079150-220024.jpg?w=900",
  },
];

export const ProductsSlider = () => {
  const [pagina, setPagina] = useState(0);
  const itemsPorPagina = 5;

  const productosActuales = productosMock.slice(
    pagina * itemsPorPagina,
    (pagina + 1) * itemsPorPagina
  );

  const siguiente = () => {
    setPagina(
      (prev) => (prev + 1) % Math.ceil(productosMock.length / itemsPorPagina)
    );
  };

  const anterior = () => {
    setPagina((prev) =>
      prev === 0
        ? Math.ceil(productosMock.length / itemsPorPagina) - 1
        : prev - 1
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
