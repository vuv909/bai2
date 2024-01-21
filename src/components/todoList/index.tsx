import { useEffect, useRef, useState } from "react";
import TodoItem from "../todoItem";
import { Todo } from "../types";

export default function TodoList() {
  const [todoList, setTodoList] = useState<Todo[]>([]);
  const inputValue= useRef<HTMLInputElement>(null)
  const [editItem, setEditItem] = useState<string>('');
  useEffect(() => {
    return () => {
      console.log("unmount");
    };
  });

  const addTodo = () => {
     if(inputValue.current?.value){
      setTodoList([
        ...todoList,
        {
          title: inputValue.current?.value,
          isDone: false,
          id: `${Math.random() * 100000}`,
        },
      ]);
      setEditItem('');
      inputValue.current!.value=''
     }
  };

  const handleChecked = (id: string) => {
    const index = todoList.findIndex((todo) => todo.id === id);

    if (index !== -1) {
      const todoListClone = [...todoList];
      todoListClone[index] = {
        ...todoList[index],
        isDone: !todoList[index].isDone,
      };
      setTodoList(todoListClone);
    }
  };

  const handleDelete = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    id: string
  ) => {
    e.stopPropagation();

    const index = todoList.findIndex((todo) => todo.id === id);

    if (index !== -1) {
      const todoListClone = [...todoList];
      todoListClone.splice(index, 1);
      setTodoList(todoListClone);
    }
  };

  const handleSave = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    id: string,
    text: string | undefined | null
  ) => {
    e.stopPropagation();
    if (!text) {
      console.log("====================================");
      console.log("Error::Please not empty the text");
      console.log("====================================");
    } else {
      setEditItem('');
      const index = todoList.findIndex((item) => item.id === id);
      if (index !== -1) {
        const todoListClone = [...todoList];
        todoListClone[index] = { ...todoListClone[index], title: text };
        setTodoList(todoListClone);
      }
    }
  };

  return (
    <div>
      <div>
        <input
          type="text"
          className="w-[200px] mr-3 border"
          ref={inputValue}
        />
        <button
          className="border bg-green-700 text-yellow-50 disabled:bg-slate-500 disabled:cursor-not-allowed"
          onClick={addTodo}
          disabled={!inputValue}
        >
          Add todo
        </button>
      </div>
      {todoList.map((todo) => (
        <TodoItem
          key={todo.id}
          {...todo}
          handleChecked={handleChecked}
          handleDelete={handleDelete}
          editItem={editItem}
          setEditItem={setEditItem}
          handleSave={handleSave}
        />
      ))}
    </div>
  );
}
