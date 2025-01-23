/* eslint-disable react/prop-types */
import { Container } from "./styles";

export function Card({ image, title, types, rarity, onClick, pokedexNumber }) {
  return (
    <Container onClick={onClick}>
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p>Tipo: {types.join(", ")}</p>
      <p>Raridade: {rarity}</p>
      {pokedexNumber && <p>Pokédex Nº: {pokedexNumber}</p>}
    </Container>
  );
}
