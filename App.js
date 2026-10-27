import './global.css';
import { Text, Pressable, ScrollView } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import TopBar from './components/TopBar';
import NavBar from './components/NavBar';

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView className="flex-1 bg-white">
        {/* Top Navigation Bar */}
        <TopBar />

        {/* Content Area */}
        <ScrollView className="flex-1" contentContainerClassName="p-4">
          {/* Part F Task 6: Centered heading */}
          <Text className="text-2xl font-bold text-slate-800 text-center">
            Hello, World!
          </Text>

          {/* Part F Task 3 & 6: Description about yourself & centered text */}
          <Text className="text-base text-slate-600 mt-2 text-center">
            Hi! I am Kim, a 3rd Year BS Information Technology student. My hobby is playing video games and exploring mobile development.
          </Text>

          {/* Part F Task 2: Primary Button in Emerald */}
          <Pressable className="bg-emerald-600 rounded-lg py-3 items-center mt-6 active:opacity-80">
            <Text className="text-white font-semibold">Get Started</Text>
          </Pressable>

          {/* Secondary Button */}
          <Pressable className="border border-emerald-600 rounded-lg py-3 items-center mt-3 active:opacity-80">
            <Text className="text-emerald-600 font-semibold">Learn More</Text>
          </Pressable>

          {/* Part F Task 4: Third button with red style */}
          <Pressable className="bg-red-500 rounded-lg py-3 items-center mt-3 active:opacity-80">
            <Text className="text-white font-semibold">Delete Account</Text>
          </Pressable>
        </ScrollView>

        {/* Bottom Navigation Bar */}
        <NavBar />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
