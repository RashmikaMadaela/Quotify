// File: app/(tabs)/favorites.js

import { View, Text, SafeAreaView } from 'react-native';

export default function FavoritesScreen() {
  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-gray-100">
      <View>
        <Text className="text-3xl font-bold text-gray-800">
          Favorites
        </Text>
      </View>
    </SafeAreaView>
  );
}