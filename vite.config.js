import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Tambahkan konfigurasi 'preview' untuk menangani routing di sisi klien
  preview: {
    host: true, // Pastikan ini true, agar dapat diakses di jaringan lokal
    port: 4173,
    // Ini yang akan memperbaiki masalah routing
    // Jika rute tidak cocok dengan file, Vite akan mengarahkan ke index.html
    // Ini memungkinkan React Router untuk mengambil alih
    historyApiFallback: true,
  },
});