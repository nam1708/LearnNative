import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Tag from './src/components/Tag';
import HomePage from './src/screens/HomePage';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarStyle: {
            backgroundColor: '#1a1a1a',
          },
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = 'facebook';
              size = focused ? 25 : 20;
            } else if (route.name === 'Settings') {
              iconName = 'ios-information-circle';
              size = focused ? 25 : 20;
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#429afc',
          tabBarInactiveTintColor: '#808080',
        })}>
        <Tab.Screen
          name="Tóm tắt"
          component={HomePage}
        />
        <Tab.Screen name="Duyệt" component={Tag} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
