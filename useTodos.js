import { useEffect, useReducer } from 'react';
import { todoReducer } from '../08-useReducer/todoReducer';

//Esto es para en la inicialización recoger lo que hay en el localstorage
const init = () => {
  return JSON.parse(localStorage.getItem('todos') || '[]');
};

export const useTodos = () => {
  const [todos, dispatch] = useReducer(todoReducer, [], init); //[] es el initialValue

  //almacenar el array en localStorage (application en f14 en el chrome)
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handleNewTodo = (todo) => {
    const action = {
      type: '[TODO] Add Todo',
      payload: todo,
    };

    dispatch(action);
  };

  const handleDeleteTodo = (id) => {
    const action = {
      type: '[TODO] Delete Todo',
      payload: id,
    };

    dispatch(action);
  };

  const handleToggleTodo = (id) => {
    const action = {
      type: '[TODO] Toggle Todo',
      payload: id,
    };

    dispatch(action);
  };

  return {
    todos,
    todosCounter: todos.length,
    pendingTodosCounter: todos.filter((x) => x.done).length,
    handleNewTodo,
    handleDeleteTodo,
    handleToggleTodo,
  };
};
