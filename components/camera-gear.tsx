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
  return (
    <div className="w-full max-w-5xl mx-auto px-4 mb-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-10"
      >
        <h2 className="text-4xl md:text-5xl font-medium mb-4">
          📸 Mi{" "}
          <span className="font-serif italic font-normal text-[#4AFF53]">
            setup
          </span>
        </h2>
        <p className="text-[#999999] max-w-2xl mx-auto">
          Todo mi equipo que uso para grabar y programar.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="grid grid-cols-2 md:grid-cols-3 gap-6"
      >
        {cameraGear.map((item, index) => (
          <motion.div
            key={item.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 + index * 0.1 }}
            className="bg-[#1A1A1A] rounded-xl overflow-hidden group"
          >
            <div className="p-6 flex flex-col items-center text-center">
              <div className="relative h-24 w-24 mb-4">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.name}
                  fill
                  className="object-contain"
                />
              </div>

              <h3 className="text-white font-medium text-lg mb-3">
                {item.name}
              </h3>

              <Link
                href={item.amazonUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-[#999999] hover:text-[#4AFF53] transition-colors flex items-center gap-1 group-hover:underline"
              >
                Ver en Amazon
                <ExternalLink className="w-3 h-3" />
              </Link>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
