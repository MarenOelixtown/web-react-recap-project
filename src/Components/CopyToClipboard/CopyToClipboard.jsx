import Button from "../Color/Button";
import { useState, useEffect } from "react";

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
  useEffect(() => {
    if (isCopied) {
      const timer = setTimeout(() => {
        setIsCopied(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [isCopied]);
  return (
    <Button
      text={isCopied ? "Successfully Copied" : "Copy"}
      onButtonClick={() => handleCopyHexCode(color.hex)}
    />
  );
}
