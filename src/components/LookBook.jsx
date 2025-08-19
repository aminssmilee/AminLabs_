import img1 from "../assets/image1.png";
// import img2 from "../assets/image1.png"; // ganti sesuai gambar

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
        <div className="flex flex-col lg:flex-row lg:justify-between items-center min-h-screen gap-6 p-6">
          {/* Bagian Gambar */}
          <span className="block">
            <img
              src={img1}
              alt="Foto contoh"
              className="w-[400px] h-[600px] md:w-[700px] md:h-[900px] object-cover"
            />
          </span>

          {/* Bagian Teks */}
          <span className="flex flex-col lg:flex-row justify-between w-full lg:w-[800px] h-auto lg:h-[900px]">
            {/* Bagian Kiri (40%) */}
            <div className="lg:basis-2/5 lg:pr-2 mb-4 lg:mb-0 overflow-y-auto">
              <p className="text-sm leading-relaxed break-words text-justify">
                Where does it come from?
                Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

                The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
              </p>
              <p className="text-sm leading-relaxed break-words mt-2">
                Tambahan text ke bawah biar terlihat lebih panjang.
              </p>
              <p className="text-sm leading-relaxed break-words mt-2">
                Contoh paragraf lain yang turun ke bawah.
              </p>
            </div>

            {/* Bagian Kanan (60%) */}
            <div className="lg:basis-3/5 lg:pl-2 flex flex-col justify-start">
              {/* Foto */}
              <img
                src={img1}
                alt="contoh"
                className="w-full h-60 lg:h-[500px] object-cover mb-2"
              />
              {/* Text di bawah foto */}
              <div className="break-words leading-snug text-justify md:pr-24">
                <p>Where does it come from?Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32</p>
              </div>
            </div>
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 p-6 gap-6">
          {/* Bagian kiri kosong (hilang di mobile biar tidak mengganggu) */}
          <div className="hidden md:block"></div>

          {/* Bagian tengah gambar */}
          <div className="flex flex-col justify-center order-1 md:order-none">
            <p className="mb-4 text-justify">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi minima
              deleniti voluptas ratione porro sit exercitationem sunt amet ex. Soluta
              aperiam animi porro, molestias fugit voluptatum unde facilis eius
              laboriosam.
            </p>
            <img
              src={img1}
              alt="Gambar"
              className="w-[300px] h-[400px] object-cover right"
            />
          </div>

          {/* Bagian kanan tulisan */}
          <div className="">
            <h2 className="text-lg font-bold mb-2">Judul Konten</h2>
            <p className="text-sm leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto minus
              beatae modi, id reprehenderit tenetur odio nisi eveniet fugiat.
            </p>
          </div>
        </div>




      </div>


    </>
  );
}
