export interface cardDetailTypes {
  id: number;
  title: string;
  poster: string;
  year: string;
  country: string;
  imdb_rating: string;
  genres: string[];
  images: string[];
}
export interface cardPropsType {
  choseCard: number;
  setChoseCard: React.Dispatch<React.SetStateAction<any>>;
  cardDetail: cardDetailTypes;
}
