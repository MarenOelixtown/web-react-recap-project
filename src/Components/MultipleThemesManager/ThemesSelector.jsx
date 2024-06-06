import { initialThemes } from "../../lib/themes";
import useLocalStorageState from "use-local-storage-state";
import { useState } from "react";

export default function ThemesSelector({}) {
  const [themes, setThemes] = useLocalStorageState("themes", {
    defaultValue: initialThemes,
  });
  const [selectedThemeId, setSelectedThemeId] = useState(themes[0]?.id);

  const handleSelectChange = (e) => {
    setSelectedThemeId(Number(e.target.value));
  };
  return (
    <select value={selectedThemeId} onChange={handleSelectChange}>
      {themes.map((theme) => (
        <option key={theme.id} value={theme.id}>
          {theme.name}
        </option>
      ))}
    </select>
  );
}
