import { useState } from "react";
import Button from "../Color/Button";
import ThemesSelector from "./ThemesSelector";

export default function MultipleThemesManager({}) {
  const [mode, setMode] = useState("main");

  return (
    <>
      {" "}
      {mode === "main" && (
        <>
          <ThemesSelector />
          <Button text="Add" />
          <Button text="Edit" onButtonClick={() => setMode("edit")} />
          <Button text="Delete" onButtonClick={() => setMode("delete")} />
        </>
      )}
      {mode === "edit" && (
        <>
          <ThemesSelector />
          <Button
            text="Update"
            onButtonClick={() => console.log("Update clicked")}
          />
          <Button text="Cancel" onButtonClick={() => setMode("main")} />
        </>
      )}
      {mode === "delete" && (
        <>
          <Button
            text="Yes Delete"
            onButtonClick={() => console.log("Yes Delete")}
          />
          <Button text="Cancel" onButtonClick={() => setMode("main")} />
        </>
      )}
    </>
  );
}
