"use client";

import { v4 as uuid } from "uuid";
import AddTask from "@/app/AddTask";
import TaskList from "@/app/TaskList";
import { useState } from "react";

export type TaskType = { id: string; text: string; done: boolean };

export default function Home() {
  const initialTasks: TaskType[] = [
    { id: "0", text: "Visit Kafka Museum", done: true },
    { id: "1", text: "Watch a puppet show", done: false },
    { id: "2", text: "Lennon Wall pic", done: false },
  ];
  const [tasks, setTasks] = useState(initialTasks);
  function handleAddTask(newText: string) {
    setTasks([...tasks, { id: uuid(), text: newText, done: false }]);
  }
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
      <AddTask onAddTask={handleAddTask} />
      <TaskList
        tasks={tasks}
        onChangeTask={handleChangeTask}
        onDeleteTask={handleDeleteTask}
      />
    </div>
  );
}
