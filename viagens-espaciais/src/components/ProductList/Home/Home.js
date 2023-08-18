import React from 'react'
import ProductCard from '../ProductCard/ProductCard'
import {DivHome, HomeTitulo, HomeCards} from './HomeStyle'


const Home = () => {
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
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
        </HomeCards>

    </DivHome>
  )
}

export default Home