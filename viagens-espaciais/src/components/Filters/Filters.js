import React from 'react';
import FiltroDiv from './FiltersStyle'; 

function Filter({ minPrice, maxPrice, setMinPrice, setMaxPrice, searchTerm, handleSearchChange, selectedType, setSelectedType, filterProducts })  {
  return (
    <FiltroDiv>
      <h2 className="text-center">Filtrar por:</h2>
      <form>
        <label htmlFor="minPreco">
          Preço mínimo:
          <input type="number" value={minPrice} onChange={(e) => setMinPrice(e.target.value)} placeholder="Valor mínimo" />
        </label>

        <label htmlFor="maxPreco">
          Preço máximo:
          <input type="number" value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)} placeholder="Valor máximo" />
        </label>

        <label htmlFor="">
            Busca:
            <input 
              type="text" 
              value={searchTerm} 
              onChange={handleSearchChange} 
              placeholder="Buscar por nome"
            />
        </label>
      </form>

      <select 
          value={selectedType}
          onChange={(e) => {
              setSelectedType(e.target.value);
              filterProducts();
          }}
         >
          <option value="Selecione">Selecione</option>
          <option value="Tabuleiro">Tabuleiro</option>
          <option value="Cartas">Cartas</option>
          <option value="Peças">Peças</option>
      </select>

    </FiltroDiv>
  );
}

export default Filter;
