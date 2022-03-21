import React, { useState, useRef, useEffect } from "react";
import { View, Text, Image, ScrollView, TextInput, StyleSheet, Animated, Dimensions, Vibration, Alert, ActivityIndicator, KeyboardAvoidingView, TouchableWithoutFeedback, Platform} from "react-native";
import { Svg, Path } from "react-native-svg";
import AppLoading from 'expo-app-loading';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import Icon from 'react-native-vector-icons/Entypo';
import RNPickerSelect from 'react-native-picker-select';
import {fonts} from './fonts/fonts.js';
import {useFonts} from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Page_home_view from "./pages/Page_home_view/Page_home_view.js";
import Page_next_page from "./pages/Page_next_page/Page_next_page.js";
const Tab = createBottomTabNavigator();
const Page_home_viewStackNavigator = createStackNavigator();
const ScreenForPage_home_view = () => {
	return (
		<Page_home_viewStackNavigator.Navigator>
			<Page_home_viewStackNavigator.Screen
				name = "Page_home_view"
				component = {Page_home_view}
				options = {{
					headerShown: false
				}}
			/>
		</Page_home_viewStackNavigator.Navigator>
	)
};
const Page_next_pageStackNavigator = createStackNavigator();
const ScreenForPage_next_page = () => {
	return (
		<Page_next_pageStackNavigator.Navigator>
			<Page_next_pageStackNavigator.Screen
				name = "Page_next_page"
				component = {Page_next_page}
				options = {{
					headerShown: false
				}}
			/>
		</Page_next_pageStackNavigator.Navigator>
	)
};
const App = () => {
	let [fontsLoaded] = useFonts(fonts);
const Stack = createStackNavigator();
	//const [isPage1Open, setIsPage1Open] = useState(true)
	const zIndexPage0 = useRef(1)
	//const [isPage1Open, setIsPage1Open] = useState(false)
	const zIndexPage1 = useRef(2)
	if(!fontsLoaded){
		return <AppLoading/>
	}
	const mainScreen = () => { return (
					<Tab.Navigator
						tabBarOptions={{
							showLabel: false,
							style: noneModeStyles.style0,
							iconStyle: {width: "100%", height: "100%"},
						}}>
						<Tab.Screen
							name = "Page_home_view"
							component = {ScreenForPage_home_view}
							options = {{tabBarVisible: false}}						/> 
						<Tab.Screen
							name = "Page_next_page"
							component = {ScreenForPage_next_page}
							options = {{tabBarVisible: false}}						/> 
					</Tab.Navigator>
	)};
	return (
				<NavigationContainer>
					<Stack.Navigator>
					<Stack.Screen name = "main" options={{headerShown: false}} component={mainScreen}/>
</Stack.Navigator>
				</NavigationContainer>
)};

const noneModeStyles = StyleSheet.create({
style0 : {position: "absolute", bottom: 0, left: 0, right: 0, width: 0, height: 0},
})
export default App;

