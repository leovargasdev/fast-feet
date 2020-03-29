import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Dashboard from '~/pages/Dashboard';
import Profile from '~/pages/Profile';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <Tab.Navigator
      initialRouteName="Dashboard"
      tabBarOptions={{
        activeTintColor: '#7D40E7',
      }}>
      <Tab.Screen
        name="Dashboard"
        component={Dashboard}
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
            <Icon name="person" size={20} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
