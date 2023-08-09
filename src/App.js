import { useEffect, useState } from "react";
import { Form } from "./Form";
import { Header } from "./Header";
import { ItemList } from "./ItemList";
import { data } from "./data";

const getLocalStorage = () => {
  let list = localStorage.getItem("list");
  if (list) {
    return (list = JSON.parse(localStorage.getItem("list")));
  } else {
    return [];
  }
};
function App() {
  const [list, setList] = useState(getLocalStorage());
  const [items, setItems] = useState({
    id: Math.floor(Math.random() * 100) + 1,
    title: "",
    toDo: "",
  }); // pass in the onchange

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);

  return (
    <div className="flex items-center flex-col ">
      <Header />
      <Form setItems={setItems} items={items} setList={setList} list={list} />
      <ItemList list={list} />
    </div>
  );
}

export default App;
