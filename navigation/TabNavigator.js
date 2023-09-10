import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {MainStackNavigator, ContactStackNavigator} from './StackNavigator';
import Search from '../src/screen/Search';
import WeatherMap from '../src/screen/Search';
import ProfileScreen from '../src/screen/Profile';

const Tab = createMaterialBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="red"
      inactiveColor="black"
      barStyle={{backgroundColor: 'teal'}}>
      <Tab.Screen
        name="Screen1"
        component={MainStackNavigator}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons
              name="home-circle"
              color={color}
              size={26}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Map"
        component={WeatherMap}
        options={{
          tabBarLabel: 'MAPS',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons
              name="google-maps"
              color={color}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name="PROFILE"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'PROFILE',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
