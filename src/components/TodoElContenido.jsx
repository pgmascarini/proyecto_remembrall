import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrash, faCircleCheck } from '@fortawesome/free-solid-svg-icons';

const TodoElContenido = ({ task, deleteTodo, editTodo, toggleComplete }) => {
  return (
    <div className="Todo">
      <p
        className={`${task.completed ? 'completed' : ''}`}
        onClick={() => toggleComplete(task.id)}
      >
        <FontAwesomeIcon icon={faCircleCheck} className="check-icon" />
        {task.task}
      </p>
      <div>
      <FontAwesomeIcon icon={faPenToSquare} onClick={() => editTodo(task.id)} />
        <FontAwesomeIcon icon={faTrash} onClick={() => deleteTodo(task.id)} />
      </div>
    </div>
  );
};

export default TodoElContenido;
