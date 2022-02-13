import { Action } from './interfaces';

export const ACTIONS: {
  RANDOM: Action;
  CATEGORY: Action;
  SEARCH: Action;
  QUIT: Action;
} = {
  RANDOM: 'Get a random joke',
  CATEGORY: 'Get jokes by category',
  SEARCH: 'Search jokes',
  QUIT: 'Quit CLI',
};
