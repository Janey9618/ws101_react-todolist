import React from 'react';
import ToDoItem from '../../../todolist/src/components/ToDoItem';

const ToDoList = ({ tasks, toggleComplete, deleteTask }) => {
  return (
    <ul>
      {tasks.map((task) => (
        <ToDoItem key={task.id} task={task} toggleComplete={toggleComplete} deleteTask={deleteTask} />
      ))}
    </ul>
  );
};

export default ToDoList;
