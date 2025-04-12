"use client";

import EnterpriseCard from "@/components/enterprise-card";
import HeroSection from "@/components/hero-section";
import DocumentProcess from "@/components/document-process";
import SocialMediaButtons from "@/components/social-media-buttons";
import Footer from "@/components/footer";
import { motion } from "framer-motion";
import CameraGear from "@/components/camera-gear";
import dynamic from "next/dynamic";

// Importar BlogPreview dinámicamente para evitar problemas de SSR
const BlogPreview = dynamic(() => import("@/components/BlogPreview"), {
  ssr: true, // Habilitamos SSR para este componente
  loading: () => (
    <div className="w-full max-w-5xl mb-20 px-4">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-4xl md:text-5xl font-medium">
          Últimos{" "}
          <span className="font-serif italic font-normal text-[#4AFF53]">
            posts
          </span>
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="animate-pulse bg-gray-800 rounded-lg h-48"></div>
        <div className="animate-pulse bg-gray-800 rounded-lg h-48"></div>
      </div>
    </div>
  ),
});

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <main className="flex-grow flex flex-col items-center">
        <HeroSection />
        {/* Enterprise Cards */}
        <section
          aria-label="Proyectos"
          id="proyectos"
          className="w-full max-w-5xl mb-20 px-4"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-medium text-center mb-12"
          >
            Mis{" "}
            <span className="font-serif italic font-normal text-[#4AFF53]">
              proyectos
            </span>
          </motion.h2>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            <motion.div variants={itemVariants}>
              <EnterpriseCard
                logo="image/codegxn.png"
                title="CodeGXN"
                description="Canal dedicado a enseñar programación."
                buttonText="Descúbrelo"
                buttonLink="https://www.youtube.com/@codegxn"
              />
            </motion.div>
            <motion.div variants={itemVariants}>
              <EnterpriseCard
                logo="image/blitzshare.png"
                title="BlitzShare"
                description="Gestiona tus redes sociales en un solo lugar"
                buttonText="Descúbrelo"
                buttonLink="https://www.blitz-share.com/"
              />
            </motion.div>
            <motion.div variants={itemVariants}>
              <EnterpriseCard
                logo="image/discord-logo.webp"
                title="Discord"
                description="Si te gusta la programacion y crear proyectos es tu sitio"
                buttonText="Unete"
                buttonLink="https://discord.gg/EbEuStFF5z"
              />
            </motion.div>
          </motion.div>
        </section>

        {/* Document Process */}
        <section aria-label="Proceso" id="proceso">
          <DocumentProcess />
        </section>

        {/* Camera Gear */}
        <section aria-label="Equipamiento" id="equipo">
          <CameraGear />
        </section>

        {/* Blog Preview */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <BlogPreview />
        </motion.section>

        {/* Social Media Buttons */}
        <section aria-label="Redes Sociales" id="contacto">
          <SocialMediaButtons />
        </section>
      </main>
      <Footer />
    </div>
  );
}
