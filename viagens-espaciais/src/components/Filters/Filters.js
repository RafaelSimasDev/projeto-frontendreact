import React from 'react'
import { useState } from "react";
import  {DivFilter, Form} from "./FiltersStyle"

const Filters = (props) => {
  return (
    <DivFilter>
      
        <Form>
          <label>
            Filtro Mínimo:
            <br/>
            <input 
            value={props.minFilter}
            onChange={props.functionMinFilter}
            
            />
          </label>

          <label>
            Filtro Máximo:
            <br/>
            <input
            value={props.maxFilter}
            onChange={props.functionMaxFilter}
            />
          </label>

          <label>
            Buscar por nomes:
            <br/>
            <input
            value={props.searchFilter}
            onChange={props.functionSearch}
            />
          </label>
          
        </Form>
    </DivFilter>
  )
}

export default Filters