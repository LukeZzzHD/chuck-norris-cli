import chalk from 'chalk';
import { showMenu } from '.';
import { Joke } from './interfaces';
import APIService from './services/APIService';

export async function randomJoke(): Promise<void> {
  const randomJoke: Joke = await APIService.getRandomJoke();
  console.log(chalk.white(`\n"${randomJoke.value}"\n`));

  showMenu();
}
