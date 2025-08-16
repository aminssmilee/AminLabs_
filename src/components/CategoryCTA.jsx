import product1 from '../assets/image1.png';
import product2 from '../assets/image1.png';
import product3 from '../assets/image1.png';
import product4 from '../assets/image1.png';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

export default function ReadyToWear() {
  const products = [
    { id: 1, name: "twisted kleid", price: "3500 $", image: product1 },
    { id: 2, name: "layered kleid", price: "1200 $", image: product2 },
    { id: 3, name: "leather bomber", price: "7200 $", image: product3 },
    { id: 4, name: "black turtleneck", price: "1950 $", image: product4 },
  ];

  return (
    <section className="bg-beig px-6 py-10">
      {/* Desktop Header */}
      <div className="hidden md:flex items-center justify-between mb-6 mt-12">
        <h2 className="text-6xl font-helvetica font-bold tracking-tight">
          READY-TO-WEAR
        </h2>
        <a
          href="/ready-to-wear"
          className="inline-flex text-5xl items-center gap-2 text-black hover:opacity-70 transition"
        >
          →
        </a>
      </div>

      {/* Desktop Grid */}
      <div className="hidden md:grid grid-cols-4 border border-black">
        {products.map((product, index) => (
          <div
            key={product.id}
            className={`flex flex-col ${
              index < 4 ? "border-l border-black" : ""
            }`}
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-[500px] object-cover"
            />
            <div className="p-3 flex items-center justify-between">
              <p className="text-sm text-gray-800 capitalize">{product.name}</p>
              <p className="text-sm font-bold">{product.price}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile Slider */}
      <div className="md:hidden">
        <h2 className="text-[40px] font-helvetica font-extrabold text-center tracking-wide mb-6">
          READY-TO-WEAR
        </h2>

        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          spaceBetween={16}
          slidesPerView={1}
          className="pb-8"
        >
          {products.map((product) => (    
            <SwiperSlide key={product.id}>
              <div className="flex flex-col border border-black">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-[400px] object-cover"
                />
                <div className="p-3 flex items-center justify-between">
                  <p className="text-sm text-gray-800 capitalize">{product.name}</p>
                  <p className="text-sm font-bold">{product.price}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* See more bawah dots */}
        <div className="text-center mt-4">
          <a
            href="/ready-to-wear"
            className="inline-flex items-center gap-2 text-black hover:opacity-70 transition"
          >
            see more →
          </a>
        </div>
      </div>
    </section>
  );
}
