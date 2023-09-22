import { useState } from 'react'
import {styled} from 'styled-components';
import { ColorPaint} from "../../Styled/ColorPaint";
// ----------------

// import TelaLogin from "../../Cadastro/TelaCadastro/TelaCadastro";
// import TelaCadastro from "../../Cadastro/TelaCadastro/TelaCadastro";
// import TelaPrincipal from "../../Cadastro/TelaPrincipal/TelaPrincipal";
// import TelaCadastroEndereco from "../../Cadastro/TelaCadastroEndereco/TelaCadastroEndereco";

// ----------------
export const Burguer = styled.div`
    width: 30px;
    height: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    position: relative;

        span{
            width: 100%;
            height: 4px;
            border-radius: 8px;
            background-color: ${ColorPaint[0].black};
            transition: all ease-in-out 1ms;
        }

        &.active{
            span{
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);

                &:first-child {
                    transform: translate(-50%, -50%) rotate(45deg);
                }

                &:last-child {
                    transform: translate(-50%, -50%) rotate(-45deg);
                }

                &:nth-child(2) {
                    visibility: hidden;
                    opacity: 0;
                    width: 0;
                }
            }
        }

        &:active{
            transform: scale(.97);
        }

        @media only screen and (max-width: 480px){
            width: 30px;
            height: 16px;
            
                span{
                    width: 80%;
                    height: 3px;
                }

        }
`

export const ContainerBurguer = styled.div`
    width: 15%;
    position: absolute;
    top: 12.1vh;
    left: 0;
    height: 0px;
    border-bottom-right-radius: 12px;
    background: ${ColorPaint[0].orange4};
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* padding: 20px 0; */
    align-items: center;
    visibility: hidden;
    opacity: 0;
    border-top: 2px solid black;
    transition: all ease-in-out 250ms;
    overflow: hidden;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5); 
    /* border: 0.5px solid black; */
    /* gap: 10px; */
    

        ul{
            /* border: 1px solid red; */
            width: 30%;
            height: 50%;
            display: flex;
            justify-content: center;
            gap: 2rem;
            flex-direction: column;
            /* gap: 5px; */

                a{
                    font-size: 1.5rem;
                    font-weight: 700;
                    color: ${ColorPaint[0].black};
                    transition: all ease 400ms;
                    position: relative;
                    opacity: 0.9;

                        &:hover{
                        opacity: 1.2;

                            &:before{
                                width: 100%;
                            }          
                        }

                        &:before{
                            content: "";
                            position: absolute;
                            left: 0;
                            bottom: 0;
                            width: 0;
                            height: 2.5px;
                            background: ${ColorPaint[0].black};
                            transition: all .45s;

                        }
                    }
        }

        .botao{
            /* border: 1px solid red; */
            width: 100%;
            height: 30%;
            display: flex;
            padding: 0px 10px;
            justify-content: center;
            align-items: center;
            margin-bottom: 10px;
            
            /* gap: 20px; */

            & button{
                width: 150px;
                height: 50px;
                font-size: 1.2rem;
                border-radius: 30px;
                border: none;
                /* border: 2px solid black; */
                outline: none; 
                background-color: ${ColorPaint[0].black};
                color: ${ColorPaint[0].orange4};
                cursor: pointer;
                transition: all ease 500ms;

                    /* &:hover{
                        background-color: ${ColorPaint[0].suport_color};
                        color: black;
                    } */

                    &:active{
                        transform: scale(.70);
                    }
            }
        }

        &.active{
            visibility: visible;
            opacity: 1;
            height: 25vh;
        }

        @media only screen and (min-width: 768px) and (max-width: 1024px){
          

          /* width: 100%; */
          border-radius: 0px;
             padding: 0;
             display: flex;
             align-items: center;
             justify-content: center;
             /* border: 1px solid red; */
             /* gap: 2rem; */
 
                 .botao{
                     display: flex;
                     justify-content: center;
                     align-items: center;
                     /* border: 1px solid red; */
                     height: 50%;
                     width: 100%;
                     gap: 0;
                     padding: 0 5px;
                     /* display:none; */
 
                     & button{
                         width: 85%;
                         height: 70%;
                         font-size: 1rem;
                         border-radius: 30px;
                     }
                 }
 
                 &.active{
                     width: 30%;
                     height: calc(30vh - 12.3vh);
                 }
 
                 ul{
                     display: flex;
                     justify-content: center;
                     align-items: center;
                     height: 50%;
                     width: 100%;
                     text-align: center;
 
                     a{
                         font-size: 1.3rem;
                     }
                 }
         }

        @media only screen and (max-width: 480px){
            border-radius: 0px;
            padding: 0;
            display: flex;
            align-items: center;
            justify-content: center;

                .botao{
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 50%;
                    width: 100%;
                    gap: 0;
                    padding: 0 5px;

                    & button{
                        width: 100%;
                        height: 50%;
                        font-size: 0.75rem;
                        border-radius: 30px;
                    }
                }

                &.active{
                    width: 27%;
                    height: calc(30vh - 12.3vh);
                }

                ul{
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 50%;
                    width: 100%;
                    text-align: center;

                    a{
                        font-size: 1.2rem;
                    }
                }
        }

        @media only screen and (min-width: 480px) and (max-width: 768px){
            border-radius: 0px;
            padding: 0;
            display: flex;
            align-items: center;
            justify-content: center;

                .botao{
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 50%;
                    width: 100%;
                    gap: 0;
                    padding: 0 5px;

                    & button{
                        width: 85%;
                        height: 70%;
                        font-size: 1rem;
                        border-radius: 30px;
                    }
                }

                &.active{
                    width: 35%;
                    height: calc(30vh - 12.3vh);
                }

                ul{
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 50%;
                    width: 100%;
                    text-align: center;

                    a{
                        font-size: 1.3rem;
                    }
                }
        }

        @media only screen and (min-width: 768px) and (max-width: 1024px){
          
         border-radius: 0px;
            padding: 0;
            display: flex;
            align-items: center;
            justify-content: center;

                .botao{
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 50%;
                    width: 100%;
                    gap: 0;
                    padding: 0 5px;

                    & button{
                        width: 55%;
                        height: 70%;
                        font-size: 1rem;
                        border-radius: 30px;
                    }
                }

                &.active{
                    width: 25%;
                    height: calc(30vh - 12.3vh);
                }

                ul{
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    /* border: 1px solid red; */
                    height: 50%;
                    width: 100%;
                    /* gap: 70px; */
                    text-align: center;

                    a{
                        font-size: 1.3rem;
                    }
                }
        }

`;

const MenuHamburguer = (props) => {

    const [abreBurguer, setAbreBurguer] = useState(false);




  return (
    <>
        <Burguer className={abreBurguer && "active"} onClick={() => setAbreBurguer(!abreBurguer)} >
            <span></span>
            <span></span>
            <span></span>
        </Burguer>

        <ContainerBurguer className={abreBurguer && "active"}>
            <ul>
                <li><a onClick={() => props.setPagina("Home")} href={"#!"}>Home</a></li>
            </ul>

            <div className="botao">
                <button onClick={() => props.setPagina("TelaCadastro")}>Cadastre-se</button>
            </div>
        </ContainerBurguer>
    </>    
  )
}

export default MenuHamburguer