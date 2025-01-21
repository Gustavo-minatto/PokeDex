import styled from "styled-components";

export const SearchAndFilterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;

  input {
    width: 300px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 20px;
    outline: none;
    font-size: 1.4rem;
    background-color: #f9f9f9;
    display: flex;
    align-items: center;
    padding-right: 40px;
    position: relative;
  }

  input::placeholder {
    color: #aaa;
    font-style: italic;
  }

  .input-container {
    position: relative;
    display: inline-block;
  }

  .search-icon {
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
    color: #aaa;
    cursor: pointer;
  }

  select {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 1.4rem;
    background-color: #e0e0e0;
  }
`;
