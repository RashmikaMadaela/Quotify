import { create } from 'zustand';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getRandomQuote, Quote } from '@/services/quoteService';

interface QuoteStore {
  currentQuote: Quote | null;
  favorites: Quote[];
  loading: boolean;
  fetchQuote: () => Promise<void>;
  addFavorite: (quote: Quote) => void;
  removeFavorite: (id: string) => void;
  loadFavorites: () => Promise<void>;
}

const FAVORITES_KEY = 'favorites';

export const useQuoteStore = create<QuoteStore>((set, get) => ({
  currentQuote: null,
  favorites: [],
  loading: false,
  fetchQuote: async () => {
    set({ loading: true });
    try {
      const quote = await getRandomQuote();
      set({ currentQuote: quote });
    } finally {
      set({ loading: false });
    }
  },
  addFavorite: (quote) => {
    const favorites = [...get().favorites, quote];
    set({ favorites });
    AsyncStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
  },
  removeFavorite: (id) => {
    const favorites = get().favorites.filter((q) => q._id !== id);
    set({ favorites });
    AsyncStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
  },
  loadFavorites: async () => {
    const data = await AsyncStorage.getItem(FAVORITES_KEY);
    if (data) set({ favorites: JSON.parse(data) });
  },
})); 