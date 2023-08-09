import React, { useState } from "react";
import { Modal } from "./Modal";

export function ItemList({ list }) {
  const [openModal, setOpenModal] = useState(false);
  const handleToggle = (value) => {
    setOpenModal(value);
  };

  return (
    <article className="flex lg:flex-row flex-col-reverse flex-wrap mx-20 justify-center">
      {list.map((item) => {
        const { id, title, toDo } = item;
        return (
          <div
            className="flex flex-col items-center p-12 bg-purple-100  rounded-xl   m-4 w-80 "
            key={id}
          >
            <h3 className="text-xl uppercase font-medium">{title}</h3>
            <p className="w-[100%] text-center py-4 ">{toDo}</p>
            <button
              type="button"
              className="btn"
              onClick={() => handleToggle(!openModal)}
            >
              view
            </button>
            {openModal ? (
              <Modal toggle={handleToggle} openModal={openModal} />
            ) : (
              ""
            )}
          </div>
        );
      })}
    </article>
  );
}
