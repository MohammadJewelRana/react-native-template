import { View, Text, FlatList } from 'react-native';
import React from 'react';

const sampleData = [
  { id: '1', title: 'Your Tasks: 5 Pending' },
  { id: '2', title: 'New Messages: 2' },
  { id: '3', title: 'Appointments Today: 1' },
];

const HomeScreen = () => {
  return (
    <View className="flex-1 bg-slate-50 pt-12 px-5">
      <Text className="text-3xl font-bold text-blue-800 mb-2">🌞 Good Morning!</Text>
      <Text className="text-base text-slate-700 mb-4">Here’s your overview for today:</Text>

      <FlatList
        data={sampleData}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 20 }}
        renderItem={({ item }) => (
          <View className="bg-blue-100 p-4 rounded-lg mb-3">
            <Text className="text-blue-700 text-base">{item.title}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default HomeScreen;
