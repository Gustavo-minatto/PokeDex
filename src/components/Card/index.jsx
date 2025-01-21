/* eslint-disable react/prop-types */
import { Container } from "./styles";

export function Card({ image, title, types, rarity }) {
  return (
    <Container>
      <img src={image} alt={title} />
        <h2>{title}</h2>
        <p>Tipo {types.join(", ")}</p>
        <p>{rarity}</p>
    </Container>
  );
}
