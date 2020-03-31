import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Profile from '~/pages/Profile';
import Delivery from '~/routes/Delivery';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <Tab.Navigator
      initialRouteName="Dashboard"
      tabBarOptions={{
        keyboardHidesTabBar: true,
        activeTintColor: '#7D40E7',
        inactiveTintColor: '#999',
      }}>
      <Tab.Screen
        name="Delivery"
        component={Delivery}
        options={{
          tabBarLabel: 'Entregas',
          tabBarIcon: ({color}) => (
            <Icon name="reorder" size={20} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Meu Perfil',
          tabBarIcon: ({color}) => (
            <Icon name="account-circle" size={20} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
