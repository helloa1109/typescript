import React, { useState } from "react";
import TodoItem from "./TodoItem";
import CreateTodo from "./CreateTodo";


interface TList {
  id: number;
  text: string;
  completed: boolean;
}

export default function TodoList() {
  const [inputText, setInputText] = useState('');
  const [todoList, setTodoList] = useState<TList[]>([
    {
      id: 1,
      text: "할일 1",
      completed: false,
    },
    {
      id: 2,
      text: "할일 2",
      completed: false,
    },
  ]);

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
  setInputText("");
};

const textDeleteHandler = (id: number) => {
  setTodoList(todoList.filter((todoItem) => todoItem.id !== id));
};

  return (
    <div className="todoListContainer">
      {todoList.map((item) => (
        <TodoItem id={item.id} text={item.text} completed={item.completed} 
        onClickDelete={textDeleteHandler}/>
      ))}
      <CreateTodo
        onChange={textTypingHandler}
        onSubmit={textInputHandler}
        inputText={inputText}
      />
    </div>
  );
}

