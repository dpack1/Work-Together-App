import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Screens
import Homescreen from '../components/HomeScreen';
import InternalProfileScreen from '../components/InternalProfileScreen';
import FavoritesScreen from '../components/FavoritesScreen';

// Screen names
const homeName = "Home";
const profileName = "Profile";
const favoriteName = "Favorites";

const Tab = createBottomTabNavigator();


export default function MainContainer(){
    return(
        <NavigationContainer>
            <Tab.Navigator
            initialRouteName={homeName}
            screenOptions={({route}) => ({
                tabBarIcon: ({focused, color, size}) => {
                    let IconName;
                    let rn = route.name;
                    if (rn === homeName) {
                        iconName = focused ? 'home' : 'home-outline'
                    } else if (rn === profileName) {
                        iconName = focused ? 'list' : 'list-outline'
                    } else if (rn === favoriteName) {
                        iconName = focused ? 'heart' : 'heart-outline'
                    } 

                    return <Ionicons name= {IconName} size={size} color={color}/>
                    
                },
            })}

            tabBarOptions = {{
                activeTintColor:'tomato',
                inactiveTintColor:'grey',
                labelStyle: { paddingBottom: 10, fontSize: 10},
                style: { padding: 10, height: 70},
                headerVisible: false,

            }}
            
            
            >

            <Tab.Screen name={homeName} component={Homescreen} />
            <Tab.Screen name={profileName} component={InternalProfileScreen} />
            <Tab.Screen name={favoriteName} component={FavoritesScreen} />

            </Tab.Navigator>

        </NavigationContainer>
    );
}