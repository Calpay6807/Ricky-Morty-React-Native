import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TabNavigator from './tabNavigator';
import {CHDETAİL, TAB} from '../utils/router';
import CharactersDetail from '../screen/characters/detail';

const Stack = createNativeStackNavigator();
const RootNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerBackTitleVisible: false,
        headerTitle: '',
        headerStyle: {backgroundColor: 'black'},
        backgroundColor: 'black',
      }}>
      <Stack.Screen
        options={{headerShown: false}}
        name={TAB}
        component={TabNavigator}
      />
      <Stack.Screen name={CHDETAİL} component={CharactersDetail} />
    </Stack.Navigator>
  );
};

export default RootNavigator;

const styles = StyleSheet.create({});
