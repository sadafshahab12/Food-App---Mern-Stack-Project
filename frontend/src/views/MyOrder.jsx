import { useEffect, useState } from "react";
import Skeleton from "../components/Skeleton"; // your skeleton component

const MyOrder = () => {
  useEffect(() => {
    document.title = "My Order| Food App";
  }, []);
  const [myOrder, setMyOrder] = useState({});
  const [isLoading, setIsLoading] = useState(true); // loading state added

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetch(
          `${import.meta.env.VITE_REACT_BACKEND_BASE_URL}/api/my-order-data`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email: localStorage.getItem("userEmail"),
            }),
          }
        );
        const response = await data.json();
        setMyOrder(response);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setTimeout(() => {
          setIsLoading(false); // done loading
        },400);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="mt-40 max-w-6xl mx-auto px-6 min-h-screen mb-20">
      {isLoading ? (
        // Show skeletons while loading
        <>
          <div className="mb-8">
            <div className="h-6 w-40 bg-gray-200 animate-pulse mb-4 rounded"></div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
              {[1, 2, 3, 4, 5, 6].map((n) => (
                <Skeleton key={n} />
              ))}
            </div>
          </div>
        </>
      ) : myOrder.orderData?.orders.length > 0 ? (
        myOrder.orderData.orders.map((orderGroup, index) => (
          <div key={index} className="mb-8">
            <h2 className="text-xl font-bold text-slate-800 border-b border-slate-300 py-4">
              Order Date: {orderGroup.orderDate}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 py-4 gap-4">
              {orderGroup.items.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white hover:bg-amber-100 p-4 m-2 shadow shadow-amber-300 rounded-lg"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="max-w-[500px] w-full h-50 sm:h-60 object-cover rounded-lg mb-2"
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
        <>
          <div>No order place yet.</div>
        </>
      )}
    </div>
  );
};

export default MyOrder;
