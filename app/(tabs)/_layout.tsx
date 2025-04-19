import { Tabs } from 'expo-router';
import React from 'react';
import { Platform, Text } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Fontisto from '@expo/vector-icons/Fontisto';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { HapticTab } from '@/components/HapticTab';

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const insets = useSafeAreaInsets();

  const renderTabBarLabel = (label: string, focused: boolean) => (
    <Text style={{ color: focused ? '#000' : 'grey', fontSize: 12 }}>
      {label}
    </Text>
  );

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        tabBarButton: HapticTab,
        tabBarStyle: {
          position: 'absolute',
          backgroundColor: 'white',
          borderTopWidth: 0,
          elevation: 10,
          height: 60 + insets.bottom, // ensures space for iPhone safe area
          paddingBottom: insets.bottom,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarLabel: ({ focused }) => renderTabBarLabel('Home', focused),
          tabBarIcon: ({ focused }) => (
            <MaterialIcons name="home-filled" size={24} color={focused ? '#000' : 'grey'} />
          ),
        }}
      />
      <Tabs.Screen
        name="favourite"
        options={{
          tabBarLabel: ({ focused }) => renderTabBarLabel('Favourite', focused),
          tabBarIcon: ({ focused }) => (
            <MaterialIcons name="favorite" size={24} color={focused ? '#000' : 'grey'} />
          ),
        }}
      />
      <Tabs.Screen
        name="notification"
        options={{
          tabBarLabel: ({ focused }) => renderTabBarLabel('Notification', focused),
          tabBarIcon: ({ focused }) => (
            <Fontisto name="bell-alt" size={22} color={focused ? '#000' : 'grey'} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarLabel: ({ focused }) => renderTabBarLabel('Profile', focused),
          tabBarIcon: ({ focused }) => (
            <FontAwesome6 name="person" size={22} color={focused ? '#000' : 'grey'} />
          ),
        }}
      />
    </Tabs>
  );
}
