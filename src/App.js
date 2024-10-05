import React, { useState, useEffect } from 'react';
import AddTodo from './AddTodo';
import TodoList from './TodoList';
import { motion } from 'framer-motion';
import './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('All');
  const [darkMode, setDarkMode] = useState(false);

  // Load todos from localStorage
  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem('todos'));
    if (savedTodos) {
      setTodos(savedTodos);
    }
  }, []);

  // Save todos to localStorage
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text, category, dueDate) => {
    setTodos([...todos, { text, category, dueDate, id: Date.now() }]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const editTodo = (id, newText) => {
    setTodos(todos.map(todo => (todo.id === id ? { ...todo, text: newText } : todo)));
  };

  const toggleTheme = () => setDarkMode(!darkMode);

  const filteredTodos = filter === 'All' ? todos : todos.filter(todo => todo.category === filter);

  return (
    <div className={darkMode ? 'bg-dark text-white' : 'bg-light text-dark'} style={{ minHeight: '100vh' }}>
      <div className="container py-5">
        <h1 className="text-center mb-4">My To-Do List</h1>

        <div className="d-flex justify-content-end">
          <button 
            onClick={toggleTheme} 
            className={`btn ${darkMode ? 'btn-light' : 'btn-dark'} mb-4`}
          >
            {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          </button>
        </div>

        <div className="d-flex justify-content-between align-items-center mb-4">
          <select 
            onChange={(e) => setFilter(e.target.value)} 
            className="form-select w-25"
          >
            <option value="All">All</option>
            <option value="Work">Work</option>
            <option value="Personal">Personal</option>
            <option value="School">School</option>
          </select>
        </div>

        <AddTodo addTodo={addTodo} />
        <TodoList todos={filteredTodos} deleteTodo={deleteTodo} editTodo={editTodo} />
      </div>
    </div>
  );
}
export default App;
