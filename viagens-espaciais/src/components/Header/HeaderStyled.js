import {styled} from "styled-components";
import { ColorPaint } from "../Styled/ColorPaint";

export const Cabecalho = styled.header`
    width: 100%;
    height: 12.05vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: linear-gradient(to bottom, ${ColorPaint[0].orange2}, ${ColorPaint[0].orange4});
    position: sticky;
    top: 0;
    z-index: 10;
    padding: 0 50px;
    box-shadow: 0px 1.5px 4px rgba(0, 0, 0, 0.5);

    @media only screen and (max-width: 480px){
        padding: 0 10px;
        justify-content: center;
        gap: 0.8rem;
        box-shadow: 0 1.5px 1.5px ${ColorPaint[0].black};
    }

    @media only screen and (min-width: 480px) and (max-width: 768px){
        box-shadow: 0 2.5px 2.5px ${ColorPaint[0].black};
    }

    @media only screen and (min-width: 768px) and (max-width: 1024px){
        box-shadow: 0 2.5px 2.5px ${ColorPaint[0].black};
    }
`;




