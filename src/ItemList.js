import React, { useState } from "react";
import { Modal } from "./Modal";

export function ItemList({ state, dispatch }) {
  const { list, openModal, id } = state;
  const handleToggle = () => {
    dispatch({ type: "toggle" });
  };

  return (
    <article className="flex lg:flex-row flex-col-reverse flex-wrap mx-20 justify-center">
      {list.map((item) => {
        return (
          <div className="flex flex-col items-center p-12 bg-purple-100  rounded-xl   m-4 w-80 ">
            <h3 className="text-xl uppercase font-medium">{item.title}</h3>
            <p className="w-[100%] text-center py-4 ">{item.toDo}</p>
            <button type="button" className="btn" onClick={handleToggle}>
              view
            </button>
            {openModal ? (
              <Modal toggle={handleToggle} isClickOutside={true} />
            ) : (
              ""
            )}
          </div>
        );
      })}
    </article>
  );
}
