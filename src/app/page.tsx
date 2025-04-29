"use client";

import { v4 as uuid } from "uuid";
import AddTask from "@/app/AddTask";
import TaskList from "@/app/TaskList";
import {
  createContext,
  Dispatch,
  SetStateAction,
  useReducer,
  useState,
} from "react";
import Form from "@/app/Form";

// https://ja.react.dev/learn/extracting-state-logic-into-a-reducer#comparing-usestate-and-usereducer
export type TaskType = { id: string; text: string; done: boolean };
type ActionType = {
  type: "addTask" | "changeTask" | "deleteTask";
  id: string;
  text?: string;
  task?: TaskType;
};

type LoginFlagContextType = {
  loginFlag: string | null;
  setLoginFlag: Dispatch<SetStateAction<string | null>>;
};

export const LoginFlagContext = createContext<LoginFlagContextType | null>(
  null
);

export default function Home() {
  const [loginFlag, setLoginFlag] = useState<string | null>(null);

  const initialTasks: TaskType[] = [
    { id: "0", text: "Visit Kafka Museum", done: true },
    { id: "1", text: "Watch a puppet show", done: false },
    { id: "2", text: "Lennon Wall pic", done: false },
  ];
  const [tasks, dispatch] = useReducer(reducer, initialTasks);
  function handleAddTask(newText: string) {
    dispatch({
      type: "addTask",
      text: newText,
      id: uuid(),
    });
  }
  function handleChangeTask(task: TaskType) {
    dispatch({
      type: "changeTask",
      id: task.id,
      task: task,
    });
  }
  function handleDeleteTask(task: TaskType) {
    dispatch({
      type: "deleteTask",
      id: task.id,
    });
  }
  function reducer(tasks: TaskType[], action: ActionType) {
    switch (action.type) {
      case "addTask": {
        if (action.text) {
          return [...tasks, { id: action.id, text: action.text, done: false }];
        }
      }
      case "changeTask": {
        return tasks.map((t) => {
          if (t.id === action.id && action.task) {
            return action.task;
          } else {
            return t;
          }
        });
      }
      case "deleteTask": {
        return tasks.filter((t) => t.id !== action.id);
      }
      default: {
        throw Error("Unknown action" + action.type);
      }
    }
  }

  return (
    <div>
      <p>{loginFlag === "notLogin" ? "未ログイン" : "ログイン中"}</p>
      <AddTask onAddTask={handleAddTask} />
      <TaskList
        tasks={tasks}
        onChangeTask={handleChangeTask}
        onDeleteTask={handleDeleteTask}
      />
      <LoginFlagContext.Provider
        value={{
          loginFlag,
          setLoginFlag,
        }}
      >
        <Form />
      </LoginFlagContext.Provider>
    </div>
  );
}
