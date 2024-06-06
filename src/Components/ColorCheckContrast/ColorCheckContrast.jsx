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

  return <p>Overall contrast score: {resultContrast} </p>;
}
