import { useEffect, useReducer } from "react";
import { Form } from "./Form";
import { Header } from "./Header";
import { ItemList } from "./ItemList";

//local storage to store data in localStorage.
const getLocalStorage = () => {
  let list = localStorage.getItem("list");
  if (list) {
    return (list = JSON.parse(localStorage.getItem("list")));
  } else {
    return [];
  }
};

//initalState
const initalState = {
  list: getLocalStorage(),
  openModal: false,
  title: "",
  toDo: "",
};

//Reducer function
const reducer = function (state, action) {
  //console.log(state, action);
  switch (action.type) {
    case "title":
      return { ...state, title: action.payload };
    case "toDo":
      return { ...state, toDo: action.payload };
    case "list":
      return { ...state, list: action.payload };
    case "toggle":
      return { ...state, openModal: Boolean(!state.openModal) };
    case "removeAll":
      return { ...state, list: action.payload };
    default:
      throw "something is wrong";
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initalState);

  const { list, title, toDo, id, openModal } = state;

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);

  return (
    <div className="flex items-center flex-col ">
      <Header />
      <Form state={state} dispatch={dispatch} />
      <ItemList state={state} dispatch={dispatch} />
    </div>
  );
}

export default App;
