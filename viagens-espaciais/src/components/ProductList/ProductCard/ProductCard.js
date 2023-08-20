import React from 'react'
import {ProductCardPai} from "./ProductCardStyle"

const ProductCard = ({product}) => {
  // console.log({product})
  return (
    <ProductCardPai>
        <img src={product.imageUrl} alt={'imagem'}/>
        <div> 
          <h4>{product.name}</h4>
          <h4>R$ {product.value.toFixed(2)}</h4>
        </div>   
        <button>Adicionar carrinho</button>
    </ProductCardPai>
  )
}

export default ProductCard;