import React from 'react';
import 'react-native-gesture-handler';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {ContactStackNavigator} from './StackNavigator';
import BottomTabNavigator from './TabNavigator';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: true,
      }}>
      <Drawer.Screen
        options={{
          drawerIcon: ({focused, size}) => (
            <MaterialCommunityIcons name="home-circle" size={26} />
          ),
        }}
        name="Home"
        component={BottomTabNavigator}
      />
      <Drawer.Screen
        name="Contacts"
        options={{
          drawerIcon: ({focused, size}) => (
            <MaterialCommunityIcons name="account-box" size={26} />
          ),
        }}
        component={ContactStackNavigator}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
