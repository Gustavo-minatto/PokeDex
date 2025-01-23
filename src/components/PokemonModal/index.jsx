/* eslint-disable react/prop-types */
import { ModalOverlay, ModalContent, CloseButton, PokemonImage, DetailsSection } from "./styles";
import { IoMdClose } from "react-icons/io";

export const PokemonModal = ({ isOpen, onClose, pokemon }) => {
  if (!isOpen || !pokemon) return null;

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>
          <IoMdClose />
        </CloseButton>
        <h1>{pokemon.name}</h1>
        <PokemonImage>
          <img src={pokemon.image} alt={pokemon.name} />
        </PokemonImage>
        <div>
          {pokemon.types?.map((type) => (
            <span key={type}>{type}</span>
          ))}
        </div>
        <DetailsSection>
          <div>
            <h3>Level</h3>
            <p>{pokemon.level || "N/A"}</p>
          </div>
          <div>
            <h3>HP</h3>
            <p>{pokemon.hp || "N/A"}</p>
          </div>
          <div>
            <h3>Subtipos</h3>
            <p>{pokemon.subtypes?.join(", ") || "N/A"}</p>
          </div>
        </DetailsSection>
        <p>{pokemon.description}</p>
      </ModalContent>
    </ModalOverlay>
  );
};
