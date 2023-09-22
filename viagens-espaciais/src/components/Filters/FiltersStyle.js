import styled from "styled-components"
import { ColorPaint } from "../Styled/ColorPaint";
import catanUniverse from '../../assets-img/banner/filtro01.jpg'

export const FiltroDiv = styled.div`
    padding: 10px 10px;
    width: 100%;
    height: 30%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    background-image: url(${catanUniverse});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center 45%;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.5);

        form{
            width: 100%;
            
            display: flex;
            justify-content: space-around;
            align-items: center;

                label{
                    color: ${ColorPaint[0].orange4};
                    background-color: ${ColorPaint[0].transparent};
                    display: block;
                    padding-top: 20px;
                    text-align: center;
                    width: 40%;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    border-radius: 12px;
                    height: 70%;
                    font-size: 1.5rem;
                    font-weight: bold;
                    font-size: italic;
                    box-shadow: 0px 1.5px 3px rgba(0, 0, 0, 0.5);

                        input{
                            font-size: 1.2rem;
                            box-shadow: 0px 1.5px 3px rgba(0, 0, 0, 0.5);
                            display: block;
                            outline: none;
                            width: 250px;
                            appearance: textfield;
                            -webkit-appearance: textfield;
                            -moz-appearance: textfield;
                            border-radius: 20px;
                            margin: 30px auto;
                            height: 40px;
                            border: none;
                            padding-left: 20px;
                            background-color:${ColorPaint[0].orange4};;
                        }

                        input::-webkit-inner-spin-button,
                        input::-webkit-outer-spin-button {
                            -webkit-appearance: none;
                            appearance: none;
                            margin: 0;
                        }
                }    
        }

        select{
            display: flex;
            box-shadow: 0px 1.5px 3px rgba(0, 0, 0, 0.5);
            width: 150px;
            margin: 0 auto;
            font-size: 1rem;
            height: 40px;
            border-radius: 12px;
            text-align: center;
            color: ${ColorPaint[0].orange4};
            background-color: ${ColorPaint[0].black};
            border: none;
            outline: none;
        }

        @media only screen and (max-width:480px){
           

        
            form {
                flex-direction: column;
                gap: 25px;

                label {
                    width: 90%; 
                    height: auto; 

                    input {
                        width: 90%;
                        margin: 15px auto; 
                    }
                }    
            }

        }

        @media only screen and (min-width: 480px) and (max-width: 768px){
           
           
            form {
                flex-direction: column; 
                gap: 25px;

                label {
                    width: 90%; 
                    height: auto; 
                    font-size: 1.2rem;

                    input {
                        width: 70%; 
                        height: 30px;
                        margin: 15px auto;
                        font-size: 1rem;
                    }
                }    
            }

        }
        
        @media only screen and (min-width: 768px) and (max-width: 1024px){
           
            form {
        
                gap: 25px;

                label {
                    width: 90%;
                    height: auto;
                    font-size: 1.2rem;

                    input {
                        width: 70%; 
                        margin: 15px auto; 
                        font-size: 1rem;
                    }
                }    
            }

        
        }
`;

export default FiltroDiv;