"use client";

import { v4 as uuid } from "uuid";
import AddTask from "@/app/AddTask";
import TaskList from "@/app/TaskList";
import {
  ChangeEvent,
  createContext,
  Dispatch,
  SetStateAction,
  useLayoutEffect,
  useReducer,
  useState,
  useTransition,
} from "react";
import Form from "@/app/Form";
import { set } from "react-hook-form";

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

type positionType = {
  x: number;
  y: number;
};

export const LoginFlagContext = createContext<LoginFlagContextType | null>(
  null
);

export default function Home() {
  const [loginFlag, setLoginFlag] = useState<string | null>(null);
  const [position, setPosition] = useState<positionType>({ x: 0, y: 0 });
  const [isPending, startTransition] = useTransition();
  const [searchWord, setSearchWord] = useState<string>("");

  useLayoutEffect(() => {
    setPosition({ x: window.scrollX, y: window.scrollY });
  }, []);

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchWord(e?.target?.value);
    startTransition(() => {
      // Simulate a 5-second delay
      console.log(`Search completed for: ${searchWord}`);
    });
  };

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
    <div
      style={{
        position: "absolute",
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    >
      <div>
        <p>タスク管理</p>
        <AddTask onAddTask={handleAddTask} />
        <TaskList
          tasks={tasks}
          onChangeTask={handleChangeTask}
          onDeleteTask={handleDeleteTask}
        />
      </div>
      <div style={{ marginTop: "50px" }}>
        <p>{loginFlag === "notLogin" ? "未ログイン" : "ログイン中"}</p>
        <LoginFlagContext.Provider
          value={{
            loginFlag,
            setLoginFlag,
          }}
        >
          {/* <Form /> */}
        </LoginFlagContext.Provider>
      </div>

      <div>
        <input
          type="text"
          onChange={(e) => handleSearch(e)}
          value={searchWord}
        />
        <p>{isPending && `${searchWord}を検索中・・・・`}</p>
      </div>
    </div>
  );
}
