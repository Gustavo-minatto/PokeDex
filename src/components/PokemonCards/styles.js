import styled from 'styled-components';

export const CardGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  margin-top: 20px;
  padding: 20px;
`;

export const Pagination = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  margin-top: 20px;
  justify-content: center;

  button {
    padding: 8px 12px;
    font-size: 14px;
    cursor: pointer;
    border: 1px solid #ccc;
    border-radius: 4px;
    background-color: #f0f0f0;
    transition: background-color 0.3s;
  }
`;
