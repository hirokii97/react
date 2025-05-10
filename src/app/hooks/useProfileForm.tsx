import React, { ChangeEvent, useState } from "react";

export default function useProfileForm(name: string) {
  const [newName, setNewName] = useState(name);
  const changeName = (e: ChangeEvent<HTMLInputElement>) => {
    setNewName(e.target.value);
  };
  const nameProps = {
    name: newName,
    change: changeName,
  };
  return nameProps;
}
