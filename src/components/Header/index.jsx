import { Container } from './styles';
import pokemonLogo from '../../../public/pokemon.svg';

export function Header() {
  return (
    <Container>
      <img src={pokemonLogo} alt="Pokémon" />
      <p>Documentação</p>
    </Container>
  )
}