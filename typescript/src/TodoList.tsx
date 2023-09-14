import { useState } from "react";
import CreateTodo from "./CreateTodo";
import TodoItem from "./TodoItem";

export interface TList {
  id: number;
  text: string;
  completed: boolean;
}
export default function TodoList() {
  const [inputText, setInputText] = useState("");
  const [todoList, setTodoList] = useState<TList[]>([]);

  // 입력값 변경내용 확인
  const textTypingHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  // 입력 확인
  const textInputHandler = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const newTodo: TList = {
      id: Date.now(),
      text: inputText,
      completed: false,
    };
    setTodoList([...todoList, newTodo]);
    
    // 입력한 값 지우기
    setInputText("");
  };

  // 값 삭제하기
  const textDeleteHandler = (id: number) => {
    setTodoList(todoList.filter((todoItem) => todoItem.id !== id));
  };

  // 값 수정하기
  const updateHandler = (newTodo: TList): void => {
    
    const newTodoList = todoList.map((item) => {
      if (item.id === newTodo.id) {
        return newTodo;
      } else {
        return item;
      }
    });
    setTodoList(newTodoList);
  };

  return (
    <div className="todoListContainer">
      <h3>💝 상혁이의 할 일💝</h3>
      {todoList.map((item) => (
        <TodoItem
          id={item.id}
          text={item.text}
          completed={item.completed}
          onClickDelete={textDeleteHandler}
          onClickUpdate={updateHandler}
        />
      ))}
      <CreateTodo
        onChange={textTypingHandler}
        onSubmit={textInputHandler}
        inputText={inputText}
      />
    </div>
  );
}