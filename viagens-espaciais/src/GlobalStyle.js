import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const GlobalStyle = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    /* width: 100vw;
    height: 100vh; */
    list-style: none;
    font-family: 'Poppins', sans-serif;
    /* background: blue; */
  }

  html{
    scroll-behavior: smooth;
  }
`;

export const FontStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,800;1,400;1,600;1,700&display=swap');

`;


export const Body = styled.div`
    border: 1px solid red;
    display: flex;
    width: 100vw;
    height: 100vh;
    padding: 1% 1%;
    font-family: 'Poppins', sans-serif;
    /* background-color: rgb(183, 223, 255); */
`