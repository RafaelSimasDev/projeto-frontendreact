import styled from "styled-components"

export const ProductCardPai = styled.div`
    border: 1px solid yellow;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.7rem;

        img{
            width: 100%;
            height: 70%;
        }

            div{
                border: 1px solid red;
                width: 100%;
                height: 15%;
                display: flex;
                flex-direction: column;
                gap: 0.5rem;
                justify-content: center;
                padding-left: 15px;
            }
`