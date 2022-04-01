import { StatusBar } from 'expo-status-bar';
import ExpoStatusBar from 'expo-status-bar/build/ExpoStatusBar';
import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {StackNavigator} from 'react-navigation';
import { createStackNavigator, createAppContainer } from "react-navigation";


import HomeScreen from './components/HomeScreen';


export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

registerRootComponent(App);

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen
  },
});

const AppContainer = createAppContainer(AppNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});