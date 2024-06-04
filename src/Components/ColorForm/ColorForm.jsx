import "./ColorForm.css";
import { useState } from "react";
import useLocalStorageState from "use-local-storage-state";

export default function ColorForm({ onAddColor }) {
  const [colorHex, setColorHex] = useState("#e5430f");
  const [colorContrastHex, setColorContrastHex] = useState("#FFFFFF");

  const handleColorChangeOne = (event) => {
    setColorHex(event.target.value);
  };
  const handleColorChangeTwo = (event) => {
    setColorContrastHex(event.target.value);
  };
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    onAddColor(data);
    event.target.reset();
  }

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <label htmlFor="role">Role</label>
      <input type="text" name="role" id="role" placeholder="Color Name" />
      <label htmlFor="hex-text">Hex</label>
      <div className="row">
        <input type="text" name="hex-text" id="hex-text" value={colorHex} />
        <label htmlFor="hex"></label>
        <input
          type="color"
          name="hex"
          id="hex"
          value={colorHex}
          onChange={handleColorChangeOne}
        />
      </div>

      <label htmlFor="contrastText">Contrast Text</label>
      <div className="row">
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
      </div>

      <button type="submit">Add Color</button>
    </form>
  );
}
