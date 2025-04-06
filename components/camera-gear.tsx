"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

// Datos del equipo fotográfico
const cameraGear = [
  {
    name: "Sony zve10",
    image: "image/setup/camara.webp",
    amazonUrl: "https://amzn.to/449ytnu",
  },
  {
    name: "Sony E 11 mm F1.8",
    image: "image/setup/objetivo.webp",
    amazonUrl: "https://amzn.to/42wikqX",
  },
  {
    name: "Microfonos",
    image: "/image/setup/microfono.png",
    amazonUrl: "https://amzn.to/3FTe1wZ",
  },
  {
    name: "Macbook pro M1",
    image: "image/setup/portatil.png",
    amazonUrl: "https://amzn.to/4jnWQSV",
  },
  {
    name: "Teclado",
    image: "image/setup/teclado.png",
    amazonUrl: "https://amzn.to/42jjnJE",
  },
  {
    name: "Mesa elevable",
    image: "image/setup/mesa.avif",
    amazonUrl: "https://amzn.to/3XKFDuC",
  },
];

export default function CameraGear() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="w-full max-w-5xl mx-auto px-4 mb-20 relative">
      {/* Efectos de fondo */}
      <div className="absolute top-20 -right-20 w-64 h-64 bg-[#4AFF53]/5 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-20 -left-20 w-64 h-64 bg-[#4AFF53]/5 rounded-full blur-[100px] -z-10" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mb-10"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          📸 Mi{" "}
          <span className="font-serif italic font-normal text-[#4AFF53]">
            setup
          </span>
        </h2>
        <p className="text-[#BBBBBB] max-w-2xl mx-auto text-lg">
          Todo mi equipo que uso para grabar y programar.
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-2 md:grid-cols-3 gap-6"
      >
        {cameraGear.map((item, index) => (
          <motion.div
            key={item.name}
            variants={itemVariants}
            whileHover={{ y: -5, scale: 1.02 }}
            className="bg-gradient-to-b from-[#1A1A1A] to-[#151515] rounded-xl overflow-hidden group border border-[#2A2A2A] transition-all duration-300 hover:border-[#4AFF53]/20 shadow-md hover:shadow-xl hover:shadow-[#4AFF53]/5"
          >
            <div className="p-6 flex flex-col items-center text-center h-full">
              <motion.div
                className="relative h-28 w-28 mb-5"
                whileHover={{
                  scale: 1.08,
                  rotateZ: 3,
                  transition: { type: "spring", stiffness: 300 },
                }}
              >
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.name}
                  fill
                  className="object-contain drop-shadow-[0_5px_15px_rgba(74,255,83,0.15)]"
                />

                {/* Efecto de brillo al hacer hover */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#4AFF53]/0 to-[#4AFF53]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />
              </motion.div>

              <h3 className="text-white font-medium text-lg mb-3">
                {item.name}
              </h3>

              <motion.div whileHover={{ y: -2 }} className="mt-auto pt-3">
                <Link
                  href={item.amazonUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs bg-black/30 text-[#AAAAAA] hover:text-[#4AFF53] transition-all flex items-center gap-1 px-4 py-2 rounded-full border border-[#333] hover:border-[#4AFF53]/30 hover:bg-[#4AFF53]/5"
                >
                  Ver en Amazon
                  <ExternalLink className="w-3 h-3" />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        viewport={{ once: true }}
        className="mt-8 text-center"
      >
        <p className="text-[#777777] text-sm italic">
          * Los enlaces contienen afiliados
        </p>
      </motion.div>
    </div>
  );
}
