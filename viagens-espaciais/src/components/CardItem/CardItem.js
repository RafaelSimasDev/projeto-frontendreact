import React from 'react';
import styled from 'styled-components';
import { ColorPaint } from '../Styled/ColorPaint';


const DivPai = styled.div`
  background: linear-gradient(to bottom, ${ColorPaint[0].orange2}, ${ColorPaint[0].orange4});
  padding: 10px;
  min-height: 200px;
  border-radius: 20px;
  margin: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  text-align: center;
  flex: 0 1 calc(33% - 16px); 
  box-sizing: border-box;  

  img {
    max-width: 100%;
    height: 200px; 
    object-fit: cover; 
    display: block; 
    margin: 0 auto; 
  }

  h2, p, button {
    margin: 4px 0;
    text-align: center; 
  } 

  h2 {
    font-size: 1.3rem;
    font-weight: 600;
  }

  p {
    width: 80%;
    /* border: 1px solid red; */
    font-size: 1rem;
    font-weight: 600;
  }

  button {
  width: 40%;
  height: auto;
  border-radius: 20px;
  display: flex;
  padding: 8px 20px; 
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  border: none;
  outline: none; 
  font-size: 1.2rem;
  background-color: ${ColorPaint[0].black};
  color: ${ColorPaint[0].orange4};
  cursor: pointer;
  transition: all ease 500ms;

  &:active {
    transform: scale(.70);
  }
}

  @media (max-width: 1024px) {
    flex: 0 1 calc(50% - 20px);
  }

  @media (max-width: 768px) {
    flex: 0 1 calc(70% - 20px);
  }

  @media (max-width: 480px) {
    flex: 0 1 100%;
  }
`;

function CardItem({ item, addToCart }) {
  return (
    <DivPai>
      <img src={item.image} alt={item.titulo} />
      <h2>{item.titulo}</h2>
      <p>R$ {item.preco}</p>
      <p>{item.descricao}</p>
      <button onClick={() => addToCart(item)}>Comprar</button>
    </DivPai>
  );
}

export default CardItem;








