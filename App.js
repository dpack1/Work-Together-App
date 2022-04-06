import { StatusBar } from 'expo-status-bar';
import ExpoStatusBar from 'expo-status-bar/build/ExpoStatusBar';
//import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {StackNavigator} from 'react-navigation';
//import { createStackNavigator, createAppContainer } from 'react-navigation-stack';

import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import HomeScreen from './components/HomeScreen';
import SearchScreen from './components/SearchScreen';
import FavoritesScreen from './components/FavoritesScreen';
import InternalProfileScreen from './components/InternalProfileScreen';
import LeadsInfo from './components/leadsInfo';


import * as React from 'react';
import MainContainer from './navigation/MainContainer';

function App(){
  return (
    <MainContainer/>
  );
}

export default App;

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen
    },
    Search: { 
      screen: SearchScreen
    },
    Favorites: {
      screen: FavoritesScreen
    },
    InternalProfile: {
      screen: InternalProfileScreen
    },
    LeadsInfo: {
      screen: LeadsInfo
    }
  },
  {
    headerMode: 'none',
    initialRouteName: "Home",
    navigationOptions: {
        headerVisible: false,
    }
  }
)
//export default AppNavigator;

 const AppContainer = createAppContainer(AppNavigator);


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
