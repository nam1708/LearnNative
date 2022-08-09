import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import NewScreen from './screens/NewScreen'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MusicScreen from './screens/MusicScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FoodScreen from './screens/FoodScreen';
import SettingScreen from './screens/SettingScreen';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
    return (
        <Tab.Navigator screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                if (route.name === 'Tin Mới') {
                    iconName = focused
                        ? 'newspaper'
                        : 'newspaper-outline';
                } else if (route.name === 'Âm nhạc') {
                    iconName = focused ? 'musical-notes' : 'musical-notes-outline';
                } else if (route.name === 'Ẩm Thực') {
                    iconName = focused ? 'fast-food' : 'fast-food-outline';
                }
                else if (route.name === 'Cài Đặt') {
                    iconName = focused ? 'settings' : 'settings-outline';
                }

                // You can return any component that you like here!
                return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: '#1e90ff',
            tabBarInactiveTintColor: 'gray',
        })}>
            <Tab.Screen name="Tin Mới" component={NewScreen} />
            <Tab.Screen name="Âm nhạc" component={MusicScreen} />
            <Tab.Screen name="Ẩm Thực" component={FoodScreen} />
            <Tab.Screen name="Cài Đặt" component={SettingScreen} />
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({})