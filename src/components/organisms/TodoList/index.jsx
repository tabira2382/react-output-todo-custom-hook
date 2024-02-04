// components/organisms/TodoList/index.jsx
import React from 'react';
import styles from './style.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons';

 
export const TodoList = (props) => {
  const todoItems = props.todoItems;
  const onDeleteTodo = props.onDeleteTodo
  return (
    <ul className={styles.list}>
      {todoItems.map((item) => (
        <li key={item.id} className={styles.todo}>
          <span className={styles.task}>{item.title}</span>
          <div className={styles.fa}>
          <FontAwesomeIcon icon={faTrash} onClick={() => onDeleteTodo(item.id)} />
          </div>
          </li>
      ))}
    </ul>
  );
};
