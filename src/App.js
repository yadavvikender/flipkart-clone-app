import { BrowserRouter } from "react-router-dom";
import Router from "./utils/Router";
import ProductContext from "./context/ProductContext";

function App() {
  return (
    <div className="App">
      <ProductContext>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </ProductContext>
    </div>
  );
}

export default App;
