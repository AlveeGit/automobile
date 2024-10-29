// ProductSlider.js
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ProductSlider = ({ title, products, viewAllLink }) => {
  const sliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(8);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: slidesToShow, // Dynamically adjust slidesToShow based on screen size
    slidesToScroll: 1,
    afterChange: (index) => setCurrentSlide(index), // Track current slide index
    responsive: [
      { breakpoint: 1920, settings: { slidesToShow: 7 } },
      { breakpoint: 1600, settings: { slidesToShow: 6 } },
      { breakpoint: 1280, settings: { slidesToShow: 5 } },
      { breakpoint: 1024, settings: { slidesToShow: 4 } },
      { breakpoint: 768, settings: { slidesToShow: 3 } },
      { breakpoint: 576, settings: { slidesToShow: 2 } },
      { breakpoint: 400, settings: { slidesToShow: 1 } },
    ],
  };

  useEffect(() => {
    const updateSlidesToShow = () => {
      const width = window.innerWidth;

      // Set slidesToShow based on the current screen width
      if (width >= 1920) setSlidesToShow(8);
      else if (width >= 1600) setSlidesToShow(7);
      else if (width >= 1280) setSlidesToShow(6);
      else if (width >= 1024) setSlidesToShow(5);
      else if (width >= 768) setSlidesToShow(4);
      else if (width >= 576) setSlidesToShow(3);
      else if (width >= 400) setSlidesToShow(2);
      else setSlidesToShow(1);
    };

    updateSlidesToShow(); // Run on initial render
    window.addEventListener("resize", updateSlidesToShow); // Update on resize
    return () => window.removeEventListener("resize", updateSlidesToShow);
  }, []);

  const handlePrev = () => sliderRef.current.slickPrev();
  const handleNext = () => sliderRef.current.slickNext();

  // Calculate when to disable buttons
  const isPrevDisabled = currentSlide === 0;
  const isNextDisabled = currentSlide >= products.length - slidesToShow;

  return (
    <section className="mb-8 px-8 py-4">
      {/* Title and Navigation Buttons */}
      <div className="flex items-center justify-center mb-4 relative">
        <div className="flex-grow text-center text-xl ">
          {title}
        </div>

        <div className="absolute right-10">
          {viewAllLink && (
            <Link to={viewAllLink} className="link">
              View All
            </Link>
          )}

          {/* Navigation Buttons */}
          <button
            onClick={handlePrev}
            disabled={isPrevDisabled}
            className={`slider-btn ${
              isPrevDisabled ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            <FaChevronLeft size={12} />
          </button>
          <button
            onClick={handleNext}
            disabled={isNextDisabled}
            className={`slider-btn ${
              isNextDisabled ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            <FaChevronRight size={12} />
          </button>
        </div>
      </div>

      {/* Product Slider */}
      <Slider ref={sliderRef} {...settings}>
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
