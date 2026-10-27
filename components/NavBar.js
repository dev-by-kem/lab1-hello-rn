import { View, Text, Pressable } from 'react-native';

function NavItem({ icon, label, isSelected }) {
  return (
    <Pressable className="flex-1 items-center py-2 active:opacity-80">
      <Text className="text-xl">{icon}</Text>
      <Text
        className={`text-xs mt-1 ${
          isSelected ? 'text-emerald-600 font-bold' : 'text-slate-500'
        }`}
      >
        {label}
      </Text>
    </Pressable>
  );
}

export default function NavBar() {
  return (
    /* Part F Task 5 & 7: 4 items (Settings with ⚙️) & Search/Profile selected */
    <View className="flex-row border-t border-slate-200 bg-white">
      <NavItem icon="🏠" label="Home" isSelected={false} />
      <NavItem icon="🔍" label="Search" isSelected={false} />
      <NavItem icon="👤" label="Profile" isSelected={true} />
      <NavItem icon="⚙️" label="Settings" isSelected={false} />
    </View>
  );
}

