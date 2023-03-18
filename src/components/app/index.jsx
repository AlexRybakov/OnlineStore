
import { Header } from "../header/header";
import { Sort } from "../sort/sort";
import { Footer } from "../footer/footer"
import { CardList } from "../card-list/card-list";
import "./styles.css";
import { useEffect, useState } from "react";
import { dataCard } from '../../dats';
import { Logo } from "../logo/logo";
import { Search } from "../search/search";

export function App() {
  const [cards, setCards] = useState(dataCard);
  const [searchQuery, setSearchQuery] = useState("");

  function handleRequest() {
    const filterCards = dataCard.filter((item) =>
      item.name.includes(searchQuery)
    );
    setCards(filterCards);
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    handleRequest();
  }

  function handleInputChange(dataInput) {
    setSearchQuery(dataInput);
  }

  useEffect(() => {
    handleRequest();
  }, [searchQuery]);

  return (
    <>
      <Header>
        <Logo />
        <Search
          handleFormSubmit={handleFormSubmit}
          handleInputChange={handleInputChange}
        />
      </Header>
      <main className="content container">
        <Sort />
        <CardList goods={cards} />
      </main>
      <Footer />
    </>
  );
}

