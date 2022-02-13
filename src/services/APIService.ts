import axios from 'axios';
import { Category, Joke, SearchJokeResponse } from '../interfaces';

const BASE_URL = 'https://api.chucknorris.io';

export default class APIService {
  public static async getRandomJoke(): Promise<Joke> {
    const url = `${BASE_URL}/jokes/random`;
    const response = await axios.get(url);
    const joke: Joke = response.data;

    return joke;
  }

  public static async getCategories(): Promise<Category[]> {
    const url = `${BASE_URL}/jokes/categories`;
    const response = await axios.get(url);
    const categories: Category[] = response.data;

    return categories;
  }

  public static async getJokeByCategory(category: Category): Promise<Joke> {
    const url = `${BASE_URL}/jokes/random?category=${category}`;
    const response = await axios.get(url);
    const joke: Joke = response.data;

    return joke;
  }

  public static async searchJokes(query: string): Promise<{ jokes: Joke[]; total: number }> {
    const url = `${BASE_URL}/jokes/search?query=${query}`;
    const response = await axios.get(url);
    const results: SearchJokeResponse = response.data;
    const jokes = results.result;

    return { jokes, total: results.total };
  }
}
