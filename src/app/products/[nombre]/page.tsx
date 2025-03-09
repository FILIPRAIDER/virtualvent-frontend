import { use } from "react"; // Importamos use() para desempaquetar params
import { productos } from "@/app/data/products";
import { ProductInfo } from "@/components";
import { ImageGallery } from "@/components/products/ImageGallery";
import { notFound } from "next/navigation";

interface ProductPageProps {
  params: Promise<{ nombre: string }>; // params es una Promise
}

export default function ProductDetail({ params }: ProductPageProps) {
  const { nombre } = use(params); // Usamos use() para obtener los valores

  const nombreNormalizado = nombre.toLowerCase().replace(/\s+/g, "-");

  const product = productos.find(
    (p) => p.nombre.toLowerCase().replace(/\s+/g, "-") === nombreNormalizado
  );

  if (!product) {
    return notFound();
  }

  return (
    <div className=" flex gap-6 flex-col w-full max-w-6xl mx-auto p-6  ">
      <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] items-center gap-4 w-full h-full">
        {/* Galería de Imágenes (2fr) */}
        <div className="flex justify-center">
          <ImageGallery />
        </div>

        {/* Información del Producto (1fr) */}
        <div>
          <ProductInfo {...product} />
        </div>
      </div>

      {/* Descripción del producto */}
      <div className="md:col-span-2 bg-white p-6 rounded-lg shadow-md  ">
        <h2 className="text-lg font-semibold">Descripción</h2>
        <p className="text-gray-700 mt-2">{product.descripcion}</p>
      </div>
    </div>
  );
}
