import React from 'react';

function TodoItem({ todo }) {
  return <li>{todo.task}</li>;
}

export default TodoItem;
