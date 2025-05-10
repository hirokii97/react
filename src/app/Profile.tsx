import useEdit from "@/app/hooks/useEdit";
import useProfileForm from "@/app/hooks/useProfileForm";
import { useState } from "react";

export default function Profile() {
  const { isEdit, handleClick } = useEdit();
  const firstName = useProfileForm("Jane");
  const lastName = useProfileForm("Jacobs");

  return (
    <form onSubmit={(e) => handleClick(e)}>
      <label>
        First name:
        {isEdit ? (
          <b>{firstName.name}</b>
        ) : (
          <input value={firstName.name} onChange={firstName.change} />
        )}
      </label>
      <label>
        Last name:{" "}
        {isEdit ? (
          <b>{lastName.name}</b>
        ) : (
          <input value={lastName.name} onChange={lastName.change} />
        )}
      </label>
      <button type="submit">{isEdit ? "Edit" : "Save"} Profile</button>
      <p>
        <i>
          Hello, {firstName.name} {lastName.name}!
        </i>
      </p>
    </form>
  );
}
