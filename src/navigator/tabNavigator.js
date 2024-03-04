import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Characters from '../screen/characters';
import Locations from '../screen/location';
import {CHARACTERS, EPİSODES, LOCATİONS} from '../utils/router';
import Episodes from '../screen/episodes';
import {I3Square, Location, People} from 'iconsax-react-native';
import {AppColors} from '../theme/color';

const Tab = createBottomTabNavigator();
const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarStyle: {
          backgroundColor: AppColors.BLACK,
        },
        tabBarIcon: ({focused, color, size}) => {
          switch (route.name) {
            case CHARACTERS:
              return (
                <People
                  size={size}
                  color={color}
                  variant={focused ? 'Bold' : 'Outline'}
                />
              );
            case LOCATİONS:
              return (
                <Location
                  size={size}
                  color={color}
                  variant={focused ? 'Bold' : 'Outline'}
                />
              );
            case EPİSODES:
              return (
                <I3Square
                  size={size}
                  color={color}
                  variant={focused ? 'Bold' : 'Outline'}
                />
              );
          }
        },
        tabBarActiveTintColor: AppColors.GREEN,
        tabBarInactiveTintColor: AppColors.WHITE,
      })}>
      <Tab.Screen name={CHARACTERS} component={Characters} />
      <Tab.Screen name={LOCATİONS} component={Locations} />
      <Tab.Screen name={EPİSODES} component={Episodes} />
    </Tab.Navigator>
  );
};

export default TabNavigator;

const styles = StyleSheet.create({});
