import { recipes } from "@/app/data/data";
import Recipe from "@/app/Recipe";
import React from "react";

export default function SecondList() {
  return (
    <div>
      <h1>Recipes</h1>
      {recipes.map((recipe) => (
        <Recipe
          key={recipe.id}
          id={recipe.id}
          name={recipe.name}
          ingredients={recipe.ingredients}
        />
      ))}
    </div>
  );
}
