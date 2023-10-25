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
      <form
        action=""
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input
          type="text"
          placeholder="ex:Beef"
          onChange={(e) => setFilter(e.target.value)}
        />
      </form>

      <ul>
        {data === null ? (
          <h3>Oups ! No results...</h3>
        ) : (
          data.map((meal) => {
            return <Card key={meal.idMeal} meal={meal} />;
          })
        )}

        {/* ou {data && data.map((meal- =>...)} */}
      </ul>
    </div>
  );
};

export default Recipes;
