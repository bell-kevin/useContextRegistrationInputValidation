import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { UserContextProvider } from './context/userContext';

import HomeScreen from './screens/HomeScreen';
import NameScreen from './screens/NameScreen';
import PhoneScreen from './screens/PhoneScreen';
import EmailScreen from './screens/EmailScreen';
import ValidationScreen from './screens/ValidationScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
      <UserContextProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Registration"
          screenOptions={{
            headerTitleAlign: 'left',
            headerStyle: {
              backgroundColor: 'lightgrey',
            },
            headerTintColor: 'purple',
            headerTitleStyle: { fontWeight: 'bold', fontSize: 24 },
          }}
        >
          <Stack.Screen name="Registration" component={HomeScreen} options={{ headerShown: true }} />
          <Stack.Screen name="Name" component={NameScreen} />
          <Stack.Screen name="Phone" component={PhoneScreen} />
          <Stack.Screen name="Email" component={EmailScreen} />
          <Stack.Screen name="Validation" component={ValidationScreen} />
        </Stack.Navigator>
      </NavigationContainer>
      </UserContextProvider>
  );
}
