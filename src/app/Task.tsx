import { TaskType } from "@/app/page";
import React, { useState } from "react";

type Props = {
  task: TaskType;
  onChange: (task: TaskType) => void;
  onDelete: (task: TaskType) => void;
};

export default function Task({ task, onChange, onDelete }: Props) {
  const [isEditing, setIsEditing] = useState(false);
  let textContent;
  if (isEditing) {
    textContent = (
      <div style={{ display: "flex" }}>
        <input
          type="text"
          value={task.text}
          onChange={(e) =>
            onChange({
              ...task,
              text: e.target.value,
            })
          }
        />
        <button onClick={() => setIsEditing(false)}>決定</button>
      </div>
    );
  } else {
    textContent = (
      <div style={{ display: "flex" }}>
        <p>{task.text}</p>
        <button onClick={() => setIsEditing(true)}>編集</button>
      </div>
    );
  }
  return (
    <div style={{ display: "flex" }}>
      <input
        type="checkbox"
        checked={task.done}
        onChange={(e) =>
          onChange({
            ...task,
            done: e.target.checked,
          })
        }
      />
      {textContent}
      <button onClick={(e) => onDelete(task)}>削除</button>
    </div>
  );
}
