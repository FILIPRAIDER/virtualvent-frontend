// utils/cartUtils.ts
import { cookies } from "next/headers";

export const getCartItems = async () => {
  const cookieStore = await cookies();
  const cart = JSON.parse(cookieStore.get("cart")?.value ?? "{}");
  return cart;
};
