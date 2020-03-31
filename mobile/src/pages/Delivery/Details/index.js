import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import BoxNavigate from '~/pages/Delivery/BoxNavigate';

export default function Details() {
  const navigation = useNavigation();

  return (
    <BoxNavigate>
      <Text>Details</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Confirm')}>
        <Text>Confirm</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('NewProblem')}>
        <Text>NewProblem</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('ViewProblems')}>
        <Text>ViewProblems</Text>
      </TouchableOpacity>
    </BoxNavigate>
  );
}
