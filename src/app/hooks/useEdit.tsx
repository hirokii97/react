import { FormEvent, useState } from "react";

export default function useEdit() {
  const [isEdit, setIsEdit] = useState(true);
  const handleClick = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsEdit(!isEdit);
  };
  return { isEdit, handleClick };
}
