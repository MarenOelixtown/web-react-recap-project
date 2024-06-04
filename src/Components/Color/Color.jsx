import "./Color.css";
import Button from "./Button.jsx";

export default function Color({ color, onDelete }) {
  const handleOnDelete = () => {
    console.log("tell parent to delete");
    onDelete(color);
  };
  return (
    <div
      className="color-card"
      style={{
        background: color.hex,
        color: color.contrastText,
      }}
    >
      <h3 className="color-card-hightlight">{color.hex}</h3>
      <h4>{color.role}</h4>
      <p>contrast: {color.contrastText}</p>
      <p className="color-card-hightlight">Really delete??</p>
      <Button text="Cancel" />
      <Button text="Delete" onClick={handleOnDelete} />
    </div>
  );
}
