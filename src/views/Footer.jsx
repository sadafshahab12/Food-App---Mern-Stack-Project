
import { BsInstagram, BsTwitter } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white ">
      <div className="flex justify-between items-center max-w-6xl mx-auto py-8">
        <div className="logo">Food</div>
        <div>2021.Food Inc.</div>
        <div className="icons flex items-center gap-4">
          <BsTwitter />
          <BsInstagram />
          <FaFacebook />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
