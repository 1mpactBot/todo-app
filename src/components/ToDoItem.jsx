import React from "react";

function ToDoItem(props) {
  return (
    <div className="ListItem">
      <li>
        {props.text}
        <button
          onClick={() => {
            props.onClick(props.id);
          }}
        >
          Delete
        </button>
        <button
          onClick={() => {
            props.onChecked(props.id);
          }}
        >
          Completed
        </button>
      </li>
    </div>
  );
}

export default ToDoItem;
