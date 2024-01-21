import { Dispatch, SetStateAction, useRef, useState } from "react";
import { Todo } from "../types";

type Props = Todo & {
  handleChecked: (params: string) => void;
  handleDelete: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    params: string
  ) => void;
  handleSave: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    params: string,
    text: string | undefined | null
  ) => void;
  editItem: string;
  setEditItem: Dispatch<SetStateAction<string>>;
};

export default function TodoItem(props: Props) {
  const {
    id,
    isDone,
    title,
    handleChecked,
    handleDelete,
    editItem,
    setEditItem,
    handleSave,
  } = props;

  const editText = useRef<HTMLInputElement>(null);

  const handleEdit = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    id: string
  ) => {
    e.stopPropagation();
    setEditItem(id);
  };

  const handleCheckboxChange = () => {
    handleChecked(id);
  };

  return (
    <div
      className="flex w-[200px] my-2 mx-auto cursor-pointer"
    >
      {editItem !== id && (
        <>
          <input
            type="checkbox"
            onChange={handleCheckboxChange}
            checked={isDone}
          />
          <p className={`mx-3 ${isDone ? "line-through" : ""}`}>{title}</p>
          <button
            className={`mr-2 `}
            onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
              handleEdit(e, id)
            }
          >
            Edit
          </button>
        </>
      )}

      {/* edit */}
      {editItem === id && (
        <>
          <input type="text" ref={editText} />
          <button
            className="mr-5"
            onClick={(e) => handleSave(e, id, editText.current?.value)}
          >
            Save
          </button>
        </>
      )}

      <button onClick={(e) => handleDelete(e, id)}>X</button>
    </div>
  );
}
