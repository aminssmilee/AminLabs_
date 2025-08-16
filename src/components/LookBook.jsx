// src/components/LookBook.jsx
import img1 from "../assets/image1.png";
import img2 from "../assets/image1.png"; // ganti sesuai gambar

export default function LookBook() {
  return (
    <>
      <div className="w-full bg-beig font-helvetica py-12">
        {/* Header */}
        <header className="px-6 mb-10">
          <h1 className="text-[40px] md:text-6xl font-bold tracking-tight md:text-left text-center text-stone-900">
            LOOKBOOK
          </h1>
        </header>

        {/* Grid Layout: split kiri–kanan */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 px-6">
          {/* Kiri: gambar kecil + teks */}
          <div className="flex flex-row md:flex-col justify-between h-full items-start gap-4">
            {/* Gambar kecil */}
            <div className="w-40 md:w-60 shrink-0">
              <img
                src={img1}
                alt="Model dark coat"
                className="w-full aspect-[3/5] object-cover"
              />
            </div>

            {/* Text (mobile: kanan gambar, desktop: bawah gambar) */}
            <div className="text-sm text-stone-600 leading-relaxed md:mt-6 tracking-tight">
              <p>
                The Spring 24 collection is composed of two chapters: Garde-Robe
                Balenciaga’s line of refined wardrobe essentials and seasonal
                ready-to-wear components.
              </p>
            </div>
          </div>

          {/* Kanan: gambar besar potret + teks kanan */}
          <div className="flex justify-between items-start">
            {/* Teks di kanan (top align) */}
            <div className="text-sm text-stone-600 leading-relaxed md:mt-6 tracking-tight">
              <p>
                dkjhf — ini teks di sisi kanan gambar (posisi atas).
              </p>
            </div>

            {/* Gambar di kiri */}
            <div className="w-full md:w-96">
              <img
                src={img2}
                alt="Model by balcony"
                className="w-full aspect-[3/5] object-cover border border-dark"
              />
            </div>
          </div>
        </section>
      </div>
      <div className="bg-beig">
        <div className="px-4 mx-auto">
          {/* Layout grid hanya aktif di md ke atas */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-min">
            {/* Third Row - Large horizontal image */}
            <div className="col-span-1 md:col-span-8">
              <img
                src={img1}
                alt="Model with sunglasses"
                className="w-full h-auto object-cover"
              />
            </div>

            <div className="col-span-1 md:col-span-4 flex flex-col gap-6">
              <p className="text-xs text-stone-600 leading-relaxed">
                Bold lines, clean cuts, and a monochromatic palette define this
                collection. Each piece is carefully crafted to embody modern
                sophistication.
              </p>
              <img
                src={img1}
                alt="Model in light coat"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
          <div className="grid grid-cols-4 gap-4 p-4 bg-beig">
            {/* Kolom 1 (kosong tapi ada warna) */}
            <div className="bg-beig flex items-center justify-center">
              {/* Bisa tambahkan teks placeholder kalau mau */}
            </div>

            {/* Kolom 2 (gambar) */}
            <div>
              <img src={img1} alt="Gambar 1" className="w-full h-full object-cover" />
            </div>

            {/* Kolom 3 (gambar) */}
            <div>
              <img src={img2} alt="Gambar 2" className="w-full h-full object-cover" />
            </div>

            {/* Kolom 4 (kosong tapi ada warna) */}
            <div className="bg-gray-beig flex items-center justify-center">
            </div>
          </div>
          <div
            className="text-white text-center p-4 flex flex-col h-96 items-center bg-cover bg-center"
            style={{ backgroundImage: `url(${img1})` }}
          >
            <div className="bg-black/50 p-6 rounded-lg">
            </div>
          </div>
        </div>
      </div>

    </>
  );
}
