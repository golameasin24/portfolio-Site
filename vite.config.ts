
import path from "path"
import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react-swc"
import { defineConfig } from "vite"

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})


// import path from "path";
// import react from "@vitejs/plugin-react-swc";
// import { defineConfig } from "vite";

// // TailwindCSS plugin import করা দরকার নেই, কারণ আমরা postcss handle করি
// // import tailwindcss from "@tailwindcss/vite"; // এটা optional, আমরা postcss use করব

// export default defineConfig({
//   plugins: [react()],
//   resolve: {
//     alias: {
//       "@": path.resolve(__dirname, "./src"), // @ মানে src ফোল্ডার
//     },
//   },
// });
