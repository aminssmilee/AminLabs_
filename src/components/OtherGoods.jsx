import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import p1 from "../assets/images/aminslogo.jpg";


export default function OtherGoods() {
  const products = [
    {
      id: "1",
      name: "Leather Blouse",
      price: 570,
      image: p1,
    },
    {
      id: "2",
      name: "White Shirt",
      price: 320,
      image: p1,
    },
    {
      id: "3",
      name: "Black Pants",
      price: 450,
      image: p1,
    },
    {
      id: "4",
      name: "Denim Jacket",
      price: 600,
      image: p1,
    },
  ];

  const currentId = "1"; // contoh produk yg sedang dibuka

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1, // 1 item per slide
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <h2 className="text-2xl font-bold mb-6 text-center">OTHER GOODS</h2>

      <Slider {...settings} className="mx-auto">
        {products
          .filter((p) => p.id !== currentId) // exclude produk yang sedang dibuka
          .map((item) => (
            <div key={item.id} className="px-4">
              <div className="border border-dark overflow-hidden">
                <div className="w-full h-[400px] bg-beig flex items-center justify-center">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="object-contain max-h-[400px]"
                  />
                </div>
                <div className="flex justify-between items-center p-4 text-sm">
                  <span className="capitalize">{item.name}</span>
                  <span className="font-semibold">{item.price} $</span>
                </div>
              </div>
            </div>
          ))}
      </Slider>
    </div>
  );
}
