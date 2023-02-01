import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';


function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  function handleNewTodoChange(e) {
    setNewTodo(e.target.value);
  }

  function handleAddTodo() {
    setTodos([...todos, newTodo]);
    setNewTodo('');
  }

  function handleDeleteTodo(index) {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }

  function handleDeleteAllTodo() {
    setTodos([]);
  }

  function handleUpdateTodo(index, value) {
    setTodos(todos => {
        const newTodos = [...todos];
        newTodos[index] = value;
        return newTodos;
    });
  }

  return (
    <div>
      <h1>Todo App</h1>
      <TextField id="standard-basic" label="Standard" variant="standard"
        type="text"
        placeholder="Add a new todo"
        value={newTodo}
        onChange={handleNewTodoChange}
      />
      <Button variant="contained" onClick={handleAddTodo}>Add</Button>
      
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <Button variant="contained" onClick={() => handleDeleteTodo(index)}>Delete</Button>
            <Button variant="contained" onClick={() => handleUpdateTodo(index, 'updated')}>Update</Button>
            </li>
        ))}
      </ul>
      <Button variant="contained" onClick={handleDeleteAllTodo}>Delete All</Button>
    </div>
  );
}

export default TodoApp;