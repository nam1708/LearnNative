import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Appearance } from 'react-native';
import { QueryClient, QueryClientProvider } from 'react-query';
import ContentScreen from './screens/ContentScreen';
import TabNavigator from './TabNavigator';


const Stack = createNativeStackNavigator();
const queryClient = new QueryClient()


const App = () => {

  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Tab" component={TabNavigator} options={{ headerShown: false }} />
          <Stack.Screen name="Content" component={ContentScreen} options={{ title: 'Bài Báo' }} />
        </Stack.Navigator>
      </NavigationContainer>
    </QueryClientProvider>
  );
};


export default App;

