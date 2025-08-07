import "./App.css";
import { Form } from "./components/Form/Form";
import { ItemsList } from "./components/ItemsList/ItemsList";
import { mockProducts } from "./components/mockData";

function App() {
  return (
    <>
      <Form />
      <ItemsList items={mockProducts} />
    </>
  );
}

export default App;
