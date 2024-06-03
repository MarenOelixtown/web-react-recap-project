export default function Form() {
  return (
    <form>
      <label htmlFor="role">Role</label>
      <input type="text" name="role" id="role" />
      <label htmlFor="hex">Hex</label>
      <input type="text" name="hex" id="hex" />
      <input type="color" name="hex" id="hex" />
      <label htmlFor="contrastColor">Contrast Text</label>
      <input type="text" name="contrastText" id="contrastText" />
      <input type="color" name="contrastText" id="contrastText" />
      <button type="submit">Add Color</button>
    </form>
  );
}
