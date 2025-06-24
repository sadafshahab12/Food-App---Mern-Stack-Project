import { IoCloseOutline } from "react-icons/io5";
import ReactDom from "react-dom";
const MODAL_STYLES = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "#f6e6c9",
  padding: "20px",
  border: "1px solid #ddd",
  zIndex: "9999",
  height: "90%",
  width: "90%",
  borderRadius: "10px",
};

const OVERLAY_STYLES = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  zIndex: "1000",
  backgroundColor: "rgba(0,0,0,.7)",
};
const Modal = ({ children, onClose }) => {
  return ReactDom.createPortal(
    <>
      <div style={OVERLAY_STYLES}>
        <div style={MODAL_STYLES}>
          <button
            onClick={onClose}
            className="cursor-pointer h-8 w-8 rounded-full bg-slate-800 text-amber-400 flex justify-center items-center absolute top-5 right-5"
          >
            <IoCloseOutline size={24} />
          </button>
          {children}
        </div>
      </div>
    </>,
    document.getElementById("cart-root")
  );
};

export default Modal;
