import { FaGooglePlay, FaApple } from "react-icons/fa";

const AppDownloadSection = ({ title, subtitle, image, backgroundColor }) => {
  return (
    <section
      className={`flex flex-col lg:flex-row items-center justify-between px-8 py-8 lg:px-24`}
      style={{ backgroundColor }}
    >
      {/* Left Part: Text and Download Buttons */}
      <div className="lg:w-2/3 w-full max-w-2xl mx-auto flex flex-col items-center text-center ">
        <h2 className="text-3xl font-bold mb-4">{title}</h2>
        <p className="text-lg text-gray-700 mb-6">{subtitle}</p>

        <div className="flex gap-4">
          <a
            href="/"
            className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-700 transition"
          >
            <FaGooglePlay />
            <span>Play Store</span>
          </a>
          <a
            href="/"
            className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-700 transition"
          >
            <FaApple />
            <span>App Store</span>
          </a>
        </div>
      </div>

      {/* Right Part: Image */}
      <div className="lg:w-1/3 w-full flex justify-center mt-8 lg:mt-0">
        <img
          src={image}
          alt="App Screenshot"
          className="w-2/3 lg:w-full object-cover"
        />
      </div>
    </section>
  );
};

export default AppDownloadSection;
