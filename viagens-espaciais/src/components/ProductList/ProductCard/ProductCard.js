import React from 'react'
import {ProductCardPai} from "./ProductCardStyle"

const ProductCard = () => {
  return (
    <ProductCardPai>
        <img src="https://mega.ibxk.com.br/2019/01/28/28230107146122.jpg?ims=610x"/>
        <div> 
          <h4>Produto 2</h4>
          <h4>R$ 30,00</h4>
        </div>   
        <button>Adicionar carrinho</button>
    </ProductCardPai>
  )
}

export default ProductCard