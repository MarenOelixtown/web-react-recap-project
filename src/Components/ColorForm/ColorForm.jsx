import "./ColorForm.css";

export default function ColorForm() {
  return (
    <form className="form-container">
      <label htmlFor="role">Role</label>
      <input type="text" name="role" id="role" />
      <label htmlFor="hex-text">Hex</label>
      <input type="text" name="hex-text" id="hex-text" />
      <label htmlFor="hex"></label>
      <input type="color" name="hex" id="hex" />
      <label htmlFor="contrastText">Contrast Text</label>
      <input type="text" name="contrastText" id="contrastText" />
      <label htmlFor="hex-contrast"></label>
      <input type="color" name="hex-contrast" id="hex-contrast" />
      <button type="submit">Add Color</button>
    </form>
  );
}
