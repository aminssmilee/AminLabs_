import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function ProcuctInageSlider({ images }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <div className="relative flex flex-col items-center">
  <Slider {...settings} className="w-full">
    {images.map((src, index) => (
      <div key={index} className="w-full">
        <img
          src={src}
          alt={`Slide ${index}`}
          className="w-full h-[400px] md:h-[500px] object-cover"
        />
      </div>
    ))}
  </Slider>
</div>

  );
}
