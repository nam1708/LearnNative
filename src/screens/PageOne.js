import React from 'react';
import Ionicons from 'react-native-vector-icons/FontAwesome5';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TomTat from './TomTat';
import Duyet from './Duyet';
import { StyleSheet } from 'react-native';

const Tab = createBottomTabNavigator();

const PageOne = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#1a1a1a',
          paddingBottom: 4
        },
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Tóm tắt') {
            iconName = focused ? 'heart' : 'gratipay';
            size = focused ? 22 : 20;
          } else if (route.name === 'Duyệt') {
            iconName = 'align-justify';
            size = focused ? 22 : 20;
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#429afc',
        tabBarInactiveTintColor: '#808080',
      })}>
      <Tab.Screen
        name="Tóm tắt"
        component={TomTat}
      />
      <Tab.Screen name="Duyệt" component={Duyet} />
    </Tab.Navigator>
  )
};

export default PageOne;

