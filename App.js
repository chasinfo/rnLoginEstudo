import React, { Component } from 'react';
import {createAppContainer, createStackNavigator} from 'react-navigation';
import loginScreen from './src/LoginScreen';
import lista from './src/Lista';
import receita from './src/Receita';

const MainNavigator = createStackNavigator({
  login: { screen: loginScreen },
  lista: { screen: lista },
  receita: {screen: receita }
},
{
  headerMode: 'none',
  mode: 'modal',
  defaultNavigationOptions: {
    gesturesEnabled: false,
  }
});
 
export default createAppContainer(MainNavigator);