import { useEffect, useState } from "react";
import Card from "../components/Card";

const FoodData = ({ searchTerm }) => {
  const [foodItems, setFoodItems] = useState([]);
  const [foodCategory, setFoodCategory] = useState([]);
  const fetchData = async () => {
    const response = await fetch("http://localhost:5000/api/food-data", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const foodData = await response.json();
    setFoodItems(foodData[0]);
    setFoodCategory(foodData[1]);
  };
  //no dependency mean on first rendering load data
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <div>
        {foodCategory.length > 0 ? (
          foodCategory.map((category) => {
            return (
              <>
                <div
                  key={category._id}
                  className="text-xl font-bold cursor-pointer border-b border-slate-300 py-4 px-10 mx-10"
                >
                  {category.CategoryName}
                </div>
                <div className="my-10  grid grid-cols-3 gap-5 justify-self-center">
                  {foodItems.length > 0 ? (
                    foodItems
                      .filter(
                        (items) =>
                          items.CategoryName === category.CategoryName &&
                          items.name
                            .toLowerCase()
                            .includes(searchTerm.toLowerCase())
                      )
                      .map((filterItems) => {
                        return (
                          <Card key={filterItems._id} item={filterItems} />
                        );
                      })
                  ) : (
                    <div>No data</div>
                  )}
                </div>
              </>
            );
          })
        ) : (
          <div>There is no category</div>
        )}
      </div>
    </>
  );
};

export default FoodData;
