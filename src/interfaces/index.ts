export interface Joke {
  icon_url: string;
  id: string;
  url: string;
  value: string;
}

export type Category =
  | 'animal'
  | 'career'
  | 'celebrity'
  | 'dev'
  | 'explicit'
  | 'fashion'
  | 'food'
  | 'history'
  | 'money'
  | 'movie'
  | 'music'
  | 'political'
  | 'religion'
  | 'science'
  | 'sport'
  | 'travel';

export interface SearchJokeResponse {
  total: number;
  result: Joke[];
}

export type Action = 'Get a random joke' | 'Get jokes by category' | 'Search jokes' | 'Quit CLI';
