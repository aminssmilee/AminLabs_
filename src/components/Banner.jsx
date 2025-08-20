import banner from '../assets/image1.png'; // Ganti sesuai kebutuhan

export default function Banner() {
  return (
    // <div
    //   className="relative w-full h-[500px] md:h-[676px] bg-cover bg-center"
    //   style={{
    //     backgroundImage: `url('${banner}')`,
    //   }}
    // >
    <div
      className="relative w-full h-[500px] min-h-screen bg-cover bg-center font-helvetica"
      style={{
        backgroundImage: `url('${banner}')`,
      }}
    >
      {/* Text */}
      <div
        className="
    absolute 
    left-1/2 
    transform -translate-x-1/2 -translate-y-1/2 
    text-center text-white
    md:top-1/4 top-56 md:left-8 md:transform-none md:text-left
    tracking-tight
  "
      >
        <h2 className="text-5xl md:text-7xl font-semibold text-start leading-none m-0">NEW</h2>
        <h2 className="text-5xl md:text-7xl font-semibold leading-none m-0">COLLECTION</h2>
        <p className="text-lg md:text-2xl text-end leading-none m-0">SPRING 2024</p>
      </div>






      {/* Button */}
      <div className="absolute bottom-56 md:bottom-20 right-0 left-0 md:right-20 md:left-auto flex justify-center md:justify-end">
        <button className="bg-beig text-2xl w-80 md:w-auto text-dark px-6 md:px-36 py-1 md:py-3  hover:bg-opacity-80 transition">
          SHOP NOW
        </button>
      </div>

    </div>
  );
}
