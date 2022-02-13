import chalk from 'chalk';
import inquirer from 'inquirer';
import { showMenu } from '.';
import { Category } from './interfaces';
import APIService from './services/APIService';

export async function jokesByCategory(): Promise<void> {
  const categories: Category[] = await APIService.getCategories();
  const answer: { category: Category } = await inquirer.prompt([
    {
      type: 'list',
      message: 'Select a category',
      name: 'category',
      choices: categories.map((category) => ({ name: category })),
    },
  ]);

  const joke = await APIService.getJokeByCategory(answer.category);

  console.log(chalk.white(`\n"${joke.value}"\n`));

  showMenu();
}
