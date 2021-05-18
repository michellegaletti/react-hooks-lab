import React from "react";
import Todo from "./Todo";

const List = (props) => {
  console.log(props);
  return (
    <div>
      {props.list.map((todoItem, index) => {
        return <Todo key={index} todoItem={todoItem} />;
      })}
    </div>
  );
};

export default List;
