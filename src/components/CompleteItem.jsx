import React from "react";

function CompleteItem(props) {
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
      </li>
    </div>
  );
}

export default CompleteItem;
