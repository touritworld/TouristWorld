import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ["lucide-react"], // Excluye paquetes problemáticos de la optimización
  },
  build: {
    outDir: "dist", // Carpeta donde se construirá el proyecto
  },
});
