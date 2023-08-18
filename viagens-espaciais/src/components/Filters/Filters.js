import React from 'react'
import  {DivFilter, Form} from "./FiltersStyle"

const Filters = () => {
  return (
    <DivFilter>
      
        <Form>
          <label>
            Filtro Mínimo:
            <br/>
            <input/>
          </label>

          <label>
            Filtro Máximo:
            <br/>
            <input/>
          </label>

          <label>
            Buscar por nomes:
            <br/>
            <input/>
          </label>
          
        </Form>
    </DivFilter>
  )
}

export default Filters