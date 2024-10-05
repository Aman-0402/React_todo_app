import React from 'react';
import TodoItem from './TodoItem';
import { AnimatePresence } from 'framer-motion';

function TodoList({ todos, deleteTodo, editTodo }) {
    return (
      <ul className="list-group">
        {todos.map(todo => (
          <TodoItem key={todo.id} todo={todo} deleteTodo={deleteTodo} editTodo={editTodo} />
        ))}
      </ul>
    );
  }
  
  export default TodoList;
