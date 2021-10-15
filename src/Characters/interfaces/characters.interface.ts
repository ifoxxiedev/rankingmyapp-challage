export interface ICharacterResultLocator {
  name: string;
  url: string;
}

export interface ICharacterResult {
  id: number;
  name: string;
  status: string;
  type?: string;
  gender: string;
  image: string;
  origin: ICharacterResultLocator;
  location: ICharacterResultLocator;
  episode: string[];
  url: string;
  created: Date;
}

export interface ICharacter {
  results: Array<ICharacterResult>;
}
