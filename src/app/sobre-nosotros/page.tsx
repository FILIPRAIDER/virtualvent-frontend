"use client";
import { motion } from "framer-motion";

export default function AboutUsPage() {
  return (
    <div className="flex flex-col items-center p-8 bg-gray-50 min-h-screen">
      {/* Sección de historia */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-4xl text-center mb-16"
      >
        <h1 className="text-5xl font-bold text-[#093F51] mb-6">
          Nuestra Historia
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed">
          En 2023, comenzamos como un pequeño equipo de apasionados por la
          tecnología, con el objetivo de simplificar la vida de las personas a
          través de soluciones innovadoras.
        </p>
      </motion.section>

      {/* Sección de equipo */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        className="w-full max-w-6xl text-center"
      >
        <h2 className="text-4xl font-bold text-[#093F51] mb-8">
          Nuestro Equipo
        </h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.3 },
            },
          }}
        >
          {["Juan Pérez", "María López", "Carlos Gómez"].map((name, index) => (
            <motion.div
              key={index}
              className="p-6 bg-white rounded-lg shadow-md"
              whileHover={{ scale: 1.05 }}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <h3 className="text-2xl font-semibold mt-4">{name}</h3>
              <p className="text-gray-600">
                {index === 0
                  ? "CEO y Fundador"
                  : index === 1
                  ? "CTO"
                  : "Diseñador UX/UI"}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Llamado a la acción */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
        className="mt-16 text-center"
      >
        <h2 className="text-4xl font-bold text-[#093F51] mb-4">
          Únete a Nosotros
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          ¿Quieres ser parte de nuestra comunidad? ¡Únete hoy!
        </p>
        <motion.button
          className="bg-[#093F51] text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-[#072A3A] transition-colors"
          whileHover={{ scale: 1.1, rotate: 2 }}
          whileTap={{ scale: 0.95, rotate: -2 }}
        >
          Contáctanos
        </motion.button>
      </motion.section>
    </div>
  );
}
