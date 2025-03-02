"use client";
import Image from "next/image";
import { useState } from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

interface Product {
  id: number;
  image: string;
  title: string;
  price: string;
}

const products: Product[] = [
  { id: 1, image: "/usb1.png", title: "Adaptador WiFi USB", price: "$18.900" },
  { id: 2, image: "/usb2.png", title: "WiFi USB 600mbps", price: "$24.900" },
  { id: 3, image: "/usb3.png", title: "Comfast WiFi USB", price: "$42.900" },
  { id: 4, image: "/usb4.png", title: "WiFi 802.11n", price: "$19.800" },
  { id: 5, image: "/usb5.png", title: "Receptor WiFi 5GHz", price: "$44.850" },
  { id: 6, image: "/usb6.png", title: "Tarjeta WiFi AC", price: "$28.900" },
];

const ITEMS_PER_PAGE = 3;

export const Carousel = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = Math.ceil(products.length / ITEMS_PER_PAGE);

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1 < totalPages ? prev + 1 : 0));
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 >= 0 ? prev - 1 : totalPages - 1));
  };

  return (
    <div className="w-full max-w-4xl mx-auto -my-30 p-4">
      <div className="relative">
        {/* Botón Izquierdo */}
        <button
          onClick={prevPage}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-200 hover:bg-gray-300 p-2 rounded-full shadow"
        >
          <BiChevronLeft size={24} />
        </button>

        {/* Contenedor de productos */}
        <div className="flex overflow-hidden ">
          {products
            .slice(
              currentPage * ITEMS_PER_PAGE,
              (currentPage + 1) * ITEMS_PER_PAGE
            )
            .map((product) => (
              <div key={product.id} className="w-1/3 p-2">
                <div className="bg-white shadow-sm shadow-[#349999] rounded-lg p-4">
                  <Image
                    src={product.image}
                    alt={product.title}
                    width={300}
                    height={300}
                    className="w-full h-32 object-contain"
                  />
                  <p className="mt-2 text-sm">{product.title}</p>
                  <p className="text-lg font-semibold">{product.price}</p>
                </div>
              </div>
            ))}
        </div>

        {/* Botón Derecho */}
        <button
          onClick={nextPage}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-200 hover:bg-gray-300 p-2 rounded-full shadow"
        >
          <BiChevronRight size={24} />
        </button>
      </div>

      {/* Indicadores de página */}
      <div className="flex justify-center mt-4 space-x-2">
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentPage(index)}
            className={`w-3 h-3 rounded-full ${
              currentPage === index ? "bg-gray-700" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};
