import { styled } from "styled-components";
import { ColorPaint } from "../../../Styled/ColorPaint";
import img from "../../../../assets-img/Logo/deletelixo.png"
import { useState } from "react";

export const Product = styled.div`
    width: 100%;
    height: 100px;
    /* border: 1px solid black; */
    display: flex;
    justify-content: space-around;
    background-color: ${ColorPaint[0].suport_color};
    padding: 4px;
    border-radius: 12px;

      .imagemProduto {
      /* border: 1px solid red; */
      width: 30%;
      height: 100%;
      overflow: hidden; 
      position: relative; 

        img {
          width: 100%;
          height: 100%;
          transition: transform 0.3s ease; 
        }

        &:hover img {
          transform: scale(1.1); 
        }
      }

      .content{
        /* border: 1px solid red; */
        padding: 1.5px;
        width: 50%;
        height: 100%;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        justify-content: center;
        /* gap: 0.3rem; */

          h3{
            flex: 1;
            font-size: 0.7rem;
            /* border: 1px solid red; */
            height: 40%;
            /* text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden; */
          }

          p{
            display: none;
            font-size: 0.7rem;
            font-style: italic;
          }

          & > span{
            display: flex;
            margin-right: 10px;
            margin-bottom: 5px;
            margin-left: 5px;
            align-items: center;
            /* border: 1px solid red; */
            justify-content: start;
            height: 25%;
            font-size: 1rem;
            font-weight: 700;
            color: black;
            
          }

          & .counter{
            height: 30%;
            /* border: 1px solid red; */
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: start;
            gap: 10px;

            .numeroSpan{
                    font-size: 1rem;
                  }

             & a{
                /* border: 1px solid red; */
                width: 18px;
                height: 18px;
                border-radius: 50%;
                font-weight: bold;
                font-size: 1rem;
                background-color: black;
                display: flex;
                align-items: center;
                justify-content: center;
                color: ${ColorPaint[0].orange4};

                  .spanUm{
                    color: ${ColorPaint[0].orange4};
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin-bottom: 1.5px;
                  }

                  .spanDois{
                    color: ${ColorPaint[0].orange4};
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin-top: 2px;
                  }

                  &:hover{
                    background-color: black;
                  }

                  &:active{
                    transform: scale(.97);
                  }
              }

            & span{
              display: flex;
                align-items: center;
            }
          }

          
      }

      .Delete{
            width: 10%;
            height: 100%;
            display: flex;
            /* border: 1px solid red; */
            justify-content: center;
            align-items: center;
            cursor: pointer;

                img{
                  /* border: 1px solid red; */
                    width: 100%;
                }

                &:active{
                    transform: scale(.97);
                }
      }

          @media only screen and (max-width: 480px){
            height: 80px;

    .imagemProduto {
      width: 30%;

      img {
        transform: scale(1); 
      }
    }

    .content {
      width: 60%;

      h3 {
        /* border: 1px solid red; */
        font-size: 0.6rem;
      }

      p {
        
        font-size: 0.6rem;
      }

      & > span {
        margin-top: 10px;
        font-size: 0.7rem;
      }


      .counter a {
        width: 16px;
        height: 16px;
        font-size: 0.9rem;
        
      }
    }

    .content .counter .numeroSpan {
      font-size: 0.8rem;
    }
    
    .Delete {
      width: 10%;
    }
          };
          
          @media only screen and (min-width: 480px) and (max-width: 768px) {
    height: 90px;

    .imagemProduto {
      width: 32%;

      img {
        transform: scale(1.05); 
      }
    }

    .content {
      width: 53%;

      h3 {
        font-size: 0.65rem;
      }

      p {
        font-size: 0.65rem;
      }

      & > span {
        font-size: 0.85rem;
        margin-top: 10px;
      }

      .counter a {
        width: 17px;
        height: 17px;
        font-size: 0.95rem;
      }
    }

    .content .counter .numeroSpan {
      font-size: 0.8rem;
    }

    .Delete {
      width: 10%;
    }
          }

          @media only screen and (min-width: 768px) and (max-width: 1024px) {
    height: 120px;

    .imagemProduto {
      width: 28%;

      img {
        transform: scale(1.08); 
      }
    }

    .content {
      width: 58%;

      h3 {
        font-size: 0.9rem;
      }

      p {
        font-size: 0.9rem;
        
      }

      & > span {
        font-size: 1.2rem;
        margin-top: 10px;
      }

      .counter a {
        width: 20px;
        height: 20px;
        font-size: 1.2rem;
      }
    }

    .content .counter .numeroSpan {
      font-size: 1.2rem;
    }

    .Delete {
      width: 10%;
    }
          } 
          
  `;

const CardProduct = (props) => {

  const [count, setCount] = useState(1)

  const incremento = () => {
    // Chama a função para aumentar a quantidade no carrinho
    props.increaseQuantity(props.objeto.id);
  
    // Atualiza o estado local do contador
    setCount(props.objeto.quantity + 1);
  };
  
  
  // --------------------

  const decrementador = (id) => {
    const produto = props.cart.find((item) => item.id === id);
    if (produto.quantity > 1) {
      const newCart = props.cart.map((item) => {
        if (item.id === id) {
          return { ...produto, quantity: produto.quantity - 1 };
        } else {
          return item;
        }
      });

      props.setCart(newCart);
    } else {
      const novoCarro = props.cart.filter((item) => item.id !== id);
      props.setCart(novoCarro);
    }
  };


  // --------------------

  const excluirItem = () => {
    const novoValor = props.cart.filter(item => item.titulo !== props.titulo);
    props.setCart(novoValor);
  }

  return (
    <Product>

      <div className="imagemProduto">
        <img src={props.image} alt="Imagem Produto" />
      </div>

      <div className="content">
        <h3>{props.titulo} </h3>
        <p>{props.description}</p>
        <span>$ {props.price * props.quantity}</span>

        <div className="counter">
          <a onClick={()=>decrementador(props.id)} href="!#"><span className="spanUm">-</span></a>
          <span className="numeroSpan">{props.quantity}</span>
          <a onClick={incremento} href="!#" ><span className="spanDois">+</span></a>
        </div>

      </div>

      <div className="Delete" onClick={excluirItem}>
        <img src={img} alt="" />
      </div>
      
    </Product>
  );
};

export default CardProduct;