import React from "react";

export function ItemList({ data }) {
  return (
    <article className="flex lg:flex-row flex-col flex-wrap">
      {data.map((item) => {
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
              onClick={() => alert("Button is clicked")}
            >
              view
            </button>
          </div>
        );
      })}
    </article>
  );
}
