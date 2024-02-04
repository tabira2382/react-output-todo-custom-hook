/**
 * AddTodo
 *
 * @package components
 */
import { InputForm } from "../../atoms/InputForm";
import styles from "./style.module.css";

/**
 * AddTodo
 * @param {*} props
 * @returns
 */

export const AddTodo = (props) => {
  /* props */
  const { addInputValue, onChangeTodo, handleAddTodo } = props;

    // エンターキー押下時のイベントハンドラ
    const handleKeyDown = (e) => {
      if (e.key === 'Enter') {
        handleAddTodo();
      }
    };
  

  return (
    <>
      <h2 className={styles.subTitle}>{"Add Todo"}</h2>
      <InputForm
        inputValue={addInputValue}
        placeholder={"New Todo"}
        handleChangeValue={onChangeTodo}
        handleKeyDown={handleKeyDown}
      />
    </>
  );
}