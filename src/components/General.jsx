import React, { useState } from 'react';
import TodoElContenido from "./TodoElContenido";
import EditFormulario from "./EditFormulario";
import Formulario from "./Formulario";

const General = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    const newTodo = {
      id: Date.now(),
      task: todo,
      completed: false,
      isEditing: false,
    };

    setTodos((prevTodos) => {
      const updatedTodos = [...prevTodos, newTodo];

      // Separate completed and incomplete todos
      const completedTodos = updatedTodos.filter((todo) => todo.completed);
      const incompleteTodos = updatedTodos.filter((todo) => !todo.completed);

      // Sort incomplete todos alphabetically
      const sortedIncompleteTodos = incompleteTodos.sort((a, b) =>
        a.task.localeCompare(b.task)
      );

      // Concatenate sorted incomplete todos and completed todos
      const reorderedTodos = [...sortedIncompleteTodos, ...completedTodos];

      return reorderedTodos;
    });
  };

  const deleteTodo = (id) =>
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));

  const toggleComplete = (id) => {
    setTodos((prevTodos) => {
      const updatedTodos = prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      );

      // Separate completed and incomplete todos
      const completedTodos = updatedTodos.filter((todo) => todo.completed);
      const incompleteTodos = updatedTodos.filter((todo) => !todo.completed);

      // Sort incomplete todos alphabetically
      const sortedIncompleteTodos = incompleteTodos.sort((a, b) =>
        a.task.localeCompare(b.task)
      );

      // Concatenate sorted incomplete todos and completed todos
      const reorderedTodos = [...sortedIncompleteTodos, ...completedTodos];

      return reorderedTodos;
    });
  };

  const editTodo = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  };

  const editTask = (task, id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
      )
    );
  };

  return (
    <div>
      <h1>REMEMBRALL</h1>
      <Formulario addTodo={addTodo} />
      {todos.map((todo) => {
        if (todo.isEditing) {
          return (
            <EditFormulario
              key={todo.id}
              editTodo={editTask}
              task={todo}
            />
          );
        } else {
          return (
            <TodoElContenido
              key={todo.id}
              task={todo}
              deleteTodo={deleteTodo}
              editTodo={editTodo}
              toggleComplete={toggleComplete}
            />
          );
        }
      })}
    </div>
  );
};

export default General;