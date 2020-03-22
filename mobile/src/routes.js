import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="TESTE" component={SignIn} />
        <Stack.Screen name="PERDI" component={SignUp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
