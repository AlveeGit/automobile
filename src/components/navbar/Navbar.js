// Navbar.js
import { FaBars, FaTimes, FaSearch } from "react-icons/fa";
import { logo } from "../../assets/images";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar } from "../../store/slices/uiSlice";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isSidebarOpen = useSelector((state) => state.ui.isSidebarOpen);

  const { t, i18n } = useTranslation();

  // State for language selection
  const [language, setLanguage] = useState("EN");

  // Language selection handler
  const handleLanguageChange = (lang) => {
    setLanguage(lang);
    i18n.changeLanguage(lang.toLowerCase());
  };

  return (
    <header className="sticky top-0 z-50 bg-primary shadow-md">
      <div className=" mx-auto flex  items-center px-8 py-4">
        {/* Sidebar Toggle Button */}
        <button
          className="text-gray-800 text-xl mr-4"
          onClick={() => dispatch(toggleSidebar())}
        >
          {isSidebarOpen ? <FaTimes /> : <FaBars />}
        </button>

        <div className="w-40" onClick={() => navigate("/")}>
          <img src={logo} alt="Octopus EPL Logo" />
        </div>
        <div className="flex-1 flex items-center ml-7">
          <input
            type="text"
            placeholder={t("navbar.searchPlaceholder")}
            className="border p-2 rounded w-full focus:outline-none"
          />
          <FaSearch className="text-gray-500 relative right-8 " />
        </div>

        <div className="flex items-center space-x-4">
          {/* Language Selector */}
          <div className="flex items-center">
            <button
              onClick={() => handleLanguageChange("EN")}
              className={`px-4 py-1 rounded-s-xl  ${
                language === "EN"
                  ? "bg-secondary  text-white"
                  : "bg-white text-gray-700"
              } `}
            >
              En
            </button>
            <button
              onClick={() => handleLanguageChange("BN")}
              className={`px-4 py-1 rounded-e-xl  ${
                language === "BN"
                  ? "bg-secondary  text-white"
                  : "bg-white text-gray-700"
              } `}
            >
              বাং
            </button>
          </div>

          {/* Login Button */}
          <button className="btn-primary">{t("navbar.login")}</button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
