"use client";
import { AiOutlineDelete } from "react-icons/ai";

type TodoItemProps = {
  id: string;
  title: string;
  complete: boolean;
  toggleTodo: (id: string, complete: boolean) => void;
  deleteTodo: (id: string) => void;
};

export function TodoItem({ id, title, complete, toggleTodo, deleteTodo }: TodoItemProps) {
  return (
    <li className="flex gap-1 items-center">
      <input id={id} defaultChecked={complete} onChange={(e) => toggleTodo(id, e.target.checked)} type="checkbox" className="cursor-pointer peer" />
      <label htmlFor={id} className="cursor-pointer peer-checked:line-through peer-checked:text-slate-500">
        {title}
      </label>
      <button className="ml-4" onClick={() => deleteTodo(id)}>
        <AiOutlineDelete />
      </button>
    </li>
  );
}
