import { cookies } from "next/headers";
import { productos } from "../data/products";
import { ItemCard, WidgetItem } from "@/shopping-cart";
import { ProductProps, ProductsSlider } from "@/products";
import Link from "next/link";
import { CiShop } from "react-icons/ci";

export const metadata = {
  title: "Carrito de compras",
  description: "Carrito de compras",
};

interface ProductInCart {
  product: ProductProps;
  quantity: number;
}

const getProductsInCart = (cart: { [id: string]: number }) => {
  const productsInCart: ProductInCart[] = [];

  for (const id of Object.keys(cart)) {
    const product = productos.find((prod) => prod.id === id);
    if (product) {
      productsInCart.push({ product: product, quantity: cart[id] });
    }
  }

  return productsInCart;
};

const getTotalCount = (cart: { [id: string]: number }): number => {
  let items = 0;
  Object.values(cart).forEach((value) => {
    items += value as number;
  });

  return items;
};

export default async function CartPage() {
  const cookiesStore = await cookies();
  const cart = JSON.parse(cookiesStore.get("cart")?.value ?? "{}");
  const productsInCart = getProductsInCart(cart);
  const totalItems = getTotalCount(cart);

  const totalToPay = productsInCart.reduce(
    (prev, current) => current.product.precio * current.quantity + prev,
    0
  );

  return (
    <div className="py-10 md:px-8">
      <div className="flex flex-col md:flex-row gap-10 md:gap-6 w-full">
        {/* Contenedor de productos con altura máxima y scroll interno */}
        <div className="flex flex-col gap-4 md:w-[800px] sm:w-8/12 h-[400px] max-h-[400px] overflow-y-auto p-2">
          {productsInCart.length === 0 && (
            <div className="flex flex-col items-center justify-center md:w-full h-[300px] bg-white rounded-lg border border-gray-200">
              <p className="text-gray-600 text-2xl">
                No hay productos en el carrito
              </p>
              <Link href="/" className="text-xl underline text-[#349999]">
                Ir a comprar
              </Link>
              <CiShop className="text-5xl text-[#349999] mt-4" />
            </div>
          )}

          {productsInCart.map(({ product, quantity }) => (
            <ItemCard key={product.id} product={product} quantity={quantity} />
          ))}
        </div>

        {/* Resumen de compra */}
        <div className="flex flex-col w-full sm:w-4/12">
          <WidgetItem title="Resumen de compra">
            <div className="flex flex-col gap-2">
              <p className="text-[#093F51] mt-4">
                Número de productos: {totalItems}
              </p>
              <div className="mt-2 flex justify-between gap-4">
                <h3 className="text-xl text-gray-600 text-left">
                  Total a pagar:
                </h3>
                <h3 className="text-2xl font-bold text-[#093F51]">
                  ${totalToPay.toFixed(2)}
                </h3>
              </div>
            </div>
          </WidgetItem>
        </div>
      </div>

      <div className="mt-20 flex flex-col gap-4 px-2 py-4">
        <h3 className="text-3xl text-[#349999] font-semibold px-6">
          Productos que podrian interesarte
        </h3>
        <ProductsSlider />
      </div>
    </div>
  );
}
