type Card = {
  price: number,
  rating: number,
  images: string[],
  title: string,
  cardId: number,
  isFavorite: boolean
  isPremium: boolean,
  type: string,
  previewImage: string,
  location: Location,
  city: City,
  goods: string[],
  maxAdults: number,
  host: Host,
  description: string,
  bedrooms: number,
};

type CardProps = {
  card: Card
};

type CardsProps = {
  cards: Card[]
};

type CardsSectionMainPageProps = {
  cardsView: JSX.Element[]
};

type Location = {
  latitude: number
  longitude: number
  zoom: number
};

type City = {
  location: Location,
  name: string
};

type Host = {
  id: number,
  name: string,
  isPro: boolean,
  avatarUrl: string
};

export type { CardProps, CardsProps, CardsSectionMainPageProps, Card };
