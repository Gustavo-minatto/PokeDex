import styled from "styled-components";

export const SearchAndFilterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;

  flex-wrap: wrap;

  .input-container {
    position: relative;
    display: inline-block;
    width: 100%;
    max-width: 300px;
  }

  input {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 20px;
    outline: none;
    font-size: 1.4rem;
    background-color: #f9f9f9;
    display: flex;
    align-items: center;
    padding-right: 40px;
  }

  input::placeholder {
    color: #aaa;
    font-style: italic;
  }

  .search-icon {
    position: absolute;
    top: 50%;
    right: 15px;
    transform: translateY(-50%);
    color: #aaa;
    cursor: pointer;
  }

  .select-container{
    display: flex;
    align-items: center;
  }
  
  p{
    margin-right: 10px;
  }

  select {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 1.4rem;
    background-color: #e0e0e0;
    width: 300px;
  }

  @media (max-width: 768px) {
    padding: 10px;
    select{
      width: 200px;
    }
  } 
`;
