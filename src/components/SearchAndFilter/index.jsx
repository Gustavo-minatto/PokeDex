/* eslint-disable react/prop-types */
import { SearchAndFilterContainer } from "./styles";
import { FaMagnifyingGlass } from "react-icons/fa6";


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
        <span className="search-icon">
          <FaMagnifyingGlass />
        </span>
      </div>

      <div className="select-container">
         <p>Filtrar por:</p>
        <select onChange={handleFilterChange} defaultValue="">
          <option value=""></option>
          <option value="Fire">Fogo</option>
          <option value="Water">Água</option>
          <option value="Grass">Grama</option>
          <option value="Electric">Elétrico</option>
          <option value="Psychic">Psíquico</option>
        </select>
      </div>
    </SearchAndFilterContainer>
  );
}
