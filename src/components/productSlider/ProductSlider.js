// ProductSlider.js
import Slider from "react-slick";

const ProductSlider = ({ title, products }) => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 4 } },
      { breakpoint: 768, settings: { slidesToShow: 3 } },
      { breakpoint: 576, settings: { slidesToShow: 2 } },
      { breakpoint: 400, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className="mb-8 px-8 py-4">
      <div className=" bg-primary p-4 text-2xl rounded font-semibold mb-4">
        {title}
      </div>
      <Slider {...settings}>
        {products.map((product, index) => (
          <div key={index} className="px-2">
            <div className="border rounded-lg p-4">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-32 object-cover"
              />
              <h3 className="text-lg font-medium mt-2">{product.name}</h3>
              <p className="text-gray-700">{product.price}</p>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default ProductSlider;
