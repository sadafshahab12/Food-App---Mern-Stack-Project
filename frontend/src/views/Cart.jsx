import toast from "react-hot-toast";
import { useCart, useDispatchCard } from "../components/ContextReducer";
import { FaRegTrashAlt } from "react-icons/fa";


const Cart = ({ closeCart }) => {
  const data = useCart();
  let dispatch = useDispatchCard();

  if (data.length === 0) {
    return (
      <div className="text-center py-10 text-gray-500 text-lg">
        <p>🛒 Your Cart is Empty</p>
      </div>
    );
  }

  let totalPrice = data.reduce((total, food) => total + food.price, 0);
  const handleCheckOut = async () => {
    let userEmail = localStorage.getItem("userEmail");
    let checkOutData = await fetch(
      `${import.meta.env.VITE_REACT_BACKEND_BASE_URL}/api/order-data`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          order_data: data,
          email: userEmail,
          order_date: new Date().toDateString(),
        }),
      }
    );
    const response = await checkOutData.json();
    if (response.success === true) {
      dispatch({ type: "DROP" });
      setTimeout(() => {
        closeCart();
      }, 500);
    }
    toast.success(
      `Thank you for shopping with us! Your order has been placed. `,
      {
        duration: 2000,
        style: {
          background: "#f9dfc3",
          color: "#333",
          border: "2px solid orange",
        },
      }
    );
  };
  return (
    <div className="overflow-x-auto rounded-xl shadow-md mt-4 p-4 bg-white">
      <table className="min-w-full border border-slate-300 text-sm text-left text-gray-700">
        <thead className="bg-slate-800 text-white">
          <tr>
            <th className="py-3 px-4 border border-slate-300">#</th>
            <th className="py-3 px-4 border border-slate-300">Name</th>
            <th className="py-3 px-4 border border-slate-300">Quantity</th>
            <th className="py-3 px-4 border border-slate-300">Option</th>
            <th className="py-3 px-4 border border-slate-300">Amount</th>
            <th className="py-3 px-4 border border-slate-300">Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((food, index) => (
            <tr
              key={index}
              className={`${
                index % 2 === 0 ? "bg-gray-50" : "bg-white"
              } hover:bg-amber-100 transition duration-300`}
            >
              <td className="py-2 px-4 border border-slate-300">{index + 1}</td>
              <td className="py-2 px-4 border border-slate-300">{food.name}</td>
              <td className="py-2 px-4 border border-slate-300">
                {food.quantity}
              </td>
              <td className="py-2 px-4 border border-slate-300">{food.size}</td>
              <td className="py-2 px-4 border border-slate-300">
                ${food.price}
              </td>
              <td className="py-2 px-4 border border-slate-300 text-center">
                <button
                  onClick={() => {
                    dispatch({ type: "REMOVE", index: index }),
                      toast.success(
                        `${food.name} successfully removed from your cart. `,
                        {
                          duration: 1000,
                          style: {
                            background: "#333",
                            color: "#fff",
                          },
                        }
                      );
                  }}
                  className="text-red-600 hover:text-red-800 transition duration-200 cursor-pointer"
                  title="Remove Item"
                >
                  <FaRegTrashAlt size={18} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Total Price and Checkout Button */}
      <div className="flex flex-col sm:flex-row justify-between items-center mt-6 p-4 bg-slate-50 rounded-lg shadow-inner">
        <h1 className="text-lg font-semibold text-gray-700">
          Total Price:{" "}
          <span className="text-green-600">${totalPrice.toFixed(2)}</span>
        </h1>
        <button
          onClick={() => {
            handleCheckOut();
          }}
          className="cursor-pointer mt-4 sm:mt-0 bg-green-600 text-white py-2 px-6 rounded-lg shadow-md hover:bg-green-700 transition duration-300"
        >
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
