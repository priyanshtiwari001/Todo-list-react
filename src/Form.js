import React from "react";
import { useState } from "react";
import { data } from "./data";
export function Form({ list, setList, items, setItems }) {
  const handleChange = (e) => {
    setItems({ ...items, [e.target.name]: e.target.value });
  };

  const handleSumbit = (e) => {
    e.preventDefault();
    setList([...list, { id: items.id, title: items.title, toDo: items.toDo }]);
    setItems({ title: "", toDo: "" }); // reset the form input
    // console.log("list", list);
    // console.log("item", items);
  };

  const removeAll = () => {
    setList([]);
  };

  return (
    <section className="flex ">
      <form
        className="flex flex-col lg:flex-row items-center justify-between p-4"
        onSubmit={handleSumbit}
      >
        <input
          type="text"
          name="title"
          value={items.title}
          onChange={handleChange}
          className=" m-2 p-2 block w-80 lg:w-96 h-10 rounded-md border-black border-2 bg-purple-50"
          placeholder="Title"
        />
        <input
          type="text"
          name="toDo"
          value={items.toDo}
          onChange={handleChange}
          className=" block w-80 lg:lg:w-90  h-10 rounded-md border-black border-2 p-2 bg-purple-50"
          placeholder="Task"
        />
        <div className="p-3">
          <button className="btn" type="submit">
            Add Task
          </button>
          <button className=" btn " type="button" onClick={removeAll}>
            Remove All
          </button>
        </div>
      </form>
    </section>
  );
}
