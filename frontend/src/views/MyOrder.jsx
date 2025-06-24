import React, { useEffect, useState } from "react";

const MyOrder = () => {
  const [myOrder, setMyOrder] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetch(`${import.meta.env.VITE_REACT_BACKEND_BASE_URL}api/my-order-data`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: localStorage.getItem("userEmail"),
          }),
        });
        const response = await data.json();
        setMyOrder(response);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="mt-40 max-w-6xl mx-auto px-6  min-h-screen ">
      {myOrder.orderData?.orders.length > 0 ? (
        myOrder.orderData?.orders.map((orderGroup, index) => (
          <div key={index} className="mb-8">
            <h2 className="text-xl font-bold text-slate-800 border-b border-slate-300 py-4">
              Order Date: {orderGroup.orderDate}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 py-4">
              {orderGroup.items.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white hover:bg-amber-100 p-4 m-2 shadow shadow-amber-300 rounded-lg"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="max-w-[500px] w-full h-50  sm:h-60 object-cover rounded-lg mb-2"
                  />
                  <p>
                    <strong>Name:</strong> {item.name}
                  </p>
                  <p>
                    <strong>Price:</strong> ${item.price}
                  </p>
                  <p>
                    <strong>Quantity:</strong> {item.quantity}
                  </p>
                  <p>
                    <strong>Size:</strong> {item.size}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))
      ) : (
        <p className="text-center text-lg text-slate-600 mt-10">
          No orders placed yet.
        </p>
      )}
    </div>
  );
};

export default MyOrder;
