import React, { useState } from "react";

const AddTodo = (props) => {
  const [userInput, setUserInput] = useState("");

  function handleAddTodo(event) {
    event.preventDefault();
    props.addTodo(userInput);
    setUserInput("");
  }
  return (
    <div>
      <form onSubmit={handleAddTodo}>
        <input
          value={userInput}
          placeholder="Add something to do"
          onChange={(e) => setUserInput(e.target.value)}
        />
        <button>Add</button>
      </form>
    </div>
  );
};

export default AddTodo;
