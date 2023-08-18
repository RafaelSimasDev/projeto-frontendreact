import React from 'react'
import { DivCart, Produtos, Total } from './CartStyle'


const Cart = () => {
  return (
    <DivCart>
      <Produtos>
        <h3>2x</h3>
        <h3>Produto 2</h3>
        <button>Remover</button>
      </Produtos>

      <Produtos>
        <h3>2x</h3>
        <h3>Produto 2</h3>
        <button>Remover</button>
      </Produtos>

      <Total>Valor total: R$ 523,00</Total>

    </DivCart>
  )
}

export default Cart