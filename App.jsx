import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import store from './src/Redux/Store/store';
import {Provider} from 'react-redux';
import DrawerNavigator from './navigation/DrawerNavigator';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <DrawerNavigator />
      </NavigationContainer>
    </Provider>
  );
};
export default App;
