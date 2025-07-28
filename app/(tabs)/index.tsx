import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator, Share } from 'react-native';
import { useQuoteStore } from '@/store/quoteStore';
import { Ionicons } from '@expo/vector-icons';
import { tw } from 'nativewind';

export default function HomeScreen() {
  const {
    currentQuote,
    favorites,
    loading,
    fetchQuote,
    addFavorite,
    removeFavorite,
    loadFavorites,
  } = useQuoteStore();

  useEffect(() => {
    fetchQuote();
    loadFavorites();
  }, []);

  const isFavorite = currentQuote && favorites.some(q => q._id === currentQuote._id);

  const handleFavorite = () => {
    if (!currentQuote) return;
    if (isFavorite) {
      removeFavorite(currentQuote._id);
    } else {
      addFavorite(currentQuote);
    }
  };

  const handleShare = async () => {
    if (!currentQuote) return;
    await Share.share({
      message: `"${currentQuote.content}" — ${currentQuote.author}`,
    });
  };

  return (
    <View style={tw`flex-1 justify-center items-center bg-white dark:bg-black px-4`}> 
      {loading || !currentQuote ? (
        <ActivityIndicator size="large" color="#6366f1" />
      ) : (
        <View style={tw`w-full max-w-md bg-gray-100 dark:bg-gray-800 rounded-xl p-6 shadow-lg items-center`}>
          <Text style={tw`text-xl font-semibold text-center text-gray-900 dark:text-white mb-4`}>"{currentQuote.content}"</Text>
          <Text style={tw`text-lg text-right w-full text-gray-700 dark:text-gray-300 mb-6`}>— {currentQuote.author}</Text>
          <View style={tw`flex-row justify-center gap-6`}>
            <TouchableOpacity onPress={handleFavorite} style={tw`p-2`}>
              <Ionicons name={isFavorite ? 'heart' : 'heart-outline'} size={28} color={isFavorite ? '#ef4444' : '#64748b'} />
            </TouchableOpacity>
            <TouchableOpacity onPress={handleShare} style={tw`p-2`}>
              <Ionicons name="share-social-outline" size={28} color="#6366f1" />
            </TouchableOpacity>
            <TouchableOpacity onPress={fetchQuote} style={tw`p-2`}>
              <Ionicons name="refresh" size={28} color="#22c55e" />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
}
