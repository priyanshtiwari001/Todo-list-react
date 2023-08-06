import React from "react";
import { useState } from "react";
import { data } from "./data";
export function AddItems() {
  const [remove, setRemove] = useState(data);
  const removeAll = () => {
    setRemove([]);
  };

  return (
    <section className="  flex flex-col lg:flex-row justify-center items-center ">
      <form className=" flex p-4  items-center  ">
        <input
          type="text"
          className=" m-2 p-2 block w-1/2 lg:w-80 h-10 rounded-md border-black border-2 bg-purple-50  "
          placeholder="Title"
        />
        <input
          type="text"
          className=" block w-1/2 lg:w-80 h-10 rounded-md border-black border-2 p-2 bg-purple-50"
          placeholder="Task"
        />
      </form>

      <div className="">
        <button className="btn" type="button">
          Add Task
        </button>
        <button
          className=" btn "
          type="button"
          onClick={() => alert("hello ji")}
        >
          Remove All
        </button>
      </div>
    </section>
  );
}
