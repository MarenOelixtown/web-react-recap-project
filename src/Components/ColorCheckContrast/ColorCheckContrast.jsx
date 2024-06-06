import "./ColorCheckContrast.css";
import { useEffect, useState } from "react";

export default function ColorCheckContrast({ color }) {
  const [resultContrast, setResultContrast] = useState(null);

  useEffect(() => {
    async function fetchColorContrastData() {
      try {
        const response = await fetch(
          "https://www.aremycolorsaccessible.com/api/are-they",
          {
            mode: "cors",
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ colors: [color.hex, color.contrastText] }),
          }
        );
        const data = await response.json();
        setResultContrast(data.overall);
      } catch (error) {
        console.error("Error fetching contrast data:", error);
      }
    }
    fetchColorContrastData();
  }, [color.hex, color.contrastText]);

  const getStyle = (contrast) => {
    if (contrast === "Yup") {
      return { color: "green" };
    } else if (contrast === "Kinda") {
      return { color: "orange" };
    } else if (contrast === "Nope") {
      return { color: "red" };
    } else {
      return {};
    }
  };

  return (
    <p className="color-contrast" style={getStyle(resultContrast)}>
      Overall contrast score: {resultContrast}{" "}
    </p>
  );
}
