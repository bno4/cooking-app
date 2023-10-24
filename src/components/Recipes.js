import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";

const Recipes = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${filter}`)
      .then((res) => setData(res.data.meals));
  }, [filter]);

  return (
    <div className="recipes">
      <form action="">
        <input
          type="text"
          placeholder="ex:Beef"
          onChange={(e) => setFilter(e.target.value.toLowerCase())}
        />
      </form>
      <ul>
        {data
          .filter((meal) => meal.strMeal.toLowerCase().includes(filter))
          .map((meal) => (
            <Card key={meal.idMeal} meal={meal} />
          ))}
      </ul>
    </div>
  );
};

export default Recipes;
