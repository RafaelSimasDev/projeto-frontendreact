import React, { useState, useEffect } from 'react';
import Filter from './components/Filters/Filters';
import ProductList from './components/ProductList/ProductList';
import Cart from './components/Cart/Cart';
import productsData from './components/services/FAKE API/FakeApi';
import  Header  from './components/Header/Header';
import { Banner } from './components/Banner/Banner';
import { GlobalStyle } from './GlobalStyle';
//---
import TelaCadastro from "./components/Cadastro/TelaCadastro/TelaCadastro";
import TelaCadastroEndereco from "./components/Cadastro/TelaCadastroEndereco/TelaCadastroEndereco";
import TelaPrincipal from "./components/Cadastro/TelaPrincipal/TelaPrincipal";
import TelaLogin from "./components/Cadastro/TelaLogin/TelaLogin";
//---


function App() {

  const [products, setProducts] = useState(productsData);
  const [filteredProducts, setFilteredProducts] = useState(productsData);
  const [cart, setCart] = useState([]);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000);
  const [searchTerm, setSearchTerm] = useState("");

  // ----------------------------------

  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  // ----------------------------------

  const [selectedType, setSelectedType] = useState("");


  useEffect(() => {
    filterProducts();
  }, [minPrice, maxPrice, searchTerm, selectedType]);
  

  const filterProducts = () => {
    const trimmedSearchTerm = searchTerm.trim();
    const result = products.filter(product => 
    product.preco >= minPrice && 
    product.preco <= maxPrice &&
    product.titulo.toLowerCase().includes(trimmedSearchTerm.toLowerCase()) &&
    (selectedType === "" || product.categoria === selectedType) // Filtrar por categoria
);

    setFilteredProducts(result);
  };
  

const handleSearchChange = (event) => {
  setSearchTerm(event.target.value);
};

  const addToCart = (productToAdd) => {
    const productInCart = cart.find(product => product.id === productToAdd.id);
    //Aqui, estamos usando o método find para verificar se o produto que queremos 
    //adicionar (productToAdd) já está no carrinho (cart).
    //Se o produto já estiver no carrinho, productInCart conterá esse produto. 
    //Se não estiver, productInCart será undefined.
    if (productInCart) {
      const updatedCart = cart.map(product => {
        if (product.id === productToAdd.id) {
          return { ...product, quantity: (product.quantity || 1) + 1 };
        }
        return product;
      });
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...productToAdd, quantity: 1 }]);
    }
  };

  const removeFromCart = (productId) => {
    const productInCart = cart.find(product => product.id === productId);
  
    if (productInCart && productInCart.quantity > 1) {
      const updatedCart = cart.map(product => {
        if (product.id === productId) {
          return { ...product, quantity: product.quantity - 1 };
        }
        return product;
      });
      setCart(updatedCart);
    } else {
      setCart(cart.filter(item => item.id !== productId));
    }
  };

  const removeAllFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  const increaseQuantity = (productId) => {
    const updatedCart = cart.map(product => {
      if (product.id === productId) {
        return { ...product, quantity: product.quantity + 1 };
      }
      return product;
    });
    setCart(updatedCart);
  };

  const decreaseQuantity = (productId) => {
    const productInCart = cart.find(product => product.id === productId);

    if (productInCart && productInCart.quantity > 1) {
      const updatedCart = cart.map(product => {
        if (product.id === productId) {
          return { ...product, quantity: product.quantity - 1 };
        }
        return product;
      });
      setCart(updatedCart);
    } else {
      setCart(cart.filter(item => item.id !== productId));
    }
  };


  // ----------------------

  const [pagina, setPagina] = useState("Home");

let estadoPagina;

switch(pagina){
    case 'Home':
        estadoPagina = (
          <>
           <Filter 
              minPrice={minPrice} 
              maxPrice={maxPrice} 
              setMinPrice={setMinPrice} 
              setMaxPrice={setMaxPrice} 
              searchTerm={searchTerm}
              handleSearchChange={handleSearchChange}
              selectedType={selectedType}
              setSelectedType={setSelectedType}
              filterProducts={filterProducts}
          />

            <ProductList
              products={filteredProducts.length > 0 ? filteredProducts : products}
              addToCart={addToCart}
            />

            <Cart 
              cart={cart} 
              removeFromCart={removeFromCart} 
              removeAllFromCart={removeAllFromCart} 
              increaseQuantity={increaseQuantity}
              decreaseQuantity={decreaseQuantity}
            />
          </>
        );
        break;
    case "TelaCadastro":
        estadoPagina = <TelaCadastro setPagina={setPagina} />;
        break;
    case "TelaCadastroEndereco":
        estadoPagina = <TelaCadastroEndereco setPagina={setPagina} />;
        break;
    case "TelaLogin":
        estadoPagina = <TelaLogin setPagina={setPagina} />;
        break;
    case "TelaPrincipal":
        estadoPagina = <TelaPrincipal setPagina={setPagina} />;
        break;
    default:
        estadoPagina = (
          <>
              <Filter 
              minPrice={minPrice} 
              maxPrice={maxPrice} 
              setMinPrice={setMinPrice} 
              setMaxPrice={setMaxPrice} 
              searchTerm={searchTerm}
              handleSearchChange={handleSearchChange}
              selectedType={selectedType}
              setSelectedType={setSelectedType}
              filterProducts={filterProducts}
            />
            
            <ProductList
              products={filteredProducts.length > 0 ? filteredProducts : products}
              addToCart={addToCart}
            />

            <Cart 
              cart={cart} 
              removeFromCart={removeFromCart} 
              removeAllFromCart={removeAllFromCart} 
              increaseQuantity={increaseQuantity}
              decreaseQuantity={decreaseQuantity}
            />
          </>
        );
        break;             
}


  // ----------------------

  return (
    <div>
    <GlobalStyle />
    <Header
       cart ={cart}
       setCart={setCart}
       setPagina = {setPagina}
    />
    {!["TelaCadastro", "TelaCadastroEndereco", "TelaLogin", "TelaPrincipal"].includes(pagina) && <Banner />}
    {estadoPagina}
  </div>
  );
}

export default App;
