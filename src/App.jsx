import { Navbar } from "./components/navbar/Navbar";
import { ItemListContainer } from "./itemListContainer/ItemListContainer";

function App() {
  return (
    <div>
      <Navbar />
      <ItemListContainer greeting={"Hola!"} />
    </div>
  );
}

export default App;
