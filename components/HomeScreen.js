import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View, Image, ImageBackground, Dimensions } from 'react-native';
import { gestureHandlerRootHOC, ScrollView, TextInput } from 'react-native-gesture-handler';
import {StackNavigator} from 'react-navigation';
//import { createStackNavigator, createAppContainer } from 'react-navigation-stack';

import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import React, { Component } from 'react';

export default class Homescreen extends Component {
    render() {
    return (
        <View style={styles.container}>
            
        <View style={styles.logoContainer}>
            <Image source={{uri: 'https://sizze-figma-plugin-images-upload.s3.us-east-2.amazonaws.com/c82344d2997beafd4ad030577f9ebc2b'}} style={styles.logo} />
        </View>

        <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>

          <Pressable onPress={() => this.props.navigation.navigate('theSearchScreen')} style={styles.searchPressable}>
            <View pointerEvents="none">
            <TextInput placeholder="Search" style={styles.search} />
            </View>
          </Pressable>

        

            <View style={styles.listElement}>
            <View style={styles.elementTopRow}>
                <Image source={{uri: 'https://sizze-figma-plugin-images-upload.s3.us-east-2.amazonaws.com/623f61d9a46df121536ebc0cc3691d30'}} style={styles.profilePicture} />
                <Text onPress={() => this.props.navigation.navigate('ExternalProfile')} style={styles.itemCompanyName}>Logo Lawncare</Text>
            </View>
            <View>
                <Image source={{uri: 'https://sizze-figma-plugin-images-upload.s3.us-east-2.amazonaws.com/5525ee56a5fb0861a6699a14dc3e0dbb'}} style={styles.itemCompanyPicture} />
            </View>
            {/* <View style={styles.elementBottomRow}>
                <Text>Fresh Cut</Text>
            </View> */}
            </View>

            <View style={styles.listElement}>
            <View style={styles.elementTopRow}>
                <Image source={{uri: 'https://sizze-figma-plugin-images-upload.s3.us-east-2.amazonaws.com/c65e6af836c384405da617fc659d1e70'}} style={styles.profilePicture} />
                <Text onPress={() => this.props.navigation.navigate('Profile')} style={styles.itemCompanyName}>Werken</Text>
            </View>
            <View>
                <Image source={{uri: 'https://sizze-figma-plugin-images-upload.s3.us-east-2.amazonaws.com/01d1f304d219cb7161b5d9cf9c8714ba'}} style={styles.itemCompanyPicture} />
            </View>
            {/* <View style={styles.elementBottomRow}>
                <Text>Squeaky Clean Windows</Text>
            </View> */}
            </View>

            <View style={styles.listElement}>
            <View style={styles.elementTopRow}>
                <Image source={{uri: 'https://sizze-figma-plugin-images-upload.s3.us-east-2.amazonaws.com/859b3eaa8179524d4ee554368115f94e'}} style={styles.profilePicture} />
                <Text style={styles.itemCompanyName}>Art City AutoBody</Text>
            </View>
            <View>
                <Image source={{uri: 'https://sizze-figma-plugin-images-upload.s3.us-east-2.amazonaws.com/5525ee56a5fb0861a6699a14dc3e0dbb'}} style={styles.itemCompanyPicture} />
            </View>
            {/* <View style={styles.elementBottomRow}>
                <Text>Simply The Best</Text>
            </View> */}
            </View>

        </ScrollView>

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
    paddingTop: '5%',
    paddingBottom: '2%',
    borderBottomWidth: 1,
    marginTop: '5%',
    marginBottom: '2%',
  },
  logo: {
    width: 300,
    height: 60,
  },
  search: {

    borderWidth:1,
    padding: 10,
    height: '100%',
    fontSize: 20,
    margin: 0,
    // marginLeft: 'auto',
    // marginRight: 'auto',
    width: '100%',
    borderRadius: 15,
    backgroundColor: "#e5e5e5",

  },
  searchPressable: {
    height: 50,
    fontSize: 20,
    margin: 0,
    width: '100%',

  },
  profilePicture: {
    width: 60,
    height: 60,
    borderWidth: 0,
    borderRadius: 20,
  },
  listElement: {
    paddingTop: 0,
    paddingBottom: 10,
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 10,
  },
  elementTopRow: {
    flexDirection: "row",
    alignItems: 'center',
    paddingTop: 5,
    paddingBottom: 5,
    paddingRight: 5,
  },
  itemCompanyName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#464646",
    paddingLeft: 15,
  },
  itemCompanyPicture: {
    width: '100%',
    //height: '100%',
    height: 300,
    borderWidth: 1,
    borderRadius: 10,
  },
  scrollView: {
    width: '90%',
    height: '85%', //70
    borderRadius: 10,
    
  },
  elementBottomRow: {
    alignItems: 'center',
    paddingTop: 15,
    
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
    top: WINDOW_HEIGHT - 875,
  },
  PressableHome: {
    height: 45,
    width: 45,
  }
});