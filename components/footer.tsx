export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-4 px-4 mt-auto mb-8 border-t border-gray-800">
      <div className="max-w-5xl mx-auto text-center">
        <p className="text-sm text-gray-400 mb-2">
          © {currentYear}{" "}
          <span className="font-medium">Victor Gonzalez (VictorGXN)</span> •
          Todos los derechos reservados
        </p>
        <p className="text-xs text-gray-500">
          Programador, Creador de Contenido y Fundador de CodeGXN/Blitzshare
        </p>
      </div>
    </footer>
  );
}
