import React, { useState } from 'react';
import TodoList from './TodoList';

function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState('');

  const addTodo = () => {
    if (task) {
      setTodos([...todos, { id: Date.now(), task }]);
      setTask('');
    }
  };

  return (
    <div>
      <input type="text" value={task} onChange={e => setTask(e.target.value)} />
      <button onClick={addTodo}>Add Todo</button>
      <TodoList todos={todos} />
    </div>
  );
}

export default TodoApp;
