import React from 'react';

const ToDoItem = ({ task, toggleComplete, deleteTask }) => {
  return (
    <li className={task.completed ? 'completed' : ''}>
      <span className="task-text">{task.text}</span>
      <div className="task-buttons">
      <button className="btn btn-success" onClick={() => toggleComplete(task.id)}>
        {task.completed ? 'Undo' : 'Completed'}
      </button>
      <button className="btn btn-danger" onClick={() => deleteTask(task.id)}>Delete</button>
      </div>
    </li>
  );
};

export default ToDoItem;


