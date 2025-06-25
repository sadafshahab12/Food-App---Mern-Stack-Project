import {  Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./views/Home";
import MyOrder from "./views/MyOrder";
import Login from "./views/Login";
import SignUp from "./views/SignUp";
import Footer from "./views/Footer";
import { CartProvider } from "./components/ContextReducer";
import { Toaster } from "react-hot-toast";
import ScrollToTop from "./components/ScrollToTop";
import About from "./views/About";
import Contact from "./views/Contact";
import usePageTracking from "./components/usePageTracking";

function App() {
  usePageTracking();
  return (
    <>
      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{
          style: {
            marginTop: "60px",
          },
        }}
      />
      <CartProvider>

          <ScrollToTop />
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/my-order" element={<MyOrder />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />

      </CartProvider>
    </>
  );
}

export default App;
