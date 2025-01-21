import React from "react";
import { SearchAndFilterContainer } from "./styles";

export function SearchAndFilter({ onSearch, onFilterChange }) {
  const handleSearchChange = (e) => {
    onSearch(e.target.value);
  };

  const handleFilterChange = (e) => {
    onFilterChange(e.target.value);
  };

  return (
    <SearchAndFilterContainer>
      <div className="input-container">
        <input
          type="text"
          placeholder="Buscar por nome"
          onChange={handleSearchChange}
        />
        <span className="search-icon">🔍</span>
      </div>

      <select onChange={handleFilterChange} defaultValue="">
        <option value="">Todos os tipos</option>
        <option value="Fire">Fogo</option>
        <option value="Water">Água</option>
        <option value="Grass">Grama</option>
        <option value="Electric">Elétrico</option>
        <option value="Psychic">Psíquico</option>
        {/* Adicione outros tipos de Pokémon aqui */}
      </select>
    </SearchAndFilterContainer>
  );
}
