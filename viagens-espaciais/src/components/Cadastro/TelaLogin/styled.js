import styled from "styled-components";

export const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: calc(100vh - 12.3vh);
  width: 100vw;  
  overflow: hidden; 
  padding-bottom: 50px;

  h1 {
    margin: 32px;
  }

  @media (max-width: 480px) {
    margin-bottom: 0px;
    padding-bottom: 50px;
    height: calc(100vh - 12.3vh);
    h1 {
      margin: 24px;
    }
  }

  @media (min-width: 480px) and (max-width: 768px) {
    margin-bottom: 0px;
    height: calc(100vh - 12.3vh);
    padding-bottom: 50px;
    h1 {
      margin: 28px;
    }
  }
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  @media (max-width: 480px) {
    gap: 1rem;
    font-size: 0.8rem;
  }
`;

export const Input = styled.input`
  padding: 8px;
  margin-top: 12px;  
  margin-left: 16px;

  @media (max-width: 480px) {
    margin-left: 8px;
    margin-top: 5px;
    padding: 6px;
  }
`;

export const SendButton = styled.button`
  background-color: #ff9421;
  border-radius: 8px;
  padding: 16px;
  width: 200px;
  border: none;
  color: white;
  margin-top: 32px;
  cursor: pointer;
  font-weight: bold;

  @media (max-width: 480px) {
    width: 150px;
    padding: 12px;
    margin-top: 16px;
  }
`;

export const RegisterButton = styled.button`
  background-color: white;
  border-radius: 8px;
  cursor: pointer;
  width: 200px;
  padding: 10px;
  
  :hover {
    background-color: black;
    color: white;
  }

  @media (max-width: 480px) {
    width: 150px;
    padding: 8px;
  }
`;

export const StyledLabel = styled.label`
  width: 100%;
  max-width: 300px;
  display: flex;
  flex-direction: column;  
  align-items: flex-start; 

  & > span {
    margin-bottom: 8px;
  }

  ${Input} {
    margin-left: 0;  
    width: 100%; 
  }

  @media (max-width: 480px) {
    max-width: 240px;
    flex-direction: column;
    align-items: flex-start;

    & > span {
      margin-bottom: 8px; 
    }

    ${Input} {
      margin-left: 0;
      width: 100%; 
    }
  }
`;
