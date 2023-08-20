import Filters from "./components/Filters/Filters"
import Home from "./components/ProductList/Home/Home"
import Cart from "./components/ShoppingCart/Cart/Cart"
import {GlobalStyle, FontStyles, Body} from "./GlobalStyle"
import productsList from "./components/assents/productsList"

function App() {
  return (
    <>
      <GlobalStyle/>
      <FontStyles/>

      <Body>
        <Filters/>
        <Home 
        products = {productsList}
        />
        <Cart/>
      </Body>
      
    </>
  );
}

export default App;
