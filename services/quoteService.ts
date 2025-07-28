import axios from 'axios';

export interface Quote {
  _id: string;
  content: string;
  author: string;
}

const API_URL = 'https://api.quotable.io/random';

export async function getRandomQuote(): Promise<Quote> {
  const response = await axios.get(API_URL);
  return response.data;
} 