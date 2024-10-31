// Home.js

import Hero from "../../components/hero/Hero";
import { WebContent, getProductData } from "../../cms/WebContent";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import ItemSlider from "../../components/itemSlider/ItemSlider";
import AppDownloadSection from "../../components/appDownloadSection/AppDownloadSection";

const Home = () => {
  const { t } = useTranslation();
  const language = useSelector((state) => state.ui.language);

  return (
    <div>
      <Hero
        title={t("home.hero.title")}
        subtitle={t("home.hero.subtitle")}
        images={WebContent.home.hero.images}
      />
      {/* Dynamic Sections */}
      <div className="pt-8">
        <ItemSlider
          title={t("home.recommended")}
          items={getProductData(language, "recommended")}
          viewAllLink="/recommended"
          shade
        />
        <ItemSlider
          title={t("home.popularCategories")}
          items={getProductData(language, "popular")}
          viewAllLink="/popular"
          shade
        />
      </div>
      {/* Dynamic Sections : aplication */}
      <AppDownloadSection
        title={
          language === "bn"
            ? WebContent.home.appDownloadSection.bnTitle
            : WebContent.home.appDownloadSection.title
        }
        subtitle={
          language === "bn"
            ? WebContent.home.appDownloadSection.bnSubtitle
            : WebContent.home.appDownloadSection.subtitle
        }
        image={WebContent.home.appDownloadSection.image}
        backgroundColor="var(--primary)"
      />
    </div>
  );
};

export default Home;
