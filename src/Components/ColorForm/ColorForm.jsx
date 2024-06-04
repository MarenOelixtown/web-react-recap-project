import "./ColorForm.css";
import { useState } from "react";

export default function ColorForm() {
  const [colorHex, setColorHex] = useState("#e5430f");
  const [colorContrastHex, setColorContrastHex] = useState("#FFFFFF");

  const handleColorChangeOne = (event) => {
    setColorHex(event.target.value);
  };
  const handleColorChangeTwo = (event) => {
    setColorContrastHex(event.target.value);
  };

  return (
    <form className="form-container">
      <label htmlFor="role">Role</label>
      <input type="text" name="role" id="role" />
      <label htmlFor="hex-text">Hex</label>
      <input type="text" name="hex-text" id="hex-text" value={colorHex} />
      <label htmlFor="hex"></label>
      <input
        type="color"
        name="hex"
        id="hex"
        value={colorHex}
        onChange={handleColorChangeOne}
      />
      <label htmlFor="contrastText">Contrast Text</label>
      <input
        type="text"
        name="contrastText"
        id="contrastText"
        value={colorContrastHex}
      />
      <label htmlFor="hex-contrast"></label>
      <input
        type="color"
        name="hex-contrast"
        id="hex-contrast"
        value={colorContrastHex}
        onChange={handleColorChangeTwo}
      />
      <button type="submit">Add Color</button>
    </form>
  );
}
