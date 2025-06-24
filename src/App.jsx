import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./views/Home";
import MyOrder from "./views/MyOrder";
import Login from "./views/Login";
import SignUp from "./views/SignUp";
import Footer from "./views/Footer";
import { CartProvider } from "./components/ContextReducer";
import { Toaster } from "react-hot-toast";
import ScrollToTop from "./components/ScrollToTop";

function App() {
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
        <BrowserRouter>
          <ScrollToTop />
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/my-order" element={<MyOrder />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </CartProvider>
    </>
  );
}

export default App;
