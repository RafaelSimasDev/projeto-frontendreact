import { useState } from "react";
import { Form, FormContainer, Input, SendButton, StyledLabel, RegisterButton } from "./styled";

function TelaLogin(props) {
  const login = () => {
    if(email !== ""){
      props.setPagina("Home")
    
      const primeiraTela = {
       email: email, 
       senha: senha
     }
 
     console.log(primeiraTela);
    }else{
      alert("Faltando dados!")
    }
    
  }


  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")

  const emailImprimir = (event) =>{
    setEmail(event.target.value)
  }

  const senhaImprimir = (event) =>{
    setSenha(event.target.value)
  }



  const mostrarTelaCadastro = () => {
    props.setPagina("TelaCadastro")
  }

  return (
    <FormContainer >
      <h1>LOGIN</h1>

      <Form>
        <StyledLabel>E-mail:
          
          <Input type="text" value={email}  onChange={emailImprimir}/>
        </StyledLabel>

        <StyledLabel>Senha:
          <Input type={"password"} value={senha} onChange={senhaImprimir}/>
        </StyledLabel>

        <SendButton onClick={login}>Entrar</SendButton>

        <RegisterButton onClick={mostrarTelaCadastro}>Cadastre-se</RegisterButton>
      </Form>
    </FormContainer>
  );
}

export default TelaLogin;
