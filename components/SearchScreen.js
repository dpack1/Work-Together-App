import { StatusBar } from 'expo-status-bar';
import { Pressable, TouchableHighlight, StyleSheet, Text, View, Image, ImageBackground, Dimensions } from 'react-native';
import { gestureHandlerRootHOC, ScrollView, TextInput } from 'react-native-gesture-handler';
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import React, { Component } from 'react';

export default class SearchScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                
            <View style={styles.logoContainer}>
                <Image source={{uri: 'https://sizze-figma-plugin-images-upload.s3.us-east-2.amazonaws.com/c82344d2997beafd4ad030577f9ebc2b'}} style={styles.logo} />
            </View>
    
            <TextInput placeholder="Search" style={styles.search}/>
    
            <View style={styles.ScreenTitleView}>
                <Text style={styles.ScreenTitle}>Select Home Service</Text>
            </View>
    
            <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
    
                <View style={styles.ListView}>
                <Text  onPress={() => this.props.navigation.navigate('SearchResult')} style={styles.ListText}>Lawn and Yard Care</Text>
                </View>
    
                <View style={styles.ListView}>
                <Text style={styles.ListText}>Window Cleaning</Text>
                </View>
    
                <View style={styles.ListView}>
                <Text style={styles.ListText}>Gutter Cleaning</Text>
                </View>
    
                <View style={styles.ListView}>
                <Text style={styles.ListText}>Home Cleaning</Text>
                </View>
    
                <View style={styles.ListView}>
                <Text style={styles.ListText}>Handyman</Text>
                </View>
    
            </ScrollView>
    
            <View style={styles.NavBar}>
                <Pressable onPress={() => this.props.navigation.navigate('Favorites')} style={styles.PressableHome}>
                  <View pointerEvents="none">
                  <Image source={{ uri: 'https://work-together-app-icons.s3.amazonaws.com/favorites.png'}} style={styles.NavBarIcon}/>
                  </View> 
                </Pressable>
                
                <Pressable onPress={() => this.props.navigation.navigate('Home')} style={styles.PressableHome}>
                    <View pointerEvents="none">
                        <Image source={{ uri: 'https://work-together-app-icons.s3.amazonaws.com/home.png'}} style={styles.NavBarIcon}/>
                    </View> 
                </Pressable>


                <Pressable onPress={() => this.props.navigation.navigate('InternalProfile')} style={styles.PressableHome}>
                  <View pointerEvents="none">
                  <Image source={{ uri: 'https://work-together-app-icons.s3.amazonaws.com/profile.png'}} style={styles.NavBarIcon}/>
                  </View>
                </Pressable>

                
            </View>
    
            <StatusBar style="auto" />
            </View>
        );
    }
}

const WINDOW_HEIGHT = Dimensions.get("window").height;
const WINDOW_WIDTH = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  logoContainer: {
    alignItems: 'center',
    paddingTop: '10%',
  },
  logo: {
    width: 300,
    height: 60,
  },
  search: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    height: 50,
    fontSize: 20,
    margin: 20,
    width: '95%',
    borderRadius: 15,
    backgroundColor: "#e5e5e5",
  },
  scrollView: {
    width: '80%',
    height: '68%',
    
  },
  NavBarIcon: {
    height: 45,
    width: 45,
    borderBottomWidth: 1,
    borderTopWidth: 1,
  },
  NavBar: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    height: 100,
    paddingTop: 20,
    top: WINDOW_HEIGHT - 910,
  },
  ListText: {
    fontSize: 20,
    paddingTop: 10,
    paddingBottom: 10,
  },
  ListView: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
  ScreenTitle: {
    fontSize: 20,
    borderBottomWidth: 1,
    paddingBottom: '0%'
  },
  ScreenTitleView: {
    alignItems: 'center',
    borderBottomWidth: 1,
    width: '80%',
  },
  PressableHome: {
    height: 45,
    width: 45,
  }
});