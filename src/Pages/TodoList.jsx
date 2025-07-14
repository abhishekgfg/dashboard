import React, { useState } from 'react';
import '../styles/TodoList.css';
import { useNavigate } from 'react-router-dom';

const TodoList = () => {
  const navigate = useNavigate();
  const [taskName, setTaskName] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [taskDate, setTaskDate] = useState('14-Jul-2025');
  const [tasks, setTasks] = useState([
    { name: 'Fan Installation', description: 'First collect some money then get fans from the shop and make sure to install them by today.', dueDate: '24-06-28', status: 'completed' },
    { name: 'Electric bill', description: '6800', dueDate: '24-06-28', status: 'completed' },
  ]);
  const [filter, setFilter] = useState('All');

  const handleAddTask = (e) => {
    e.preventDefault();
    if (taskName && taskDescription) {
      setTasks([...tasks, { name: taskName, description: taskDescription, dueDate: taskDate, status: 'pending' }]);
      setTaskName('');
      setTaskDescription('');
    }
  };

  return (
    <div className="todo-list">
      <div className="header">
        <h2>Good Afternoon, Abhishek Pandey</h2>
        <button className="dashboard-btn" onClick={() => navigate('/dashboard')}>Dashboard</button>
      </div>
      <form onSubmit={handleAddTask} className="task-form">
        <input
          type="text"
          placeholder="Task Name"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Task Description"
          value={taskDescription}
          onChange={(e) => setTaskDescription(e.target.value)}
        />
       <input
  type="date"
  value={taskDate}
  onChange={(e) => setTaskDate(e.target.value)}
/>

        <button type="submit">Add Task</button>
      </form>
      <div className="filter-section">
        <select value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="All">All</option>
          <option value="completed">Completed</option>
          <option value="pending">Pending</option>
        </select>
      </div>
      <div className="tasks">
        {tasks.map((task, index) => (
          <div key={index} className="task-card">
            <div className="task-content">
              <h3>{task.name}</h3>
              <p>{task.description}</p>
              <p>Due: {task.dueDate}</p>
            </div>
            <div className="task-actions">
              <span className="status">Status: {task.status}</span>
              <button className="edit-btn">Edit</button>
              <button className="complete-btn">Complete</button>
              <button className="delete-btn">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoList;