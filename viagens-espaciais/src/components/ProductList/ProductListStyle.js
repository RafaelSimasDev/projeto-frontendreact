import styled from 'styled-components';
import { ColorPaint } from '../Styled/ColorPaint';

export const DivEstilizada = styled.div`
  padding-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  
  background-color: black; /* Fundo preto n pegou*/

    & .filha{

      background-color: black; 
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      
      ul {
        width: 100%;
        /* border: 1px solid red; */
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        justify-content: center; /* Centraliza os cards */
        list-style: none;
        padding: 0;
        margin: 0 ;
        /* background-color: ${ColorPaint[1].light_gray4}; */
    
      }
    }

  @media (max-width: 1024px) {
    ul{
      width: calc(50% - 16px);
      /* border: 1px solid red; */
    }
  }

  @media (max-width: 768px) {
    ul{
      width: calc(50% - 16px);
      /* border: 1px solid red; */
    }
  }

  @media (max-width: 480px) {
    ul{
      /* border: 1px solid red; */
      width: 100%;
    }
  }
`;
