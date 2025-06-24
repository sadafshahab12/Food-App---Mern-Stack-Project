import { useEffect, useState } from "react";
import Card from "../components/Card";
import Skeleton from "../components/Skeleton"; // You can create a simple Skeleton component

const FoodData = ({ searchTerm }) => {
  const [foodItems, setFoodItems] = useState([]);
  const [foodCategory, setFoodCategory] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // 👈 New loading state

  const fetchData = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_REACT_BACKEND_BASE_URL}/api/food-data`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const foodData = await response.json();

      if (Array.isArray(foodData) && foodData.length >= 2) {
        setFoodItems(foodData[0] || []);
        setFoodCategory(foodData[1] || []);
      } else {
        console.error("Unexpected data structure:", foodData);
        setFoodItems([]);
        setFoodCategory([]);
      }
    } catch (error) {
      console.error("Error fetching food data:", error);
      setFoodItems([]);
      setFoodCategory([]);
    } finally {
      setTimeout(() => {
        setIsLoading(false); // 👈 loading finished here
      }, 2000);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {isLoading ? (
        // Show Skeletons while loading
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 p-6">
          {[1, 2, 3, 4, 5, 6].map((n) => (
            <Skeleton key={n} />
          ))}
        </div>
      ) : foodCategory && foodCategory.length > 0 ? (
        foodCategory.map((category, index) => (
          <div key={index}>
            <div className="text-xl font-bold cursor-pointer border-b border-slate-300 py-4 px-10 mx-10">
              {category.CategoryName}
            </div>
            <div className="my-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 justify-self-center px-6">
              {foodItems && foodItems.length > 0 ? (
                foodItems
                  .filter(
                    (items) =>
                      items.CategoryName === category.CategoryName &&
                      items.name
                        .toLowerCase()
                        .includes(searchTerm.toLowerCase())
                  )
                  .map((filterItems) => (
                    <Card key={filterItems._id} item={filterItems} />
                  ))
              ) : (
                <div>No data found for this category.</div>
              )}
            </div>
          </div>
        ))
      ) : (
        <div className="text-center text-gray-500 py-10">
          No categories found.
        </div>
      )}
    </div>
  );
};

export default FoodData;
