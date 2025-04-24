import React, { useState } from "react";

type Props = {
  onAddTask: (text: string) => void;
};

export default function AddTask({ onAddTask }: Props) {
  const [text, setText] = useState("");
  return (
    <div style={{ display: "block" }}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={() => onAddTask(text)}>追加</button>
    </div>
  );
}
