import { View, Text } from 'react-native';

export default function TopBar() {
  return (
    /* Part F Task 1 & 2: Custom App Name and Emerald color theme */
    <View className="flex-row items-center justify-between bg-emerald-600 px-4 py-3">
      <Text className="text-xl font-bold text-white">Kim's App</Text>
      <Text className="text-xl text-white">☰</Text>
    </View>
  );
}

