import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from "./components/HomeScreen";
import ProfileScreen from "./components/InternalProfileScreen";
import SearchScreen from "./components/SearchScreen";


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
            ? 'ios-information-circle'
            : 'ios-information-circle-outline';
          } else if (route.name === 'Settings') {
            iconName = focused
            ? 'ios-list-box'
            : 'ios-list';
          };
       },
    })}
tabBarOptions={{
    activeTintColor: 'tomato',
    inactiveTintColor: 'gray',
    }}
    screenOptions={{
      headerShown: false,
      tabBarIconStyle: { display: "none" }
    }}
    >
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
 