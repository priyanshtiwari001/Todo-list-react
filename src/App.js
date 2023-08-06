import { AddItems } from "./AddItems";
import { Header } from "./Header";
import { ItemList } from "./ItemList";
import { data } from "./data";

function App() {
  return (
    <div className="flex items-center flex-col ">
      <Header />
      <AddItems />
      <ItemList data={data} />
    </div>
  );
}

export default App;
