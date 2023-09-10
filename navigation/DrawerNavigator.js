import React from 'react';
import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { ContactStackNavigator } from './StackNavigator';
import { TouchableOpacity } from 'react-native';
import BottomTabNavigator from './TabNavigator';
import { DrawerActions } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: true,
        drawerPosition: 'left',
      }}>
      <Drawer.Screen
        options={({ navigation }) => ({
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>
              <MaterialCommunityIcons name="menu" size={26} />
            </TouchableOpacity>
          ),
          drawerIcon: ({ focused, size }) => (
            <MaterialCommunityIcons name="home-circle" size={28 } />
          ),
        })}
        name="Home"
        component={BottomTabNavigator}
      />
      
      <Drawer.Screen
        name="Contacts"
        options={{
          drawerIcon: ({ focused, size }) => (
            <MaterialCommunityIcons name="account-box" size={26} />
          ),
        }}
        component={ContactStackNavigator}
      />
     
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
