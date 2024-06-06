import { initialColors } from "./lib/colors";
import Color from "./Components/Color/Color";
import "./App.css";
import ColorForm from "./Components/ColorForm/ColorForm.jsx";
import { useState } from "react";
import { uid } from "uid";
import useLocalStorageState from "use-local-storage-state";
import MultipleThemesManager from "./Components/MultipleThemesManager/MultipleThemesManager.jsx";

function App() {
  /* const [colors, setColors] = useState(initialColors); */
  const [colors, setColors] = useLocalStorageState("colors", {
    defaultValue: initialColors,
  });

  const handleDelete = (id) => {
    setColors(colors.filter((color) => color.id !== id));
  };
  const handleEditColor = (editColor) => {
    setColors(
      colors.map((color) => {
        if (color.id === editColor.id) return { ...editColor };
        return color;
      })
    );
  };

  function handleAddColor(newColor) {
    setColors([{ id: uid(), ...newColor }, ...colors]);
  }

  return (
    <>
      <h1>Theme Creator</h1>
      <MultipleThemesManager />
      <ColorForm onAddColor={handleAddColor} />

      {colors.length === 0 ? (
        <p>No colors ... start by adding one!</p>
      ) : (
        colors.map((color) => (
          <Color
            key={color.id}
            color={color}
            colors={colors}
            onDelete={handleDelete}
            onEdit={handleEditColor}
          />
        ))
      )}
    </>
  );
}

export default App;
