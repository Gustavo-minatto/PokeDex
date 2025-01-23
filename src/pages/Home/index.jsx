import { Container } from "./styles";
import { Header } from "../../components/Header";
import { PokemonCards } from "../../components/PokemonCards";

export function Home() {
  return (
    <Container>
      <Header />
      <PokemonCards />
    </Container>
  );
}
