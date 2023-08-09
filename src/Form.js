import React from "react";
import { useState } from "react";
import { data } from "./data";
import { TextField, styled } from "@mui/material";

//using material ui, and created a input field
const CssTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "#9333ea",
    fontWeight: "bold",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "purple",
      borderWidth: "2px",
      margin: "3px",
    },
    "&:hover fieldset": {
      borderColor: "#9333ea",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#710193",
    },
  },
});

export function Form({ list, setList, items, setItems }) {
  //it handles the formInput where use tried to enter and allocate dynamically
  const handleChange = (e) => {
    setItems({ ...items, [e.target.name]: e.target.value });
  };

  //it handles the inputs like title and task and ass into the screen.
  const handleSumbit = (e) => {
    e.preventDefault();
    setList([
      ...list,
      {
        id: Math.floor(Math.random() * 100) + 1,
        title: items.title,
        toDo: items.toDo,
      },
    ]);
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
        className="flex flex-col lg:flex-row items-center justify-between p-4 "
        onSubmit={handleSumbit}
      >
        <CssTextField
          label="Title"
          variant="outlined"
          type="text"
          name="title"
          margin="dense"
          value={items.title}
          sx={{ border: "10px" }}
          onChange={handleChange}
          className="w-80 lg:w-96 h-10 rounded-md border-2 bg-purple-50"
          size="small"
        />
        <CssTextField
          label="Task"
          variant="outlined"
          type="text"
          name="toDo"
          value={items.toDo}
          onChange={handleChange}
          className=" block w-80 lg:lg:w-90  h-10 rounded-md bg-purple-50"
          size="small"
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
