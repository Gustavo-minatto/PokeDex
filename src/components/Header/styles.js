import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2); 
  height: 145px;

  p {
    color: ${({ theme }) => theme.COLORS.GRAY};
  }
`;
