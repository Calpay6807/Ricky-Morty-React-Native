interface ICharacter {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {};
  location: {};
  image: string;
  episode: [];
  url: string;
  created: string;
}
interface ICardCharacterPops {
  item: ICharacter;
  index: number;
}
export type {ICharacter, ICardCharacterPops};
