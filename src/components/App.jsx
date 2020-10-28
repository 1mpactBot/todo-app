import React, { useState } from "react";
import ToDoItem from "./ToDoItem";
import InputArea from "./InputArea";
import CompleteItem from "./CompleteItem";
import Footer from "./Footer";

function App() {
  // todo items array
  const [items, setItems] = useState([]);

  // completed items array
  const [completedItems, setCompletedItems] = useState([]);

  //updates when comleted button is clicked
  function updatingList(id) {
    setCompletedItems((prevItems) => {
      return [...prevItems, items[id]];
    });
    setItems((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

  //creates a new todo when Add button is clicked
  function createTODO(inputText) {
    setItems((prevItems) => {
      return [...prevItems, inputText];
    });
  }

  //deletes the Todo from both completed and todo items arrays
  function deleteTODO(id) {
    setCompletedItems((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });

    setItems((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="content">
      <div className="container">
        <div className="heading">
          <h1>New Todos</h1>
        </div>
        <InputArea onAdd={createTODO} />
        <div>
          <ul>
            {items.map((todoItem, index) => (
              <ToDoItem
                key={index}
                id={index}
                text={todoItem}
                onClick={deleteTODO}
                onChecked={updatingList}
              />
            ))}
          </ul>
        </div>
      </div>

      <div className="container">
        <div className="heading">
          <h1>Completed Todos</h1>
        </div>
        <div>
          <ul>
            {completedItems.map((todoItem, index) => (
              <CompleteItem
                key={index}
                id={index}
                text={todoItem}
                onClick={deleteTODO}
              />
            ))}
          </ul>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
