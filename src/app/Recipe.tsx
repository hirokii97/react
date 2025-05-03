import React from "react";

type Props = {
  id: string;
  name: string;
  ingredients: string[];
};

export default function Recipe(props: Props) {
  const { id, name, ingredients } = props;
  return (
    <div key={id}>
      <h2>{name}</h2>
      <ul>
        {ingredients.map((ingredient) => (
          <li key={ingredient}>{ingredient}</li>
        ))}
      </ul>
    </div>
  );
}
