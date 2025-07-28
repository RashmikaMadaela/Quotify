// File: app/(tabs)/_layout.js

import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false, // Hides the header for all tabs
        tabBarActiveTintColor: '#1E40AF', // Blue color for the active icon
        tabBarInactiveTintColor: '#6B7280', // Gray color for inactive icons
        tabBarStyle: {
          backgroundColor: '#FFFFFF',
        },
      }}
    >
      <Tabs.Screen
        name="index" // This is the file name of the home screen
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => (
            <Ionicons name="home" size={28} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="favorites" // This is the file name of the favorites screen
        options={{
          title: 'Favorites',
          tabBarIcon: ({ color }) => (
            <Ionicons name="heart" size={28} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}