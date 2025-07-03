import React, { useState, useEffect } from "react";
import banner from "../assets/Un1.jpg"; // Ganti sesuai kebutuhan
import banner1 from "../assets/image1.png"; // Ganti sesuai kebutuhan
import banner2 from "../assets/image.png"; // Ganti sesuai kebutuhan
import { Typewriter } from "react-simple-typewriter";
import {
  FaUser,
  FaUserPlus,
  FaShoppingCart,
  FaHeart,
  FaSearch,
  FaInfoCircle,
  FaCheckCircle,
  FaHeadset,
} from "react-icons/fa";
import barcode from "../assets/bc.jpg"; // Ganti sesuai kebutuhan

const sections = ["Home", "Kategori", "Rekomendasi"];
const banners = [banner, banner1, banner2];

const Home = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [currentBanner, setCurrentBanner] = useState(0);

  const handleScroll = (e) => {
    const sectionHeight = window.innerHeight;
    const index = Math.round(e.target.scrollTop / sectionHeight);
    setActiveIndex(index);
  };

  // Auto-slide banner tiap 5 detik
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="relative h-screen overflow-y-scroll snap-y snap-mandatory no-scrollbar font-amsi"
      onScroll={handleScroll}
    >
      {/* Indicator bullets on right side */}
      <div className="hidden md:flex flex-col gap-3 fixed top-1/2 right-4 transform -translate-y-1/2 z-50">
        {sections.map((_, i) => (
          <div
            key={i}
            className={`w-1 h-1 hover:h-4 rounded-full transition-all duration-300 ${
              activeIndex === i ? "bg-black scale-125" : "bg-gray-400"
            }`}
          />
        ))}
      </div>

      {/* Section 1: Banner */}
      <section className="min-h-screen snap-start relative flex items-center justify-center bg-white px-4 ">
        <div className="w-full max-w-7xl mx-auto flex flex-col ">
          {/* Banner Area (tinggi lebih kecil) */}
          <div className="relative h-[300px] w-full rounded-xl overflow-hidden shadow-md bg-black group">
            <img
              src={banners[currentBanner]}
              alt="Banner"
              className="w-full h-full object-cover"
            />

            {/* Navigasi Panah */}
            <button
              onClick={() =>
                setCurrentBanner((prev) =>
                  prev === 0 ? banners.length - 1 : prev - 1
                )
              }
              className="absolute top-1/2 left-4 transform -translate-y-1/2 
               bg-white text-black p-2 rounded-full shadow 
               opacity-0 group-hover:opacity-100 transition duration-300 z-20"
            >
              &#8592;
            </button>

            {/* Panah Kanan */}
            <button
              onClick={() =>
                setCurrentBanner((prev) => (prev + 1) % banners.length)
              }
              className="absolute top-1/2 right-4 transform -translate-y-1/2 
               bg-white text-black p-2 rounded-full shadow 
               opacity-0 group-hover:opacity-100 transition duration-300 z-20"
            >
              &#8594;
            </button>

            {/* Dot Indicator */}
            <div className="absolute bottom-4 left-5 flex space-x-2 z-20">
              {banners.map((_, i) => (
                <span
                  key={i}
                  className={`w-1 h-1 rounded-full ${
                    currentBanner === i ? "bg-white" : "bg-white/50"
                  } transition duration-300`}
                ></span>
              ))}
            </div>

            {/* CTA Button */}
            <button className="absolute bottom-4 right-5 bg-white text-black px-4 py-2 text-sm rounded hover:bg-gray-100 shadow z-20">
              Lihat Promo Lainnya
            </button>
          </div>

          {/* Konten Tambahan */}
          <div className="py-8">
            <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-6">
              {/* KIRI - Teks Typewriter */}
              <div className="w-full md:w-1/2">
                <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4 text-black">
                  Experience Modern{" "}
                  <span className="bg-black text-white px-2 rounded">
                    <Typewriter
                      words={["Style", "Wear", "Outfit", "Fashion"]}
                      loop={true}
                      cursor
                      cursorStyle="|"
                      typeSpeed={80}
                      deleteSpeed={50}
                      delaySpeed={1500}
                    />
                  </span>
                </h1>
                <p className="text-lg text-gray-600">
                  Discover the latest collections at{" "}
                  <span className="font-semibold text-black">
                    AminLabs by Amin's Project
                  </span>
                  , your trusted destination for modern elegance and everyday
                  essentials.
                </p>
              </div>

              {/* KANAN - Split Form & Barcode */}
              <div className="w-full md:w-1/2 bg-white rounded-lg p-6 text-black grid grid-cols-1 md:grid-cols-2 gap-6 border border-transparent hover:border-black transition-all duration-300">
                {/* Kiri - Form */}
                <form className="flex flex-col gap-4 w-full max-w-sm">
                  <div className="flex flex-col">
                    <label className="text-sm font-sm text-gray-700 mb-1">
                      Kode Produk
                    </label>
                    <input
                      type="text"
                      placeholder="Contoh: ABCD1234"
                      className="px-4 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black transition"
                    />
                  </div>

                  <div className="flex flex-col">
                    <label className="text-sm font-sm text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="you@example.com"
                      className="px-4 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black transition"
                    />
                  </div>

                  <button
                    type="submit"
                    className="mt-2 bg-black text-white py-2 text-sm rounded-md hover:bg-neutral-800 transition"
                  >
                    Verifikasi Keaslian
                  </button>
                </form>

                {/* Kanan - Barcode / Info */}
                <div className="flex flex-col items-center justify-center text-center">
                  <img
                    src={barcode} // ganti dengan gambar barcode kamu
                    alt="Barcode"
                    className="w-40 h-40 object-contain mb-3"
                  />
                  <p className="text-xs text-gray-600">
                    Scan kode atau masukkan manual untuk cek keaslian produk.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Kategori */}
      <section className="h-screen snap-start relative flex flex-col justify-center items-center px-6 text-center overflow-hidden">
        {/* Split background */}
        <div className="absolute inset-0 flex flex-col z-0">
          <div className="h-[70%] bg-gray-200" />
          <div className="h-[30%] bg-white" />
        </div>

        {/* Konten kategori */}
        <div className="relative z-10">
          <h2 className="text-3xl font-semibold mb-6">Kategori</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-3xl">
            {["Pria", "Wanita", "Anak", "Aksesori"].map((kategori) => (
              <div
                key={kategori}
                className="bg-white rounded-lg p-6 shadow hover:shadow-md transition"
              >
                <p className="font-medium">{kategori}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Rekomendasi Produk */}
      <section className="h-screen snap-start flex flex-col justify-center items-center bg-white px-6 text-center">
        <h2 className="text-3xl font-semibold mb-6">Rekomendasi Produk</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-4xl">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="bg-gray-100 rounded-lg shadow p-4">
              <div className="h-40 bg-white mb-2 rounded"></div>
              <h3 className="font-medium text-sm">Kaos DRY-EX {i}</h3>
              <p className="text-red-600 font-bold">Rp199.000</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
