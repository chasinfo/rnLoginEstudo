import React, { Component } from 'react';
import {createAppContainer, createStackNavigator} from 'react-navigation';
import loginScreen from './src/LoginScreen';
import mainScreen from './src/MainScreen';

const MainNavigator = createStackNavigator({
  login: { screen: loginScreen },
  main: { screen: mainScreen }
});
 
export default createAppContainer(MainNavigator);