'use client';

import { todoReducer } from '@/reducers/TodoReducer';
import { TodoActionType, TodoListType } from '@/types/TodoTypes';
import React, { Reducer, useReducer, useState } from 'react';

const TodoApp = () => {
  const [todoList, dispatch] = useReducer<
    Reducer<TodoListType, TodoActionType>
  >(todoReducer, []);
  const [todoTitle, setTodoTitle] = useState('');

  const handleAddTodo = () => {
    dispatch({ type: 'ADD_TODO', title: todoTitle });
    setTodoTitle('');
  };

  return (
    <div>
      <h1>Todo App</h1>
      <input
        type="text"
        value={todoTitle}
        onChange={(e) => setTodoTitle(e.target.value)}
      />
      <button onClick={handleAddTodo}>Add Todo</button>
      <ul>
        {todoList.map((todo) => (
          <li key={todo.id}>
            <span className={`${todo.completed ? 'line-through' : ''}`}>
              {todo.title}
            </span>
            <button
              onClick={() => dispatch({ type: 'TOGGLE_TODO', id: todo.id })}
            >
              Completed
            </button>
            <button
              onClick={() => dispatch({ type: 'REMOVE_TODO', id: todo.id })}
            >
              Remove `
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
