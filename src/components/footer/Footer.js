// Footer.js
import React from "react";
import {
  FaApple,
  FaGooglePlay,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import {
  bkash,
  americanexpress,
  mastercard,
  visa,
  logo,
} from "../../assets/images";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

const Footer = ({ columns, onSendLink }) => {
  const { t } = useTranslation();
  const language = useSelector((state) => state.ui.language);

  return (
    <footer className="">
      <div className="bg-accent">
        <div className="container mx-auto  text-white py-10 px-4 flex flex-col lg:flex-row justify-between">
          <div className=" ">
            <div className=" mx-auto grid grid-cols-3 lg:gap-40 ">
              {/* Columns with Links */}
              {columns.map((column, index) => (
                <div key={index} className="space-y-4">
                  <h3 className="text-lg font-semibold">{language === "bn" ? column.bnTitle : column.title}</h3>
                  <ul className="space-y-2">
                    {column.links.map((link, idx) => (
                      <li key={idx}>
                        <a href={link.href} className="hover:underline text-sm">
                          {language === "bn" ? link.bnLabel : link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            {/*  Payment Methods */}
            <div className="flex items-center mt-10 gap-4 justify-center lg:justify-start ">
              <h2 className="text-xl font-semibold">{t("footer.payment")}</h2>
              <img src={bkash} alt="Bkash" className=" h-6" />
              <img
                src={americanexpress}
                alt="American Express"
                className=" h-6"
              />
              <img src={mastercard} alt="Mastercard" className=" h-6" />
              <img src={visa} alt="Visa" className=" h-6" />
            </div>
          </div>

          {/*  App Download Options */}
          <div className="space-y-4 mt-6 lg:mt-0 self-center ">
            <div className="flex items-center ">
              <FaPhoneAlt className="mr-2" />
              <a href="tel:+8801234567890" className="text-md">
                {t("footer.phone")}
              </a>
            </div>

            <div className="flex items-center">
              <FaEnvelope className="mr-2" />
              <a href="mailto:octopus@epl.com" className="text-md">
                {t("footer.email")}
              </a>
            </div>

            {/* Phone Number Input */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const phoneNumber = e.target.phoneNumber.value;
                onSendLink(phoneNumber);
              }}
              className="flex items-center"
            >
              <input
                type="tel"
                name="phoneNumber"
                placeholder={t("footer.numberPlaceholder")}
                className="p-2 rounded-l-md bg-gray-800 border border-gray-600 placeholder-gray-400 text-sm outline-none"
              />
              <button
                type="submit"
                className="p-2 rounded-r-md  text-sm bg-secondary hover:bg-accent focus:outline-none text-nowrap "
              >
                {t("footer.getButton")}
              </button>
            </form>

            {/* App Download Buttons */}
            <div className="flex space-x-4 mt-4">
              <a
                href="/"
                className="flex items-center bg-gray-800 p-2 rounded-md hover:bg-gray-700"
                aria-label="Download on the App Store"
              >
                <FaApple size={20} />
                <span className="ml-2 text-sm text-nowrap">
                  {t("footer.appStore")}
                </span>
              </a>
              <a
                href="/"
                className="flex items-center bg-gray-800 p-2 rounded-md hover:bg-gray-700"
                aria-label="Download on Google Play"
              >
                <FaGooglePlay size={20} />
                <span className="ml-2 text-sm text-nowrap">
                  {t("footer.playStore")}
                </span>
              </a>
            </div>
            {/* social media links */}
            <div className="flex space-x-4 mt-4">
              <a
                href="/"
                className="flex items-center bg-gray-800 p-2 rounded-md hover:bg-gray-700"
                aria-label=" facebook link "
              >
                <FaFacebookF size={12} />
              </a>
              <a
                href="/"
                className="flex items-center bg-gray-800 p-2 rounded-md hover:bg-gray-700"
                aria-label=" twitter link "
              >
                <FaTwitter size={12} />
              </a>
              <a
                href="/"
                className="flex items-center bg-gray-800 p-2 rounded-md hover:bg-gray-700"
                aria-label=" instagram link "
              >
                <FaInstagram size={12} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* bottom Footer */}
      <div className="container px-4 mx-auto flex justify-between items-center py-4">
        <a href="/">
          <img src={logo} alt="" className="h-10" />
        </a>
        <p>{t("footer.copyright")}</p>
      </div>
    </footer>
  );
};

export default Footer;
