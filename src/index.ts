#!/usr/bin/env node

import chalk from 'chalk';
import inquirer, { Answers } from 'inquirer';
import { ACTIONS } from './actions';
import { jokesByCategory } from './category';
import { Joke, Action } from './interfaces';
import { quitCLI } from './quit';
import { randomJoke } from './random';
import { searchJokes } from './search';

export async function showMenu() {
  const answer: { action: Action } = await inquirer.prompt([
    {
      type: 'list',
      name: 'action',
      message: 'What do you want to do?',
      choices: [
        'Get a random joke',
        'Get jokes by category',
        'Search jokes',
        new inquirer.Separator(),
        'Quit CLI',
      ],
    },
  ]);

  switch (answer.action) {
    case ACTIONS.RANDOM:
      await randomJoke();
      break;

    case ACTIONS.CATEGORY:
      await jokesByCategory();
      break;

    case ACTIONS.SEARCH:
      await searchJokes();
      break;

    case ACTIONS.QUIT:
      quitCLI();
      break;
  }
}

showMenu();
