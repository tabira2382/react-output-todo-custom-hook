// TodoTemplate/index.jsx
import React, {useState} from 'react';
import useTodos from '../../../hooks/useTodos';
import { InputForm } from '../../atoms/inputForm'
import {AddTodo} from '../../organisms/AddTodo'
import {TodoList} from '../../organisms/TodoList'
import styles from "./styles.module.css";

export const TodoTemplate = () => {
  const { todos, addTodo, deleteTodo, searchTodos } = useTodos();
  const [newTodoTitle, setNewTodoTitle] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const handleAddTodo = () => {
    if (newTodoTitle) {
      addTodo(newTodoTitle);
      setNewTodoTitle(""); // 入力値をクリア
    }
  };

  const handleInputChange = (e) => {
    setNewTodoTitle(e.target.value);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredTodoItems = searchQuery ? searchTodos(searchQuery) : todos;



  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Todo List</h1>
      
      {/* AddTodo */}
      <section className={styles.common}>
        <AddTodo
          addInputValue={newTodoTitle}
          onChangeTodo={handleInputChange}
          handleAddTodo={handleAddTodo}
        />
      </section>
      
      {/* 検索フォーム */}
      <section className={styles.common}>
        <InputForm
        inputValue={searchQuery}
        placeholder={"Search Todo"}
        handleChangeValue={handleSearchChange}
        />
      </section>

      {/* TodoList */}
      <section className={styles.common}>
        <TodoList todoItems={filteredTodoItems} onDeleteTodo={deleteTodo} />
      </section>
    </div>
  );
};

