import { useEffect, useState } from "react";
import { CardGrid, Pagination } from "./styles";
import { Card } from "../../components/Card";
import { SearchAndFilter } from "../../components/SearchAndFilter";
import { PokemonModal } from "../../components/PokemonModal";
import axios from "axios";

export function PokemonCards() {
  const [allCards, setAllCards] = useState([]);
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("");
  const [isFiltered, setIsFiltered] = useState(false);

  const [selectedCard, setSelectedCard] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const fetchCards = async (pageNumber, loadAll = false) => {
    try {
      setLoading(true);
      const response = await axios.get(
        `https://api.pokemontcg.io/v2/cards?pageSize=${loadAll ? 1000 : 20}&page=${pageNumber}`,
        {
          headers: {
            "X-Api-Key": "YOUR_API_KEY_HERE",
          },
        }
      );

      const sortedCards = response.data.data.sort((a, b) => {
        const aPokedex = a.nationalPokedexNumbers?.[0] || Infinity;
        const bPokedex = b.nationalPokedexNumbers?.[0] || Infinity;
        return aPokedex - bPokedex;
      });

      if (loadAll) {
        setAllCards(sortedCards);
        setCards(sortedCards);
      } else {
        setAllCards([]);
        setCards(sortedCards);
        setTotalPages(Math.ceil(response.data.totalCount / 20));
      }
    } catch (error) {
      console.error("Erro ao buscar cartas:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCards(page, isFiltered);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [page, isFiltered]);

  const handleSearch = (term) => {
    setSearchTerm(term);
    setIsFiltered(term !== "" || filter !== "");

    if (term === "") {
      fetchCards(1, false);
      setPage(1);
    } else {
      const filteredCards = allCards.filter((card) =>
        card.name.toLowerCase().includes(term.toLowerCase())
      );
      setCards(filteredCards);
    }
  };

  const handleFilterChange = (selectedFilter) => {
    setFilter(selectedFilter);
    setIsFiltered(selectedFilter !== "" || searchTerm !== "");

    if (selectedFilter === "") {
      fetchCards(1, false);
      setPage(1);
    } else {
      let filteredCards = allCards.filter((card) =>
        card.types && card.types.includes(selectedFilter)
      );

      if (searchTerm !== "") {
        filteredCards = filteredCards.filter((card) =>
          card.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
      }

      setCards(filteredCards);
    }
  };

  const handleNextPage = () => {
    if (page < totalPages) {
      setLoading(true);
      setPage(page + 1);
    }
  };

  const handlePrevPage = () => {
    if (page > 1) {
      setLoading(true);
      setPage(page - 1);
    }
  };

  const handleCardClick = (card) => {
    setSelectedCard({
      name: card.name,
      image: card.images.large || card.images.small,
      types: card.types,
      level: card.level,
      hp: card.hp,
      subtypes: card.subtypes,
      description: card.flavorText || card.text || "Descrição não disponível",
    });
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <SearchAndFilter onSearch={handleSearch} onFilterChange={handleFilterChange} />

      <CardGrid>
        {loading ? (
          <p>Carregando cartas...</p>
        ) : (
          cards.map((card) => (
            <Card
              key={card.id}
              image={card.images.small}
              title={card.name}
              types={card.types}
              rarity={card.rarity}
              onClick={() => handleCardClick(card)}
              pokedexNumber={card.nationalPokedexNumbers ? card.nationalPokedexNumbers[0] : null}
            />
          ))
        )}
      </CardGrid>

      {!isFiltered && (
        <Pagination>
          <button onClick={handlePrevPage} disabled={page === 1 || loading}>
            Anterior
          </button>

          <button onClick={handleNextPage} disabled={page === totalPages || loading}>
            Próximo
          </button>
        </Pagination>
      )}

      {isModalOpen && (
        <PokemonModal
          isOpen={isModalOpen}
          pokemon={selectedCard}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
}
