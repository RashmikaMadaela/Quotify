import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { useQuoteStore } from '@/store/quoteStore';
import { Ionicons } from '@expo/vector-icons';
import { tw } from 'nativewind';

export default function FavoritesScreen() {
  const { favorites, removeFavorite } = useQuoteStore();

  return (
    <View style={tw`flex-1 bg-white dark:bg-black px-4 pt-8`}> 
      <Text style={tw`text-2xl font-bold text-center text-gray-900 dark:text-white mb-6`}>Favorites</Text>
      {favorites.length === 0 ? (
        <Text style={tw`text-center text-gray-500 dark:text-gray-400 mt-20`}>No favorite quotes yet.</Text>
      ) : (
        <FlatList
          data={favorites}
          keyExtractor={item => item._id}
          renderItem={({ item }) => (
            <View style={tw`bg-gray-100 dark:bg-gray-800 rounded-xl p-4 mb-4 shadow-md`}>
              <Text style={tw`text-lg text-gray-900 dark:text-white mb-2`}>
                "{item.content}"
              </Text>
              <View style={tw`flex-row justify-between items-center`}>
                <Text style={tw`text-base text-gray-700 dark:text-gray-300`}>— {item.author}</Text>
                <TouchableOpacity onPress={() => removeFavorite(item._id)}>
                  <Ionicons name="trash-outline" size={22} color="#ef4444" />
                </TouchableOpacity>
              </View>
            </View>
          )}
        />
      )}
    </View>
  );
} 