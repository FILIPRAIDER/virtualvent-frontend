import { ProductsSlider, TextChanging } from "@/components";
import Image from "next/image";

export default function Home() {
  return (
    <main className="h-full">
      {/* <div className="fixed inset-0 z-[-1] h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_18%,#fff_50%,#349999_75%,#093F51_100%)]"></div> */}

      <section className="h-screen w-full flex">
        <div className=" w-[50%] h-full flex items-center justify-center">
          <TextChanging />
        </div>
        <div className="w-[40%] h-full flex items-center justify-center">
          <Image
            src="/puesto.svg"
            alt="Home"
            width={600}
            height={600}
            className="h-[500px]"
          />
        </div>
      </section>
      <section className="w-[90%] bg-[#eefafa] rounded-[8px] py-6 mx-auto">
        <ProductsSlider />
      </section>
    </main>
  );
}
