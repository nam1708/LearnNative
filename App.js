import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Tag from './src/components/Tag';
import PageOne from './src/screens/PageOne';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Buoc from './src/screens/Buoc';
import AmThanh from './src/screens/AmThanh';
import { StyleSheet, Text } from 'react-native';
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'

const Stack = createNativeStackNavigator();
const queryClient = new QueryClient()

const App = () => {
  const click = () => {
    console.log(1);
  }



  return (
    <NavigationContainer>
      <QueryClientProvider client={queryClient}>
        <Stack.Navigator>
          <Stack.Screen name="PageOne" component={PageOne} options={{ headerShown: false }} />
          <Stack.Screen name="Buoc" component={Buoc} options={{
            headerStyle: {
              backgroundColor: '#808080',
            },
            headerTintColor: 'white',
            headerRight: () => {
              return <Text onPress={click}
                style={{ color: 'white', fontSize: 19, fontWeight: '500' }}>
                Thêm dữ liệu
              </Text>
            },
          }} />
          <Stack.Screen name="AmThanh" component={AmThanh} />
        </Stack.Navigator>
      </QueryClientProvider>
    </NavigationContainer>
  );
};


export default App;

