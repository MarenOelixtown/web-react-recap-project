import { initialColors } from "./lib/colors";
import Color from "./Components/Color/Color";
import "./App.css";
import ColorForm from "./Components/ColorForm/ColorForm.jsx";
import { useState } from "react";
import { uid } from "uid";

function App() {
  const [colors, setColors] = useState(initialColors);
  const deleteAColor = (colorToBeDeleted) => {
    const updatedColors = colors.filter(
      (color) => color.id !== colorToBeDeleted.id
    );
    setColors(updatedColors);
  };
  function handleAddColor(newColor) {
    setColors([{ id: uid(), ...newColor }, ...colors]);
  }

  return (
    <>
      <h1>Theme Creator</h1>
      <ColorForm onAddColor={handleAddColor} />

      {colors.length === 0 ? (
        <p>No colors ... start by adding one!</p>
      ) : (
        colors.map((color) => (
          <Color key={color.id} color={color} onDelete={deleteAColor} />
        ))
      )}
    </>
  );
}

export default App;
