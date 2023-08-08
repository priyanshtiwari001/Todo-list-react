import { useState } from "react";
import { Form } from "./Form";
import { Header } from "./Header";
import { ItemList } from "./ItemList";
import { data } from "./data";

const id = Math.floor(Math.random() * 100) + 1;
//console.log(id);

function App() {
  const [list, setList] = useState([
    { id: id, title: "React", toDo: "Far war to learn" },
  ]);
  const [items, setItems] = useState({ id: id, title: "", toDo: "" }); // pass in the onchange

  return (
    <div className="flex items-center flex-col">
      <Header />
      <Form setItems={setItems} items={items} setList={setList} list={list} />
      <ItemList list={list} />
    </div>
  );
}

export default App;
