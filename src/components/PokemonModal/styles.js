import styled from "styled-components";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  background: white;
  border-radius: 10px;
  width: 90%;
  max-width: 600px;
  padding: 20px;
  position: relative;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    text-align: center;
    margin-bottom: 20px;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  svg{
    width: 40px;
    height: 40px;
  }
`;

export const PokemonImage = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;

  img {
    max-width: 100%;
    height: 200px;
    border-radius: 10px;
  }
`;

export const DetailsSection = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin: 20px;
  div {
    text-align: center;
  }

  h3 {
    margin-bottom: 5px;
  }
`;
