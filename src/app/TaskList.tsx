import { TaskType } from "@/app/page";
import Task from "@/app/Task";
import React from "react";

type Props = {
  tasks: TaskType[];
  onChangeTask: (task: TaskType) => void;
  onDeleteTask: (task: TaskType) => void;
};

export default function TaskList({ tasks, onChangeTask, onDeleteTask }: Props) {
  return (
    <ul>
      {tasks.map((task) => (
        <Task task={task} onChange={onChangeTask} onDelete={onDeleteTask} />
      ))}
    </ul>
  );
}
