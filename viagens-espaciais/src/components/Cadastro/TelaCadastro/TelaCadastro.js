import { useState } from "react";
import { Form, FormContainer, Input, StyledLabel, SendButton, BackToLoginButton } from "./styled";

function TelaCadastro(props) {

  const cadastrarEndereco = () =>{
    if(nome !== ""){
      props.setPagina("TelaCadastroEndereco")

        const segundaTela = {
          Nome: nome,
          Email: email,
          Senha1: senha,
          Senha2: senha2
        }
        console.log(segundaTela);
      
    }else{
      alert("Faltando dados!")
    }
  
  }

  const [nome, setNome ] = useState("")
  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("");
  const [senha2, setSenha2] = useState("");

  const nomeImprimir = (event) =>{
    setNome(event.target.value)
  }

  const emailImprimir = (event) =>{
    setEmail(event.target.value)
  }

  const senhaImprimir = (event) =>{
    setSenha(event.target.value)
  }

  const senha2Imprimir = (event) =>{
    setSenha2(event.target.value)
  }

  const mostrarTelaLogin = () => {
    props.setPagina("TelaLogin")
  }

  return (
    <FormContainer>
      <h1>Cadastro </h1>

      <Form>
        <StyledLabel htmlFor="titulo">
          Nome:
          <Input 
          id="titulo" 
          value={nome}
          onChange={nomeImprimir}
          />
        </StyledLabel>

        <StyledLabel htmlFor="foto">
          E-mail:
          <Input 
          id="foto" 
          value={email}
          onChange={emailImprimir}
          />
        </StyledLabel>

        <StyledLabel htmlFor="descricao">
          Senha:
          <Input 
          id="descricao"
          value={senha}
          onChange={senhaImprimir}
          />
        </StyledLabel>

        <StyledLabel htmlFor="descricao">
          Confirmação da senha:
          <Input 
          id="descricao" 
          value={senha2}
          onChange={senha2Imprimir}
          />
        </StyledLabel>

        <SendButton onClick={cadastrarEndereco}>Cadastrar endereço</SendButton>

        <BackToLoginButton onClick={mostrarTelaLogin}>Já possuo cadastro</BackToLoginButton>
      </Form>
    </FormContainer>

  );
}

export default TelaCadastro;
