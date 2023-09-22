import { styled } from "styled-components";
import ImgCarro from "../../../assets-img/Logo/carrinho-catan01.png";
import { ColorPaint } from "../../Styled/ColorPaint";
import CardProduct from "./CardProduct/CardProduct";
import { useState } from "react";

export const Car = styled.div`
    width: 40px;
    height: 60px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

        img{
            width: 90%;
            height: 60%;
        }

        &:active{
            transform: scale(.97);
        }

        span{
            position: absolute;
            width: 20px;
            height: 20px;
            font-size: 0.8rem;
            background-color: black;
            left: -5px;
            top: -5px;
            border-radius: 50%;
            color: white;
            display: flex;
            justify-content: center;
            align-items: center;
            transition: all ease-in-out 200ms;

            /* Center the number inside the span */
            line-height: 20px;
        }
    
        @media only screen and (max-width: 480px){
            width: 40px;
            
                img{
                    width: 60%;
                    height: 40%;
                }
        }
`;

export const ContainerCarrinho = styled.div`
    width: 20%;
    position: absolute;
    top: 12.2vh;
    right: 0;
    height: 0px;
    border-bottom-left-radius: 12px;
    background: ${ColorPaint[0].orange4};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    visibility: hidden;
    opacity: 0;
    transition: all ease-in-out 400ms;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.5); 
    /* padding: 10px; */
    /* position: relative; */

        & button{
            visibility: hidden;
            opacity: 0;
            
        }

        ul{
            width: 100%;
            max-height: 85%;
            display: flex;
            overflow-x: hidden;
            overflow-y: scroll;
            /* max-height: 80%; */
            gap: 20px;
            flex-direction: column;
            align-items: center;
            padding: 15px 0;

                li{
                    cursor: pointer;
                    width: 90%;
                    border-radius: 12px;
                    border: 1px solid black;
                    box-shadow: 1px 2px 2px;
                    

                          &:active{
                            transform: scale(.97);
                          }       
                }

                &::-webkit-scrollbar{
                    width: 10px;
                    background-color: gray;
                }

                &::-webkit-scrollbar-thumb{
                    background-color: ${ColorPaint[0].suport_color};
                    border-bottom-left-radius: 8px;
                    border-bottom-right-radius: 8px;
                }
            }

        &.active{
            visibility: visible;
            opacity: 1;
            height: 50vh;

                & button{
                width: 40%;
                position: absolute;
                bottom: 7px;
                height: 40px;
                border: none;
                background-color: ${ColorPaint[0].black};
                color: ${ColorPaint[0].orange4};
                cursor: pointer;
                border-radius: 20px;
                outline: none; 
                /* color: black; */
                font-weight: 700;
                visibility: visible;
                opacity: 1;
                transition: all ease-in-out 200ms;
                

                    /* &:hover{
                        background-color: ${ColorPaint[0].overlap_color2};
                        color: black;
                    } */

                    &:active{
                        transform: scale(.70);
                    }
                }
        }

        

        @media only screen and (max-width: 480px){
            width: 50%;
            
            border-radius: 0px;
            /* max-height: 100vh; */

                &.active{
                    height: calc(60vh - 12.2vh);

                    & button{
                        bottom: 10px;
                        width: 120px;
                        height: 25px;
                        font-size: 0.8rem;
                    }
                }

                
        }

        @media only screen and (min-width: 480px) and (max-width: 768px){
          width: 50%;
            
            border-radius: 0px;
            /* max-height: 100vh; */

                &.active{
                    height: calc(60vh - 12.2vh);

                    & button{
                        bottom: 10px;
                        width: 120px;
                        height: 30px;
                        font-size: 0.9rem;
                    }
                }

                
        }

        @media only screen and (min-width: 768px) and (max-width: 1024px){
          width: 50%;
            
            border-radius: 0px;
            /* max-height: 100vh; */

                &.active{
                    height: calc(60vh - 12.2vh);

                    & button{
                        bottom: 10px;
                        width: 120px;
                        height: 25px;
                        font-size: 0.9rem;
                    }
                }

                
        }

        /* @media only screen and (min-width: 1024px){
            width: 30%;

            &.active{
                visibility: visible;
                opacity: 1;
                height: 50vh;

            }
        } */


`;

const CarrinhoNew = ({ cart, setCart, removeFromCart,removeAllFromCart}) => {
  const [abreCarro, setAbreCarro] = useState(false);

  const abreCarrinho = () => {
    setAbreCarro(!abreCarro);
  };


  //-------------------

  const increaseQuantity = (productId) => {
    const updatedCart = cart.map((product) => {
      if (product.id === productId) {
        return { ...product, quantity: product.quantity + 1 };
      }
      return product;
    });
    setCart(updatedCart);
  };

  const decreaseQuantity = (productId) => {
    const productInCart = cart.find((product) => product.id === productId);

    if (productInCart.quantity > 1) {
      const updatedCart = cart.map((product) => {
        if (product.id === productId) {
          return { ...product, quantity: product.quantity - 1 };
        }
      // return product;
      });
      setCart(updatedCart);
    } else {
      setCart(cart.filter((item) => item.id !== productId));
    }
  };




  //-------------------

  const lista = cart.map((item) => (
    <li key={item.id}>
      <CardProduct
        titulo={item.titulo}
        image={item.image}
        description={item.descricao}
        price={item.preco}
        desconto={item.promocao}
        setCart={setCart}
        objeto={item}
        cart={cart}
        id={item.id}
        removeFromCart={removeFromCart}
        removeAllFromCart={removeAllFromCart}
        increaseQuantity={increaseQuantity}
        decreaseQuantity={decreaseQuantity}
        quantity={item.quantity}
      />
    </li>
  ));


  const total = cart.reduce((acc, product) => acc + (product.preco * product.quantity), 0);

  return (
    <>
      <Car onClick={abreCarrinho}>
        <img src={ImgCarro} alt="" />
        {cart.length > 0 ? <span>{cart.length}</span> : ""}
      </Car>

      <ContainerCarrinho className={abreCarro && "active"}>
        <ul>{lista}</ul>
        {/* <p>Total: R$ {total}</p> */}
        <button>Total: R$ {total}</button>
      </ContainerCarrinho>
    </>
  );
};

export default CarrinhoNew;
