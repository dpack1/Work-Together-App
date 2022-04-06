import { StatusBar } from 'expo-status-bar';
import ExpoStatusBar from 'expo-status-bar/build/ExpoStatusBar';
import React, {Component} from 'react';
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
import SearchResult from './components/SearchResults';
import ExternalProfile from './components/ExternalProfile';
import PassALead from './components/PassALead';
import LeadSent from './components/LeadSent';
import CarriesCarpetCleaningProfile from './components/CarriesCleaningProfile';
import CarriesLeadsInfo from './components/CarriesLeadsInfo';


export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

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
    },
    SearchResult: {
      screen: SearchResult
    },
    ExternalProfile: {
      screen: ExternalProfile
    },
    PassALead: {
      screen: PassALead
    },
    LeadSent: {
      screen: LeadSent
    },
    CarriesCarpetCleaningProfile: {
      screen: CarriesCarpetCleaningProfile
    },
    CarriesLeadsInfo: {
      screen: CarriesLeadsInfo
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


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
