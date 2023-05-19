import { cardDetailTypes } from '../../components/type';

export interface RootState {
  authentication: {
    result: boolean;
    token: string;
    email: string;
    password: string;
  };
  cards: cardDetailTypes[];
}
