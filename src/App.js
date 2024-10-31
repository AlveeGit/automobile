// App.js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./pages/home/Home";
import Product from "./pages/product/Product";
import Cart from "./pages/cart/Cart";
import Auth from "./pages/auth/Auth";
import AdminDashboard from "./features/admin/Dashboard";
import Profile from "./pages/profile/Profile";
import CourseList from "./pages/courses/CourseList";
import VendorDashboard from "./features/vendor/VendorDashboard";
import "./styles/CustomStyles.css";
import "./i18n";
import { useSelector } from "react-redux";
import Footer from "./components/footer/Footer";
import { WebContent } from "./cms/WebContent";

function App() {
  const isSidebarOpen = useSelector((state) => state.ui.isSidebarOpen);

  const onSendLink = (phoneNumber) => {
    console.log(`Sending app link to ${phoneNumber}`);
    // Integrate with your backend for SMS link sending
  };

  return (
    <Router>
      <Navbar />
      <div className="flex">
        {/* Sidebar with smooth transition */}
        <div
          className={`${
            isSidebarOpen ? "w-64" : "w-0"
          } transition-all duration-300 ease-in-out `}
        >
          <Sidebar />
        </div>
        {/* Main content with smooth transition */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto h-[calc(100vh-74px)] bg-background">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/auth" element={<Auth />} />
            {/* Add more routes as needed */}
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/vendor" element={<VendorDashboard />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/courses" element={<CourseList />} />
          </Routes>
          <Footer columns={WebContent.footer.columns} onSendLink={onSendLink} />
        </main>
      </div>
    </Router>
  );
}

export default App;
