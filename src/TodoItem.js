import React, { useState } from 'react';
import { motion } from 'framer-motion';

function TodoItem({ todo, deleteTodo, editTodo }) {
    const [isEditing, setEditing] = useState(false);
    const [newText, setNewText] = useState(todo.text);
  
    const handleEdit = () => {
      editTodo(todo.id, newText);
      setEditing(false);
    };
  
    return (
      <li className="list-group-item d-flex justify-content-between align-items-center">
        {isEditing ? (
          <>
            <input
              value={newText}
              onChange={(e) => setNewText(e.target.value)}
              className="form-control w-75"
            />
            <button onClick={handleEdit} className="btn btn-primary ms-2">Save</button>
          </>
        ) : (
          <>
            <span>{todo.text}</span>
            <span>{todo.category} - {todo.dueDate}</span>
            <div>
              <button onClick={() => setEditing(true)} className="btn btn-warning me-2">Edit</button>
              <button onClick={() => deleteTodo(todo.id)} className="btn btn-danger">Delete</button>
            </div>
          </>
        )}
      </li>
    );
  }
  
  export default TodoItem;