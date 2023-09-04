import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from '../src/screen/Home';
import About from '../src/screen/About';
import Contact from '../src/screen/Contact';

const Stack = createNativeStackNavigator();

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: '#9AC4F8',
  },
  headerTintColor: 'white',
  headerBackTitle: 'Back',
};

const MainStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="HomeScreen" component={Home} />
      <Stack.Screen name="About" component={About} />
      <Stack.Screen name="Search" component={About} />
    </Stack.Navigator>
  );
};

const ContactStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Contact" component={Contact} />
    </Stack.Navigator>
  );
};

export {MainStackNavigator, ContactStackNavigator};
