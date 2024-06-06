import Button from "../Color/Button";
import { useState } from "react";

export default function CopyToClipboard({ color }) {
  const [isCopied, setIsCopied] = useState(false);

  async function handleCopyHexCode(hexValue) {
    try {
      await navigator.clipboard.writeText(hexValue);
    } catch (error) {
      console.error(error.message);
    }
    setIsCopied(true);
  }
  return (
    <Button
      text={isCopied ? "Successfully Copied" : "Copy"}
      onButtonClick={() => handleCopyHexCode(color.hex)}
    />
  );
}
