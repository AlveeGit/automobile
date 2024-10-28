// Home.js

import Hero from "../../components/hero/Hero";
import ProductSlider from "../../components/productSlider/ProductSlider";
import { WebContent, productData, getProductData } from "../../cms/WebContent";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

const Home = () => {
  const { t } = useTranslation();
  const language = useSelector((state) => state.ui.language);
  console.log(language);

  return (
    <div>
      <Hero
        title={t("home.hero.title")}
        subtitle={t("home.hero.subtitle")}
        images={WebContent.home.hero.images}
      />
      {/* Dynamic Sections */}
      <div className="pt-8">
        <ProductSlider
          title={t("home.popular")}
          products={getProductData(language, "popular")}
        />
        <ProductSlider
          title={t("home.accessories")}
          products={getProductData(language, "accessories")}
        />
        <ProductSlider
          title={t("home.sales")}
          products={getProductData(language, "sales")}
        />
        <ProductSlider
          title={t("home.recommended")}
          products={getProductData(language, "recommended")}
        />
      </div>
    </div>
  );
};

export default Home;
