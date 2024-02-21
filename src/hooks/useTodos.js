import { useState } from 'react';

const useTodos = () => {
  const [todos, setTodos] = useState([{ id: 1, title: "Todo1" }, { id: 2, title: "Todo2" }]);
  const [maxId, setMaxId] = useState(2);

  const addTodo = (title) => {
    const newId = maxId + 1;
    const newTodo = { id: newId, title: title };
    setTodos([...todos, newTodo]); // `todos`を使用して状態を更新
    setMaxId(newId);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id)); // `todos`を使用して状態を更新
  };

  const searchTodos = (query) => {
    return todos.filter(todo => todo.title.toLowerCase().startsWith(query.toLowerCase())); // `todos`を使用
  };

  return {
    todos,
    addTodo,
    deleteTodo,
    searchTodos
  };
};

export default useTodos;
