// src/cms/WebContent.js
import {
  parts1,
  parts2,
  parts3,
  parts4,
  parts5,
  parts6,
  parts7,
  parts8,
  parts9,
  parts10,
  parts11,
  parts12,
} from "../assets/images";

export const WebContent = {
  home: {
    hero: {
      images: [
        { src: parts1, alt: "Engine Part" },
        { src: parts2, alt: "Suspension Kit" },
        { src: parts3, alt: "Brake Discs" },
        { src: parts4, alt: "Alloy Wheels" },
        { src: parts5, alt: "Oil Filter" },
        { src: parts6, alt: "Tire" },
      ],
    },
    popularProducts: [
      { image: parts1, name: "Engine Part", price: "$250" },
      { image: parts2, name: "Suspension Kit", price: "$400" },
      { image: parts3, name: "Brake Discs", price: "$100" },
    ],
    accessories: [
      { image: parts4, name: "Alloy Wheels", price: "$399" },
      { image: parts5, name: "Oil Filter", price: "$15" },
    ],
    sales: [{ image: parts6, name: "Tire", price: "$120" }],
    recommended: [
      { image: parts1, name: "Engine Oil", price: "$30" },
      { image: parts2, name: "Spark Plug", price: "$10" },
    ],
  },
};

// Language-specific product data
const productData = {
  en: {
    popular: [
      {
        id: 1,
        name: "Engine Oil",
        description: "High-quality synthetic engine oil.",
        price: "$30",
        image: parts1,
      },
      {
        id: 2,
        name: "Brake Pads",
        description: "Durable and reliable brake pads.",
        price: "$50",
        image: parts2,
      },
      {
        id: 3,
        name: "Car Battery",
        description: "Long-lasting car battery with high performance.",
        price: "$120",
        image: parts3,
      },
      {
        id: 4,
        name: "Air Filter",
        description: "Advanced air filter for better fuel efficiency.",
        price: "$25",
        image: parts4,
      },
      {
        id: 5,
        name: "Spark Plugs",
        description: "Premium spark plugs for smoother ignition.",
        price: "$15",
        image: parts5,
      },
    ],
    accessories: [
      {
        id: 6,
        name: "Seat Covers",
        description: "Comfortable and stylish seat covers.",
        price: "$40",
        image: parts6,
      },
      {
        id: 7,
        name: "Steering Wheel Cover",
        description: "Grip-enhanced steering cover.",
        price: "$12",
        image: parts7,
      },
      {
        id: 8,
        name: "Car Floor Mats",
        description: "Durable floor mats for all seasons.",
        price: "$30",
        image: parts8,
      },
      {
        id: 9,
        name: "Phone Mount",
        description: "Adjustable phone mount for safe driving.",
        price: "$20",
        image: parts9,
      },
    ],
    sales: [
      {
        id: 10,
        name: "Wiper Blades",
        description: "Efficient, all-weather wiper blades.",
        price: "$10",
        salePrice: "$8",
        image: parts10,
      },
      {
        id: 11,
        name: "LED Headlights",
        description: "Bright, long-lasting LED headlights.",
        price: "$70",
        salePrice: "$50",
        image: parts11,
      },
      {
        id: 12,
        name: "Tire Pressure Monitor",
        description: "Real-time tire pressure monitoring system.",
        price: "$35",
        salePrice: "$25",
        image: parts12,
      },
    ],
    recommended: [
      {
        id: 13,
        name: "Engine Cleaner",
        description: "Advanced cleaner for all engine types.",
        price: "$15",
        image: parts1,
      },
      {
        id: 14,
        name: "Car Wax",
        description: "Protective wax for a brilliant shine.",
        price: "$25",
        image: parts2,
      },
      {
        id: 15,
        name: "Jump Starter",
        description: "Portable jump starter for emergencies.",
        price: "$85",
        image: parts3,
      },
      {
        id: 16,
        name: "Dashboard Camera",
        description: "HD dashcam with night vision.",
        price: "$100",
        image: parts4,
      },
    ],
  },
  bn: {
    popular: [
      {
        id: 1,
        name: "ইঞ্জিন তেল",
        description: "উচ্চমানের সিনথেটিক ইঞ্জিন তেল।",
        price: "৳৩০",
        image: parts1,
      },
      {
        id: 2,
        name: "ব্রেক প্যাড",
        description: "টেকসই এবং নির্ভরযোগ্য ব্রেক প্যাড।",
        price: "৳৫০",
        image: parts2,
      },
      {
        id: 3,
        name: "কার ব্যাটারি",
        description: "দীর্ঘস্থায়ী এবং উচ্চ ক্ষমতার গাড়ির ব্যাটারি।",
        price: "৳১২০",
        image: parts3,
      },
      {
        id: 4,
        name: "এয়ার ফিল্টার",
        description: "উন্নত এয়ার ফিল্টার যা জ্বালানি দক্ষতা বৃদ্ধি করে।",
        price: "৳২৫",
        image: parts4,
      },
      {
        id: 5,
        name: "স্পার্ক প্লাগ",
        description: "মসৃণ ইগনিশনের জন্য প্রিমিয়াম স্পার্ক প্লাগ।",
        price: "৳১৫",
        image: parts5,
      },
    ],
    accessories: [
      {
        id: 6,
        name: "সিট কভার",
        description: "আরামদায়ক এবং স্টাইলিশ সিট কভার।",
        price: "৳৪০",
        image: parts6,
      },
      {
        id: 7,
        name: "স্টিয়ারিং হুইল কভার",
        description: "উন্নত গ্রিপের জন্য স্টিয়ারিং কভার।",
        price: "৳১২",
        image: parts7,
      },
      {
        id: 8,
        name: "কার ফ্লোর ম্যাট",
        description: "সব ঋতুর জন্য টেকসই ফ্লোর ম্যাট।",
        price: "৳৩০",
        image: parts8,
      },
      {
        id: 9,
        name: "ফোন মাউন্ট",
        description: "নিরাপদ ড্রাইভিংয়ের জন্য অ্যাডজাস্টেবল ফোন মাউন্ট।",
        price: "৳২০",
        image: parts9,
      },
    ],
    sales: [
      {
        id: 10,
        name: "ওয়াইপার ব্লেড",
        description: "সব ঋতুর জন্য কার্যকর ওয়াইপার ব্লেড।",
        price: "৳১০",
        salePrice: "৳৮",
        image: parts10,
      },
      {
        id: 11,
        name: "এলইডি হেডলাইট",
        description: "উজ্জ্বল এবং দীর্ঘস্থায়ী এলইডি হেডলাইট।",
        price: "৳৭০",
        salePrice: "৳৫০",
        image: parts11,
      },
      {
        id: 12,
        name: "টাইর প্রেসার মনিটর",
        description: "রিয়েল-টাইম টায়ার প্রেসার মনিটরিং সিস্টেম।",
        price: "৳৩৫",
        salePrice: "৳২৫",
        image: parts12,
      },
    ],
    recommended: [
      {
        id: 13,
        name: "ইঞ্জিন ক্লিনার",
        description: "সব ইঞ্জিনের জন্য উন্নত ক্লিনার।",
        price: "৳১৫",
        image: parts1,
      },
      {
        id: 14,
        name: "কার ওয়াক্স",
        description: "উজ্জ্বলতার জন্য প্রতিরক্ষামূলক ওয়াক্স।",
        price: "৳২৫",
        image: parts2,
      },
      {
        id: 15,
        name: "জাম্প স্টার্টার",
        description: "জরুরি প্রয়োজনে পোর্টেবল জাম্প স্টার্টার।",
        price: "৳৮৫",
        image: parts3,
      },
      {
        id: 16,
        name: "ড্যাশবোর্ড ক্যামেরা",
        description: "নাইট ভিশনসহ এইচডি ড্যাশক্যাম।",
        price: "৳১০০",
        image: parts4,
      },
    ],
  },
};

// Function to retrieve product data by language and section
export const getProductData = (lang = "en", section = "popular") =>
  productData[lang][section];
