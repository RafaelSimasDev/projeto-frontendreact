import Filters from "./components/Filters/Filters"
import Home from "./components/ProductList/Home/Home"
import Cart from "./components/ShoppingCart/Cart/Cart"

function App() {
  return (

    <div className="App">
      <Filters/>
      <Home/>
      <Cart/>
    </div>

  );
}

export default App;
