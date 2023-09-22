import { styled} from "styled-components";
// import imagem from  "../../../assets-img/Logo/caixa-de-pizza.png"
import imagem from  "../../../assets-img/Logo/logoCatan01.svg"

export const ContainerIMG = styled.div`
    width: 15%;
    height: 100%;
    display: flex;
    justify-content: center;
    /* border: 1px solid red; */
    flex-direction: column;
    align-items: center;
    padding: 5px;
    gap: 0.5rem;
        
        img{
            margin-left: 10px;
            padding-left: 10px;
            display: block;
            width: 50%;
            height: 100%;
        }

        /* h2{
            font-size: 1.2rem;
            letter-spacing: 1.5px;
            } */

        @media only screen and (max-width: 480px){

            width: 60%;

            h2{
                font-size: 1.2rem;
            }

            img{
                display: none;
            }
        }

        @media only screen and (min-width: 480px) and (max-width: 768px){
            width: 60%;

            img{
                width: 25%;
                display: none;
            }

            h2{
                font-size: 2rem;
            }
        };

        @media only screen and (min-width: 768px) and (max-width: 1024px){
            width: 30%;

            img{
                width: 40%;
            }

            h2{
                font-size: 2rem;
            }
        };
`;

export const Logo = () =>{
    return (
        <>
            <ContainerIMG>
                <img src ={imagem} alt="Logo do site"/>
            </ContainerIMG>
        </>
    )
}