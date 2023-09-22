import React from 'react';
import CartItem from '../CardItem/CardItem';

function Cart({ cart, removeFromCart, removeAllFromCart, increaseQuantity, decreaseQuantity }) {
  const total = cart.reduce((acc, item) => acc + (item.preco * item.quantity), 0);

  return (
    <div>


      {/* {cart.map(item => (
        <CartItem 
          key={item.id} 
          item={item} 
          removeFromCart={removeFromCart} 
          removeAllFromCart={removeAllFromCart}
          increaseQuantity={increaseQuantity}
          decreaseQuantity={decreaseQuantity}
        />
      ))}
      <p>Total: R$ {total}</p> */}

      
    </div>
  );
}

export default Cart;
