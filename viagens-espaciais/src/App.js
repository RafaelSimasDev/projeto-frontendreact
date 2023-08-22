import Filters from "./components/Filters/Filters"
import Home from "./components/ProductList/Home/Home"
import Cart from "./components/ShoppingCart/Cart/Cart"
import {GlobalStyle, FontStyles, Body} from "./GlobalStyle"
import productsList from "./components/assents/productsList"
import { useState } from "react"

function App() {
  //semana 3 - No App declare os estados
  const [minFilter, setMinfilter] = useState("");
  const [maxFilter, setMaxFilter] = useState("");
  const [searchFilter, setSearchFilter] = useState("");
  const [cart, setCart] = useState ("")
  const [amount, setAmount] = useState(0);
  // ordination = select
  const [select, setSelect] = useState("crescente")

  const functionMinFilter = (event) =>{
    setMinfilter(event.target.value);
  }

  const functionMaxFilter = (event) =>{
    setMaxFilter(event.target.value);
  }

  const functionSearch = (event) =>{
    setSearchFilter(event.target.value)
  }

  const functionCart = (event) =>{
    setCart(event.target.value)
  }

  const functionAmount = (event) =>{
    setAmount(Event.target.value)
  }
  //---------------- Forma do chat GPT--------------------//

  // const [cart, setCart] = useState([]);

  // const addCart = (productAdd) =>{
  //   setCart([...cart, productAdd]);
  //   setAmount(amount + productAdd.price)
  // }

  //------------------------------------//

  return (
    <>
      <GlobalStyle/>
      <FontStyles/>

      <Body>
        <Filters
        minFilter={minFilter}
        maxFilter={maxFilter}
        searchFilter={searchFilter}
        functionMinFilter={functionMinFilter}
        functionMaxFilter={functionMaxFilter}
        functionSearch={functionSearch}
        />
        <Home 
        products = {productsList}
        select = {select}
        // setSelect = {setSelect}
        cart= {cart}
        setCart ={setCart}
        amount = {amount}
        setAmount = {setAmount}
        />
        <Cart
        cart= {cart}
        setCart ={setCart}
        amount = {amount}
        setAmount = {setAmount}
        />
      </Body>
      
    </>
  );
}

export default App;
