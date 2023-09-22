// ProductList.js

import React from 'react';
import CardItem from '../CardItem/CardItem';  // Importando o componente CardItem
import { DivEstilizada } from './ProductListStyle';

function ProductList({ products, addToCart }) {
  return (
    <DivEstilizada>
      <div className='filha'>
        <ul> 
          {products.map((product, index) => (
            <CardItem key={index} item={product} addToCart={addToCart} />
          ))}
        </ul>
      </div>
    </DivEstilizada>
  );
}

export default ProductList;
