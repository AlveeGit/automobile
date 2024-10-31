import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const ItemSlider = ({ title, items, viewAllLink, shade }) => {
  const { t } = useTranslation();
  const sliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(8);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    afterChange: (index) => setCurrentSlide(index),
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
      if (width >= 1920) setSlidesToShow(8);
      else if (width >= 1600) setSlidesToShow(7);
      else if (width >= 1280) setSlidesToShow(6);
      else if (width >= 1024) setSlidesToShow(5);
      else if (width >= 768) setSlidesToShow(4);
      else if (width >= 576) setSlidesToShow(3);
      else if (width >= 400) setSlidesToShow(2);
      else setSlidesToShow(1);
    };

    updateSlidesToShow();
    window.addEventListener("resize", updateSlidesToShow);
    return () => window.removeEventListener("resize", updateSlidesToShow);
  }, []);

  const handlePrev = () => sliderRef.current.slickPrev();
  const handleNext = () => sliderRef.current.slickNext();
  const isPrevDisabled = currentSlide === 0;
  const isNextDisabled = currentSlide >= items.length - slidesToShow;

  return (
    <section className="mb-8 px-8 py-4">
      <div className="flex items-center justify-center mb-6 relative">
        <div className="flex-grow text-center text-xl">{title}</div>
        <div className="absolute right-10 flex items-center space-x-4">
          {viewAllLink && (
            <Link to={viewAllLink} className="link">
              {t("common.viewAll")}
            </Link>
          )}
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

      <Slider ref={sliderRef} {...settings}>
        {items.map((item, index) => (
          <div key={index} className="px-2">
            <div
              className={`min-h-[230px] flex flex-col justify-between items-center rounded-2xl p-4 mb-4 text-center ${
                shade ? "border border-gray-300 shadow-lg" : ""
              }`}
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-32 object-cover mb-0 rounded-xl"
              />
              <h3 className="text-lg mt-2">{item.name}</h3>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default ItemSlider;
