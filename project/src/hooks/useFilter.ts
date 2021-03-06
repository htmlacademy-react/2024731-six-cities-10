import { useEffect, useState } from 'react';

import type { CardsProps } from '../types/types';
import { useAppSelector } from '../hooks';
import { getFilteredCards } from '../utils/filters';

function useFilter({ cards }: CardsProps) {
  const [currentCards, setCards] = useState([...cards]);
  const filter = useAppSelector((state) => state.filter);
  const currentCity = useAppSelector((state) => state.name);

  useEffect(() => {
    setCards([...cards]);
  }, [cards]);

  useEffect(() => {
    const filteredCards = getFilteredCards(filter, { cards });
    setCards([...filteredCards]);
  }, [filter]);

  return currentCards.filter((card) => card.city.name === currentCity);
}

export { useFilter };
