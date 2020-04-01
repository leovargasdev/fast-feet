import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Dashboard from '~/pages/Dashboard';
import Details from '~/pages/Delivery/Details';
import Confirm from '~/pages/Delivery/Confirm';
import NewProblem from '~/pages/Delivery/NewProblem';
import ViewProblems from '~/pages/Delivery/ViewProblems';

const Stack = createStackNavigator();

export default function Delivery() {
  return (
    <Stack.Navigator
      headerMode="screen"
      screenOptions={{
        headerBackTitleVisible: false,
        headerTitleAlign: 'center',
        headerTintColor: '#FFF',
        headerTitleStyle: {fontWeight: 'bold'},
        headerTransparent: true,
      }}
      initialRouteName="Dashboard">
      <Stack.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        headerLeft={({navigation}) => ({
          onPress: navigation.goBack(),
        })}
        options={{
          title: 'Detalhes da Encomenda',
        }}
        name="Details"
        component={Details}
      />
      <Stack.Screen
        headerLeft={({navigation}) => ({
          onPress: navigation.goBack(),
        })}
        options={{
          title: 'Confirmar Entrega',
        }}
        name="Confirm"
        component={Confirm}
      />
      <Stack.Screen
        headerLeft={({navigation}) => ({
          onPress: navigation.goBack(),
        })}
        options={{
          title: 'Informar Problema',
        }}
        name="NewProblem"
        component={NewProblem}
      />
      <Stack.Screen
        headerLeft={({navigation}) => ({
          onPress: navigation.goBack(),
        })}
        options={{
          title: 'Visualizar Problemas',
        }}
        name="ViewProblems"
        component={ViewProblems}
      />
    </Stack.Navigator>
  );
}
