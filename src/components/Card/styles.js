import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  padding: 16px;
  width: 100%;
  max-width: 300px;


  img {
    width: 80%;
    height: auto;
    margin-bottom: 16px;
  }

  p {
    font-size: 1.4rem;
    color: ${({ theme }) => theme.COLORS.GRAY};
    text-align: center;
  }

`;
