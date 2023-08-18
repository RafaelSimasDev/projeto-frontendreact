import Filters from "./components/Filters/Filters"
import Home from "./components/ProductList/Home/Home"
import Cart from "./components/ShoppingCart/Cart/Cart"
import {GlobalStyle, FontStyles, Body} from "./GlobalStyle"


function App() {
  return (
    <>
      <GlobalStyle/>
      <FontStyles/>

      <Body>
        <Filters/>
        <Home/>
        <Cart/>
      </Body>
      
    </>
  );
}

export default App;
