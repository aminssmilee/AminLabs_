import React, { useEffect, useState } from "react";
import axios from "axios";

// Data manual sebagai fallback

const Product = () => {
  const [produkList, setProdukList] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/produks")
      .then((res) => setProdukList(res.data))
      .catch((err) => {
        console.warn("Gagal ambil dari API, gunakan data manual.", err);
      });
  }, []);

  const handleScroll = (e) => {
    const vh = window.innerHeight;
    const index = Math.round(e.target.scrollTop / vh);
    setActiveIndex(index);
  };

  return (
    <div
      className="relative h-screen overflow-y-scroll snap-y snap-mandatory no-scrollbar"
      onScroll={handleScroll}
    >
      {/* Dot Indicator */}
      <div className="hidden md:flex flex-col gap-3 fixed top-1/2 right-4 transform -translate-y-1/2 z-50">
        {produkList.map((_, i) => (
          <div
            key={i}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              activeIndex === i ? "bg-black scale-125" : "bg-gray-400"
            }`}
          />
        ))}
      </div>

      {/* Produk Section */}
      {produkList.map((produk) => {
        const diskon = 0.95;
        const hargaDiskon = (produk.harga * diskon).toLocaleString();
        const hargaAsli = produk.harga.toLocaleString();

        // Kalau image dari backend (string), tampilkan sebagai URL ke storage
        // Kalau dari fallback (objek import), langsung tampilkan
        const imageUrl =
          typeof produk.image === "string"
            ? `http://127.0.0.1:8000/storage/${produk.image}`
            : produk.image;

        return (
          <section
            key={produk.id}
            className="h-screen snap-start relative flex items-center justify-center bg-gray-100"
            style={{
              backgroundImage: `url(${imageUrl})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <img
              src={produk.image}
              alt={produk.nama}
              className="absolute inset-0 w-full h-full object-cover z-0"
            />

            <div className="absolute right-32 md:left-32 max-w-md text-white text-left drop-shadow-lg top-[55%] font-inter">
              <h2 className="text-2xl md:text-4xl font-bold mb-2">
                {produk.nama}
              </h2>
              <p className="text-sm md:text-lg mb-2 font-medium">
                {produk.deskripsi}
              </p>
              <div className="flex items-baseline gap-3 mb-1">
                <span className="text-3xl font-bold text-red-600">
                  Rp{hargaDiskon}
                </span>
                <span className="line-through text-white/70 text-lg">
                  Rp{hargaAsli}
                </span>
              </div>
              <p className="text-sm text-red-500 font-medium">
                Limited Offers 27 Juni - 3 Juli 2025
              </p>
            </div>
          </section>
        );
      })}
    </div>
  );
};

export default Product;
