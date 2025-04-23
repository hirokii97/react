"use client";

import TaskList from "@/app/TaskList";
import { useState } from "react";

export type TaskType = { id: number; text: string; done: boolean };

export default function Home() {
  const initialTasks: TaskType[] = [
    { id: 0, text: "Visit Kafka Museum", done: true },
    { id: 1, text: "Watch a puppet show", done: false },
    { id: 2, text: "Lennon Wall pic", done: false },
  ];
  const [tasks, setTasks] = useState(initialTasks);
  function handleChangeTask(task: TaskType) {
    setTasks(
      tasks.map((t) => {
        if (t.id === task.id) {
          return task;
        } else {
          return t;
        }
      })
    );
  }
  function handleDeleteTask(task: TaskType) {
    setTasks(tasks.filter((t) => t.id !== task.id));
  }
  return (
    <div>
      <p>Prague itinerary</p>
      
      <TaskList
        tasks={tasks}
        onChangeTask={handleChangeTask}
        onDeleteTask={handleDeleteTask}
      />
    </div>
  );
}
