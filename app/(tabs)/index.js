// File: app/(tabs)/index.js

import { View, Text, SafeAreaView } from 'react-native';

export default function HomeScreen() {
  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-white">
      <View className="p-8">
        <Text className="text-3xl font-bold text-center text-gray-800">
          Home Screen
        </Text>
        <Text className="text-lg text-center text-gray-600 mt-4">
          The quote will appear here soon!
        </Text>
      </View>
    </SafeAreaView>
  );
}