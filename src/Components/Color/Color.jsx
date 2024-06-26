import "./Color.css";
import Button from "./Button.jsx";
import { useState } from "react";
import ColorForm from "../ColorForm/ColorForm.jsx";
import CopyToClipboard from "../CopyToClipboard/CopyToClipboard.jsx";
import ColorCheckContrast from "../ColorCheckContrast/ColorCheckContrast.jsx";

export default function Color({ colors, color, onDelete, onEdit }) {
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);

  return (
    <div
      className="color-card"
      style={{
        background: color.hex,
        color: color.contrastText,
      }}
    >
      <h3 className="color-card-hightlight">{color.hex}</h3>
      <CopyToClipboard color={color} />
      <h4>{color.role}</h4>
      <p>contrast: {color.contrastText}</p>
      <ColorCheckContrast color={color} />
      <br />
      {showDeleteConfirmation ? (
        <>
          <p className="color-card-hightlight">Really delete??</p>
          <Button
            text="Cancel"
            onButtonClick={() => setShowDeleteConfirmation(false)}
          />
          <Button text="Delete" onButtonClick={() => onDelete(color.id)} />
        </>
      ) : (
        <>
          <Button
            text="Delete"
            onButtonClick={() => setShowDeleteConfirmation(true)}
          />
          {showEditForm ? (
            <>
              <ColorForm
                color={color}
                toEditColorState={showEditForm}
                onEditColor={onEdit}
                setShowEditForm={setShowEditForm}
              />{" "}
              <Button
                text="Cancel"
                onButtonClick={() => setShowEditForm(false)}
              />
            </>
          ) : (
            <Button text="Edit" onButtonClick={() => setShowEditForm(true)} />
          )}
        </>
      )}
    </div>
  );
}

/*
question ? yes : no
*/
