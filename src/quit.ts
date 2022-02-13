import chalk from 'chalk';

export function quitCLI(): void {
  console.log(chalk.white('Goodbye!'));
  process.exit(0);
}
