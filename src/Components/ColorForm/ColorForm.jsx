import ColorInput from "../ColorInput/ColorInput";
import "./ColorForm.css";

export default function ColorForm({
  color,
  onAddColor,
  onEditColor,
  toEditColorState,
  setShowEditForm,
  initialData = { role: "primary", hex: "#e5430f", contrastText: "#FFFFFF" },
}) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    console.log(data);
    if (color) {
      const editColor = { ...data, id: color.id };

      if (toEditColorState) {
        console.log("Editing color");
        onEditColor(editColor);
        setShowEditForm(false);
      }
    } else {
      onAddColor(data);
    }

    event.target.reset();
  }
  const currentData = toEditColorState ? color : initialData;
  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <label htmlFor="role">
        Role
        <br />
        <input
          type="text"
          id="role"
          name="role"
          defaultValue={currentData.role}
        />
      </label>
      <br />
      <label htmlFor="hex">
        Hex
        <br />
        <ColorInput id="hex" defaultValue={currentData.hex} />
      </label>
      <br />
      <label htmlFor="contrastText">
        Contrast Text
        <br />
        <ColorInput id="contrastText" defaultValue={currentData.contrastText} />
      </label>
      <br />

      <button type="submit">
        {toEditColorState ? "UpdateColor" : "Add Color"}
      </button>
    </form>
  );
}
