"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const texts: string[] = [
  "Comercio sin intermediarios precios más bajos",
  "Lleva tu cosecha al mundo digital",
  "Cultivamos confianza, cosechamos satisfacción",
  "Conecta con el campo, compra con confianza",
  "Invierte en lo natural, el campo te lo agradece",
  "Digitaliza tu negocio agrícola hoy",
];

export function TextChanging(): React.JSX.Element {
  const [index, setIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 3000); // Cambia cada 3 segundos

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col justify-center items-start text-black px-6 w-full max-w-[70ch]">
      <h1 className="text-3xl font-normal">
        Descubre VirtualVent, el lugar donde
      </h1>
      <div className="relative h-[80px] w-full overflow-hidden flex items-center">
        <AnimatePresence mode="wait">
          <motion.h1
            key={texts[index]}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-semibold text-[#349999] absolute w-full"
          >
            {texts[index]}
          </motion.h1>
        </AnimatePresence>
      </div>
    </div>
  );
}
