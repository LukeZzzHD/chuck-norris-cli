import chalk from 'chalk';
import inquirer from 'inquirer';
import { showMenu } from '.';
import APIService from './services/APIService';

export async function searchJokes(): Promise<void> {
  const answer: { query: string } = await inquirer.prompt([
    {
      type: 'input',
      name: 'query',
      message: 'Search: ',
    },
  ]);

  const { jokes, total } = await APIService.searchJokes(answer.query);
  let index = 0;

  if (total > 0) {
    console.log(chalk.white(`Found ${total} joke${total > 1 ? 's' : ''}`));
    while (index < total) {
      const joke = jokes[index];
      console.log(chalk.white(`\nJoke ${index + 1}/${total}\n\n"${joke.value}"\n`));

      const answer: { action: string } = await inquirer.prompt([
        {
          type: 'list',
          name: 'action',
          message: 'What now?',
          choices: [...(index + 1 < total ? ['Next'] : []), 'Back'],
        },
      ]);

      if (answer.action === 'Back') {
        break;
      }
      if (answer.action === 'Next') {
        index++;
      }
    }
  } else {
    console.log(chalk.red(`No jokes found for search: "${answer.query}"`));
  }

  showMenu();
}
