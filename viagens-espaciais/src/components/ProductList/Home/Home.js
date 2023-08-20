import React from 'react'
import ProductCard from '../ProductCard/ProductCard'
import {DivHome, HomeTitulo, HomeCards} from './HomeStyle'


const Home = ({products}) => {
  return (
    <DivHome>
        <HomeTitulo>

          <h3>Quantidade de produtos:</h3>

          <select>
            <option>Crescente</option>
            <option>Decrescente</option>
          </select>

        </HomeTitulo>

        <HomeCards>
          <ProductCard 
            product={products[0]} 
          />
          <ProductCard 
            product={products[1]} 
          />
          <ProductCard 
            product={products[2]} 
          />

          {/* {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))} */}

        </HomeCards>

    </DivHome>
  )
}

export default Home