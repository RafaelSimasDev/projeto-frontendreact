import {styled} from "styled-components";
import lugarimagem from '../../assets-img/banner/fundo-lado-direito01.avif'
import { ColorPaint } from "../Styled/ColorPaint"

export const BannerContainer = styled.section`    
    height: 85vh;
    flex-wrap: wrap;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    background-color: ${ColorPaint[0].black};
    padding: 20px 20px;
    gap: 3rem;

        .contentBanner{
            background-image: url(${lugarimagem});
            background-size: cover; 
            background-position: center center; 
            height: 100%;
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            border-radius: 100px;
            justify-content: center;
            box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.5); 

                h2{
                    margin-bottom: 400px;
                    width: 80%;
                    font-size: 2rem;
                    text-align: center;
                    color: transparent;
                    color: ${ColorPaint[0].black};
                    height: 15%;
                    display: flex;
                    justify-content: center;
                    align-items: center;

                    & span{
                        font-size: 2.5rem;
                        display: block;
                        margin: 0 10px;
                        color: ${ColorPaint[1].white};
                    }
                }    
        }

        

        @media only screen and (max-width: 480px){
    
            height: 25vh;
            padding: 8px 8px;

            .contentBanner {
                border-radius: 20px; 
                position: relative;

                h2 {
                    display: none;
                    font-size: 0.65rem; 
                    margin-bottom: 110px;


                    & span {
                        /* position: absolute; */
                        right: 43px;
                        bottom: 117px;
                        font-size: 0.9rem;
                        color : black;
                    }
                }    
            }
        }    

        @media only screen and (min-width: 480px) and (max-width: 768px){
            height: 40vh;
            padding: 8px 8px;

            .contentBanner {
                border-radius: 20px; 
                position: relative;

                h2 {
                    display: block;
                    font-size: 1rem; 
                    margin-bottom: 140px;


                    & span {
                        /* position: absolute; */
                        right: 43px;
                        bottom: 117px;
                        font-size: 1.3rem;
                        color : black;
                    }
                }    
            }
        }

        @media only screen and (min-width: 768px) and (max-width: 1024px){
            height: 45vh;
                    padding: 8px 8px;

                    .contentBanner {
                        border-radius: 20px; 
                        position: relative;

                        h2 {
                            display: block;
                            font-size: 1.5rem; 
                            margin-bottom: 180px;


                            & span {
                                /* position: absolute; */
                                right: 43px;
                                bottom: 117px;
                                font-size: 1.7rem;
                                color : black;
                            }
                        }    
                    }
                }   
        
        `;

export const Banner = () =>{
    return(
        <>
            <BannerContainer >
                <div className="contentBanner">
                    <h2>A melhor loja de Board Games especializada em <br/> 
                    <span>Catan.</span>
                    </h2>
                </div>
            </BannerContainer>
        </>
    )
}