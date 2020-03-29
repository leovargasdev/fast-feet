import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {useSelector} from 'react-redux';
import SignIn from '~/pages/SignIn';

import App from '~/routes/App';

const Stack = createStackNavigator();

export default function Index() {
  const signed = useSelector(state => state.auth.signed);

  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        {signed === true ? (
          <Stack.Screen name="App" component={App} />
        ) : (
          <>
            <Stack.Screen name="SignIn" component={SignIn} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
