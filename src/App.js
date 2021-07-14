import 'react-native-gesture-handler';

import {Provider} from 'react-redux'

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import store from "./store"

import {HomeScreen} from "./screens/HomeScreen"
import {AddPost} from "./screens/AddPost"

import {createStackNavigator} from '@react-navigation/stack';


const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home Page"
          component={HomeScreen}
        />
        <Stack.Screen
          name="Add Post"
          component={AddPost}
        />
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
};

export default App;

