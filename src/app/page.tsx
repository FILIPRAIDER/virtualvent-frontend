import { TextChanging } from "@/components";
import { ProductsSlider } from "@/products";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <section className="h-screen w-full flex flex-col-reverse md:flex-row items-center justify-center px-4 md:px-12">
        {/* Sección de texto */}
        <div className="w-full md:w-1/2 flex items-center justify-center h-full">
          <TextChanging />
        </div>

        {/* Sección de imagen */}
        <div className="w-full md:w-1/2 flex items-center justify-center mt-10 md:mt-0">
          <Image
            src="/Puesto.svg"
            alt="Home"
            width={500}
            height={500}
            className="h-[250px] md:h-[400px] w-auto"
          />
        </div>
      </section>

      {/* Slider de productos */}
      <div className="py-10">
        <ProductsSlider />
      </div>
    </main>
  );
}
