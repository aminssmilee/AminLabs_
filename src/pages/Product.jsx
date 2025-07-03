import React, { useState } from "react";
import foto from "../assets/Un1.jpg";
import foto1 from "../assets/aminss.jpg";

const produkList = [
  {
    id: 1,
    nama: "Kaos DRY-EX",
    harga: 199000,
    image: foto,
    deskripsi:
      "Paling disukai! Kaos ringan & cepat kering untuk aktivitas harian yang aktif.",
  },
  {
    id: 2,
    nama: "Kemeja Lengan Pendek",
    harga: 249000,
    image: foto1,
    deskripsi:
      "Gaya kasual dan nyaman untuk segala cuaca. Material adem & stylish.",
  },
  {
    id: 3,
    nama: "Celana Katun Slim Fit",
    harga: 299000,
    image: foto,
    deskripsi:
      "Celana slim fit dengan bahan katun lembut. Nyaman dipakai seharian.",
  },
  {
    id: 4,
    nama: "Jaket Parka",
    harga: 399000,
    image: foto1,
    deskripsi:
      "Jaket parka tahan angin & hujan ringan. Cocok untuk cuaca tidak menentu.",
  },
];

const Product = () => {
  const [activeIndex, setActiveIndex] = useState(0);

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
        const diskon = 0.95; // diskon 5%
        const hargaDiskon = (produk.harga * diskon).toLocaleString();
        const hargaAsli = produk.harga.toLocaleString();

        return (
          <section
            key={produk.id}
            className="h-screen snap-start relative flex items-center justify-center bg-gray-100"
            style={{
              backgroundImage: `url(${produk.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Overlay teks kanan */}
            <div className="absolute right-10 md:left-32 max-w-md text-white text-left drop-shadow-lg top-[55%]">
              <h2 className="text-3xl md:text-4xl font-bold mb-2">
                {produk.nama}
              </h2>
              <p className="text-md md:text-lg mb-2 font-medium">
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
