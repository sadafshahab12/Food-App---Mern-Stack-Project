import { useEffect, useRef, useState } from "react";
import { useCart, useDispatchCard } from "./ContextReducer";

const Card = ({ item }) => {
  const dispatch = useDispatchCard();
  const stateData = useCart();
  const priceRef = useRef();
  const sizeOptions =
    item.options && item.options.length > 0 ? item.options[0] : {};
  const [qty, setQty] = useState(1);
  const [size, setSize] = useState("");

  useEffect(() => {
    setSize(priceRef.current.value);
  }, []);

  const handleAddToCart = async () => {
    const existingItem = stateData.find(
      (cartItem) => cartItem.id === item._id && cartItem.size === size
    );

    const price = qty * parseInt(sizeOptions[size]);

    if (existingItem) {
      await dispatch({
        type: "UPDATE",
        id: item._id,
        price: price,
        quantity: qty,
        size: size,
      });
    } else {
      await dispatch({
        type: "ADD",
        id: item._id,
        name: item.name,
        image: item.img,
        price: price,
        quantity: qty,
        size: size,
      });
    }
  };

  const totalPrice = qty * parseInt(sizeOptions[size] || 0);

  return (
    <div className="bg-white shadow-lg max-w-[500px] w-[350px] rounded-lg">
      <img
        src={item.img}
        alt="food"
        className="w-full h-60 object-cover rounded-lg"
      />
      <div className="space-y-4 p-6">
        <h1 className="text-xl font-bold">{item.name}</h1>
        <p className="text-slate-500">{item.description}</p>
        <div className="flex items-center gap-3 bg-orange-300 p-1 rounded-lg">
          <select
            className="flex-1 bg-slate-700 text-white outline-none text-sm text-center py-2 px-2 rounded-lg cursor-pointer"
            onChange={(e) => setQty(parseInt(e.target.value))}
            value={qty}
          >
            {Array.from(Array(6), (_, i) => (
              <option key={i + 1} value={i + 1}>
                {i + 1}
              </option>
            ))}
          </select>

          <select
            className="flex-2 bg-slate-700 text-white outline-none text-sm text-center py-2 px-2 rounded-lg cursor-pointer capitalize"
            onChange={(e) => setSize(e.target.value)}
            ref={priceRef}
            value={size}
          >
            {Object.keys(sizeOptions).map((sizeKey) => (
              <option key={sizeKey} value={sizeKey}>
                {sizeKey}
              </option>
            ))}
          </select>
        </div>
        <div className="flex items-center justify-center gap-3">
          <div className="bg-slate-800 text-white py-2 px-4 text-center rounded-lg flex-1">
            <p>{totalPrice}</p>
          </div>
          <button
            className="py-2 px-4 text-center font-bold rounded-lg w-full cursor-pointer flex-1 border-2 border-orange-500 bg-transparent text-orange-500"
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
