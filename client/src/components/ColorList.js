import React, { useState } from "react";
import {axiosWithAuth} from "../utils/axiosWithAuth"

const initialColor = {
  color: "",
  code: { hex: "#" }
};

const ColorList = ({ colors, setColorList, getBubbles, updateColorList, ...props }) => {
  console.log(colors);
  const [editing, setEditing] = useState(false);
  const [colorToEdit, setColorToEdit] = useState(initialColor);
  const [addColor, setAddColor] = useState(initialColor)

  const editColor = color => {
    setEditing(true);
    setColorToEdit(color);
  };

  const newColor = {
    id: Date.now(),
    color: addColor.color,
    code: addColor.code
}

  const resetField = () => {
    setAddColor(initialColor)
    setColorToEdit(initialColor)
  }

  const saveEdit = e => {
    e.preventDefault();
    // Make a put request to save your updated color
    // think about where will you get the id from...
    // where is is saved right now?
    axiosWithAuth()
      .put(`/colors/${colorToEdit.id}`, colorToEdit)
      .then(res => {
        console.log(res);
        // updateColorList(res.data)
        getBubbles();
        resetField()
    })
    .catch(err =>
        console.log(err)    
    )

  };

  const deleteColor = color => {
    // make a delete request to delete this color
    axiosWithAuth()
      .delete(`/colors/${colorToEdit.id}`)
      .then(res => {
        // updateColorList(res.data)
        getBubbles();
      })
      .catch(err =>
        console.log(err)    
    )
  };

  const addColorPost = e => {
    e.preventDefault();
    axiosWithAuth()
        .post(`http://localhost:5000/api/colors`, newColor)
        .then(res => {
            // updateColorList(res.data);
            // props.history.push(`/`);
            getBubbles();
            resetField();
        })
        .catch(err =>
            console.log(err)    
        )
}

console.log(colorToEdit.id)

  return (
    <div className="colors-wrap">
        <p>colors</p>
        <ul>
          {colors.map(color => (
            <li key={color.color} onClick={() => editColor(color)}>
              <span>
                <span className="delete" onClick={e => {
                      e.stopPropagation();
                      deleteColor(color)
                    }
                  }>
                    x
                </span>{" "}
                {color.color}
              </span>
              <div
                className="color-box"
                style={{ backgroundColor: color.code.hex }}
              />
            </li>
          ))}
        </ul>
        {editing && (
          <form onSubmit={saveEdit}>
            <legend>edit color</legend>
            <label>
              color name:
              <input
                onChange={e =>
                  setColorToEdit({ ...colorToEdit, color: e.target.value })
                }
                value={colorToEdit.color}
              />
            </label>
            <label>
              hex code:
              <input
                onChange={e =>
                  setColorToEdit({
                    ...colorToEdit,
                    code: { hex: e.target.value }
                  })
                }
                value={colorToEdit.code.hex}
              />
            </label>
            <div className="button-row">
              <button type="submit">save</button>
              <button onClick={() => setEditing(false)}>cancel</button>
            </div>
        </form>    
      )}
      <div>
          <form onSubmit={addColorPost}>
          <input 
              type="text"
              name="color"
              onChange={e =>
                setAddColor({ ...addColor, color: e.target.value })
              }
              placeholder="color"
              value={addColor.color}
          />
          <input 
              type="text"
              name="code"
              onChange={e =>
                setAddColor({
                  ...addColor,
                  code: { hex: e.target.value }
                })
              }
              placeholder="code"
              value={addColor.code.hex}
          />
          <button>Add</button>
      </form>
    </div>
      <div className="spacer" />
      {/* stretch - build another form here to add a color */}
      {/* <div>
            <form onSubmit={addColorPost}>
                <input 
                    type="text"
                    name="color"
                    onChange={e =>
                      setAddColor({ ...addColor, color: e.target.value })
                    }
                    placeholder="color"
                    value={addColor.color}
                />
                <input 
                    type="text"
                    name="code"
                    onChange={e =>
                      setAddColor({
                        ...addColor,
                        code: { hex: e.target.value }
                      })
                    }
                    placeholder="code"
                    value={addColor.code.hex}
                />
                <button>Add</button>
            </form>
        </div> */}
    </div>
  );
};

export default ColorList;
