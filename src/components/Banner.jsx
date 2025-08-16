import banner from '../assets/un1.jpg'; // Ganti sesuai kebutuhan

export default function Banner() {
  return (
    // <div
    //   className="relative w-full h-[500px] md:h-[676px] bg-cover bg-center"
    //   style={{
    //     backgroundImage: `url('${banner}')`,
    //   }}
    // >
    <div
      className="relative w-full h-[500px] md:h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url('${banner}')`,
      }}
    >
      {/* Text */}
      <div className="absolute top-1/4 left-4 md:left-8 text-white">
        <h2 className="text-2xl md:text-4xl font-bold leading-tight">NEW</h2>
        <h2 className="text-2xl md:text-4xl font-bold leading-tight">COLLECTION</h2>
        <p className="text-sm md:text-lg mt-2">SPRING 2024</p>
      </div>

      {/* Button */}
      <div className="absolute bottom-10 md:bottom-20 right-1/2 translate-x-1/2 md:right-20 md:translate-x-0">
        <button className="bg-beig text-black px-20 md:px-36 py-2 md:py-3 border-2 border-black rounded-sm shadow hover:bg-opacity-80 transition">
          SHOP NOW
        </button>
      </div>
    </div>
  );
}
