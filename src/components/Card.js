import React from "react";

const Card = ({ meal }) => {
  return (
    <div className="card-container">
      <h3>{meal.strMeal}</h3>
      <p>Origin : {meal.strArea}</p>
      <img src={meal.strMealThumb} alt={"photo de " + meal.strMeal} />
      <p>{meal.strInstructions}</p>
    </div>
  );
};

export default Card;
