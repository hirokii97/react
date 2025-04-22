"use client";

import { useReducer } from "react";

export default function Home() {
  const reducer = (state: number, action: { type: string }) => {
    switch (action.type) {
      case "increment":
        return state + 1;
      case "decrement":
        return state - 1;
      default:
        return state;
    }
  };
  const [count, dispatch] = useReducer(reducer, 0);
  return (
    <div>
      <button onClick={() => dispatch({ type: "increment" })}>増やす</button>
      <button onClick={() => dispatch({ type: "decrement" })}>減らす</button>
      <p>{count}</p>
    </div>
  );
}
