import React, { useState } from 'react'
import { Form, FormContainer, Input, StyledLabel, SendButton} from "./styled";

const TelaCadastroEndereco = (props) => {

    const cadastrar = () => {
        
        props.setPagina("Home")
        const terceiraTela = {
            Endereço: endereco,
            Número: numero,
            Complemento: complemento,
            Telefone: telefone
        }
        console.log(terceiraTela);
      }

      const [endereco, setEndereco] = useState("")
      const [numero, setNumero] = useState("")
      const [complemento, setComplemento] = useState("")
      const [telefone, setTelefone] = useState("")

      const funcaoEndereco = (e) =>{
        setEndereco(e.target.value)
      }

      const funcaoNumero = (e) =>{
        setNumero(e.target.value)
      }

      const funcaoComplemento = (e) =>{
        setComplemento(e.target.value)
      }

      const funcaoTelefone = (e) =>{
        setTelefone(e.target.value)
      }
    

  return (
    <FormContainer>
        <h1>Cadastrar Endereço</h1>

        <Form>
            <StyledLabel htmlFor="endereco">
                Endereço:
                <Input type="text" id='endereco' placeholder='Digite sua rua'
                value={endereco}
                onChange={funcaoEndereco}
                />
            </StyledLabel>

            <StyledLabel htmlFor="numero">
                Número:
                <Input type="text" id='numero'placeholder='Digite seu número'
                value={numero}
                onChange={funcaoNumero}
                />
            </StyledLabel>

            <StyledLabel htmlFor="complemento">
                Complemento:
                <Input type="text" id='complemento'placeholder='Digite seu complemento'
                value={complemento}
                onChange={funcaoComplemento}
                />
            </StyledLabel>

            <StyledLabel htmlFor="telefone">
                Telefone:
                <Input type="text" id='telefone' placeholder='(000) 0000 - 0000'
                value={telefone}
                onChange={funcaoTelefone}
                />
            </StyledLabel>

            <SendButton onClick={cadastrar}>confirmar cadastro</SendButton>
            
        </Form>
    </FormContainer>
  )
}

export default TelaCadastroEndereco