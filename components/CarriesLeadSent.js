import { StatusBar } from 'expo-status-bar';
import { Button, Pressable, StyleSheet, Text, View, Image, ImageBackground, Dimensions } from 'react-native';
import { gestureHandlerRootHOC, ScrollView, TextInput } from 'react-native-gesture-handler';
import {StackNavigator} from 'react-navigation';
//import { createStackNavigator, createAppContainer } from 'react-navigation-stack';

import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import React, { Component } from 'react';

export default class CarriesLeadSent extends Component {
    render() {
        return (
            <View style={styles.container}>
              
                
              <View style={styles.logoContainer}>
                <Image source={{uri: 'https://sizze-figma-plugin-images-upload.s3.us-east-2.amazonaws.com/c82344d2997beafd4ad030577f9ebc2b'}} style={styles.logo} />
              </View>
        
              <Text style={{ color: 'chocolate', fontSize: 20  }}> Refer Buisness Name</Text>
        
              
        
              <View style={styles.logoContainer}>
                <Image source={{uri: 'https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/k61yg9rrv6-2%3A353?alt=media&token=0126d103-d201-46ad-9bb7-f0a8c67ef488'}} style={{height: 100, width: 150}} />
              </View>
        
        
              <View>
                <Text style={styles.thankGreeting}>Thank You!</Text>
              </View>
        
              <View style={styles.smallTextSection}>
                <Text style={styles.smallText}>We’ve emailed BUSINESS NAME’s information to CLIENT NAME. Thanks for referring them!!</Text>
              </View>
            
        
              <View style={styles.button}>
                <Button
                  title="Back To Result"
                  color="orange"
                  onPress={() => this.props.navigation.navigate('CarriesCarpetCleaningProfile')}
                />
              </View>
        
              <StatusBar style="auto" />
            </View>
          );
    }
}


const windowHeight = Dimensions.get("window").height;
const WINDOW_WIDTH = Dimensions.get("window").width;

const styles = StyleSheet.create({
  button: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    padding: 5,
    //height: 50,
    fontSize: 20,
    margin: 5,
    width: '60%',
    borderRadius: 50,
   // backgroundColor: "#e5e5e5",

  },
  smallText: {
    textAlign: 'center',
    fontSize: 20
  },
  smallTextSection: {
    marginTop: '15%',
    marginBottom: '15%',
    width: '70%'
  },
  thankGreeting: {
    fontSize: 25,
    color: '#7e7e7e',
    marginTop: 30,
    fontWeight: '700'
  },
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
    padding: 10,
    height: 50,
    fontSize: 20,
    margin: 10,
    width: '95%',
    borderRadius: 15,
    backgroundColor: "#e5e5e5",
  },
  searchMessage: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    padding: 10,
    height: 150,
    fontSize: 20,
    paddingBottom: 110,
    margin: 10,
    width: '95%',
    borderRadius: 15,
    backgroundColor: "#e5e5e5",
  },
  scrollView: {
    width: '100%',
    height: '100%',
    
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
    position: 'absolute',
     bottom: 0
  },
  footer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    left: 0,
    bottom: 0,
    width: '80%',
    color: 'white',
    paddingTop: 'auto',
    position: 'absolute',
    top: windowHeight - 70,
    width: WINDOW_WIDTH - 50,
    left: 'auto'
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
  }
});
