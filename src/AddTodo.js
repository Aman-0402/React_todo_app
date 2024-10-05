import React, { useState } from 'react';
import { motion } from 'framer-motion';

function AddTodo({ addTodo }) {
    const [task, setTask] = useState('');
    const [category, setCategory] = useState('Work');
    const [dueDate, setDueDate] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      addTodo(task, category, dueDate);
      setTask('');
      setDueDate('');
    };
  
    return (
      <form onSubmit={handleSubmit} className="mb-4">
        <div className="input-group mb-3">
          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Add a new task"
            required
            className="form-control"
          />
          <button type="submit" className="btn btn-success">Add Task</button>
        </div>
  
        <div className="d-flex">
          <select 
            value={category} 
            onChange={(e) => setCategory(e.target.value)} 
            className="form-select me-2"
          >
            <option value="Work">Work</option>
            <option value="Personal">Personal</option>
            <option value="School">School</option>
          </select>
          <input 
            type="date" 
            value={dueDate} 
            onChange={(e) => setDueDate(e.target.value)} 
            className="form-control" 
          />
        </div>
      </form>
    );
  }
  
  export default AddTodo;