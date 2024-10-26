// Home.js

import Hero from "../../components/hero/Hero";
import { WebContent } from "../../cms/WebContent";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Hero
        title={t("home.hero.title")}
        subtitle={t("home.hero.subtitle")}
        images={WebContent.home.hero.images}
      />
      {/* Other sections go here */}
    </div>
  );
};

export default Home;
