import { useEffect, useState } from "react";
import { CardGrid, Pagination } from "./styles";
import { Card } from "../../components/Card";
import { SearchAndFilter } from "../../components/SearchAndFilter";
import axios from "axios";

export function PokemonCards() {
  const [allCards, setAllCards] = useState([]);
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("");

  const fetchCards = async (pageNumber) => {
    try {
      setLoading(true);
      const response = await axios.get(
        `https://api.pokemontcg.io/v2/cards?pageSize=20&page=${pageNumber}`,
        {
          headers: {
            "X-Api-Key": "YOUR_API_KEY_HERE",
          },
        }
      );
      setAllCards(response.data.data);
      setCards(response.data.data);
      setTotalPages(Math.ceil(response.data.totalCount / 20));
    } catch (error) {
      console.error("Erro ao buscar cartas:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCards(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [page]);

  const handleSearch = (term) => {
    setSearchTerm(term);

    if (term === "") {
      setCards(allCards);
    } else {
      const filteredCards = allCards.filter((card) =>
        card.name.toLowerCase().includes(term.toLowerCase())
      );
      setCards(filteredCards);
    }
  };

  const handleFilterChange = (selectedFilter) => {
    setFilter(selectedFilter);

    let filteredCards = allCards;

    if (selectedFilter !== "") {
      filteredCards = filteredCards.filter((card) =>
        card.types && card.types.includes(selectedFilter)
      );
    }

    if (searchTerm !== "") {
      filteredCards = filteredCards.filter((card) =>
        card.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setCards(filteredCards);
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
            />
          ))
        )}
      </CardGrid>

      <Pagination>
        <button onClick={handlePrevPage} disabled={page === 1 || loading}>
          Anterior
        </button>

        <button onClick={handleNextPage} disabled={page === totalPages || loading}>
          Próximo
        </button>
      </Pagination>
    </div>
  );
}
