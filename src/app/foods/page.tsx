import React, { useEffect, useState } from "react";
import { getFoods } from "../../../services/firestore";

// Foodの型を定義
interface Food {
  id: string;
  name: string;
  calories: number;
}

const FoodPage: React.FC = () => {
  const [foods, setFoods] = useState<Food[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const foodsData = await getFoods();
      setFoods(foodsData);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>食品一覧</h1>
      <ul>
        {foods.map((food) => (
          <li key={food.id}>
            {food.name} - カロリー: {food.calories}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FoodPage;
