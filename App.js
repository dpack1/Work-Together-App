import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { AntDesign } from '@expo/vector-icons'; 

import HomeScreen from "./components/HomeScreen";
import ProfileScreen from "./components/InternalProfileScreen";
import SearchScreen from "./components/SearchScreen";
import FavoritesScreen from "./components/FavoritesScreen";
import CarriesCarpetCleaningProfile from './components/CarriesCleaningProfile';
import CarriesPassALeadScreen from './components/CarriesPassALead';
import CarriesLeadSent from './components/CarriesLeadSent';
import CarriesLeadsInfo from './components/CarriesLeadsInfo';
import ExternalProfile from "./components/ExternalProfile";
import PassALead from './components/PassALead';
import LeadSent from './components/LeadSent';
import ExternalProfileLeadsInfo from './components/ExternalProfileLeadsInfo';
import leadsInfo from './components/leadsInfo';
import theSearchScreen from './components/TheSearchScreen';

console.disableYellowBox = true;


const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
         screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused
            ? 'ios-home-outline'
            : 'ios-home-outline';
          } else if (route.name === 'Favorites') {
            iconName = focused
            ? 'ios-heart-outline'
            : 'ios-heart-outline';
          }
          else if(route.name === 'Profile') {
            iconName = focused
            ? 'ios-person-outline'
            : 'ios-person-outline';
          }
    
    return <Ionicons name={iconName} size={40} color={color}     />;
       },
       headerShown: false,
       tabBarShowLabel: false,
    })}
    tabBarOptions={{
    activeTintColor: 'tomato',
    inactiveTintColor: 'gray',
    }}
  
   >
        <Tab.Screen name="Favorites" component={FavoriteStackScreen} />
        <Tab.Screen name="Home" component={HomeStackScreen} />
        <Tab.Screen name="Profile" component={ProfileStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const HomeStack = createStackNavigator();
function HomeStackScreen() {
  return (
    <HomeStack.Navigator screenOptions={{
      headerShown: false
    }}>
     <HomeStack.Screen name="Home" component={HomeScreen}/>
     <HomeStack.Screen name="Profile" component={ProfileScreen} />
     <HomeStack.Screen name="Search" component={SearchScreen} />
     <HomeStack.Screen name="ExternalProfile" component={ExternalProfile} />
     <HomeStack.Screen name="PassALead" component={PassALead} />
     <HomeStack.Screen name="LeadSent" component={LeadSent} />
     <HomeStack.Screen name="ExternalProfileLeadsInfo" component={ExternalProfileLeadsInfo} />
     <HomeStack.Screen name="theSearchScreen" component={theSearchScreen} />
    </HomeStack.Navigator>
   );
 }

const ProfileStack = createStackNavigator();
function ProfileStackScreen() {
  return (
    <ProfileStack.Navigator screenOptions={{
      headerShown: false
    }}>
     <ProfileStack.Screen name="Profile" component={ProfileScreen} />
     <ProfileStack.Screen name="Search" component={SearchScreen} />
     <ProfileStack.Screen name="leadsInfo" component={leadsInfo} />
    </ProfileStack.Navigator>
   );
 }
 
const SearchStack = createStackNavigator();
function SearchStackScreen() {
  return (
    <SearchStack.Navigator screenOptions={{
      headerShown: false
    }}>
     <SearchStack.Screen name="Home" component={HomeScreen}/>
     <SearchStack.Screen name="Profile" component={ProfileScreen} />
     <SearchStack.Screen name="Search" component={SearchScreen} />
    </SearchStack.Navigator>
   );
 }

const FavoritesStack = createStackNavigator();
function FavoriteStackScreen() {
  return (
    <FavoritesStack.Navigator screenOptions={{
      headerShown: false
    }}>
     <FavoritesStack.Screen name="Favorites" component={FavoritesScreen} /> 
     <FavoritesStack.Screen name="CarrieProfile" component={CarriesCarpetCleaningProfile} />
     <FavoritesStack.Screen name="CarriesPassALead" component={CarriesPassALeadScreen} />
     <FavoritesStack.Screen name="CarriesLeadSent" component={CarriesLeadSent} />
     <FavoritesStack.Screen name="CarriesLeadsInfo" component={CarriesLeadsInfo} />
    </FavoritesStack.Navigator>
   );
 }
