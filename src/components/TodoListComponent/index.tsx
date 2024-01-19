import { faL } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

interface IData {
  id: number;
  content: string;
  status: boolean;
}

export default function TodoListComponent() {
  const [data, setData] = useState<IData[]>([]);
  const [value, setValue] = useState("");
  const addTodoList = async () => {
    setData([...data, { id: data.length + 1, content: value, status: false }]);
  };

  const handleCheck = (e: React.ChangeEvent<HTMLInputElement>, id: number) => {
    console.log(e.target.checked);
    if (e.target.checked === true) {
      const dataByID = data.find((x) => x.id === id);
      if (dataByID) {
        setData((item) => {
          return item.map((item) => {
            if (item.id === dataByID.id) {
              return { ...item, content: dataByID.content, status: true };
            }
            return item;
          });
        });
      } else {
        console.log("====================================");
        console.log("Undefined data");
        console.log("====================================");
      }
    } else if (e.target.checked === false) {
      const dataByID = data.find((x) => x.id === id);
      if (dataByID) {
        setData((item) => {
          return item.map((item) => {
            if (item.id === dataByID.id) {
              return { ...item, content: dataByID.content, status: false };
            }
            return item;
          });
        });
      } else {
        console.log("====================================");
        console.log("Undefined data");
        console.log("====================================");
      }
    }
  };

  const handleDelete = (id: number) => {
    const filterData = data.filter((item) => item.id !== id);
    setData(filterData);
  };

  console.log(data);
  return (
    <div className="bg-white p-10">
      <div className="font-bold text-2xl text-center">
        <h1>Todo List</h1>
      </div>
      <div>
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="border border-solid border-yellow-500 outline-none"
        />{" "}
        <button onClick={addTodoList} className="bg-blue-400 px-2 text-white">
          +
        </button>
      </div>
      <div>
        {data.map((item, index) => {
          return (
            <div key={index} className="mt-2">
              <hr />
              <div className="flex justify-between gap-5">
                <div>
                  <input
                    onChange={(e) => handleCheck(e, item?.id)}
                    type="checkbox"
                  />
                </div>
                <div>
                  <h1 className={`${item?.status ? "line-through" : ""}`}>
                    {item?.content}
                  </h1>
                </div>
                <div onClick={() => handleDelete(item.id)}>
                  <p>x</p>
                </div>
              </div>
              <hr />
            </div>
          );
        })}
      </div>
    </div>
  );
}
