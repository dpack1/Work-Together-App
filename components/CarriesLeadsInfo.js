import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View, Image, ImageBackground, Dimensions } from 'react-native';
import { gestureHandlerRootHOC, ScrollView, TextInput } from 'react-native-gesture-handler';
import {StackNavigator} from 'react-navigation';
//import { createStackNavigator, createAppContainer } from 'react-navigation-stack';

import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import React, { Component } from 'react';

export default class CarriesLeadsInfo extends Component {
    render() {
        return (
            <View style={styles.container}>
        
              <View style={styles.back}>
                <Text onPress={() => this.props.navigation.navigate('CarrieProfile')} style={styles.backButton}>X</Text>
              </View>
                
              <View style={styles.logoContainer}>
                <Image source={{uri: 'https://sizze-figma-plugin-images-upload.s3.us-east-2.amazonaws.com/c82344d2997beafd4ad030577f9ebc2b'}} style={styles.logo} />
              </View>
        
              <Text style={styles.title}>My Referrals</Text>
        
              <Image source={{uri: 'https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/k61yg9rrv6-2%3A353?alt=media&token=0126d103-d201-46ad-9bb7-f0a8c67ef488'}} style={styles.profilePicture} />
        
              <View style={styles.section}>
                <Text style={styles.sectionText}>Given: 19</Text>
                <Text style={styles.sectionText}>Converted: 27</Text>
                <Text style={styles.sectionText}>Conversion Rate: 70%</Text>
              </View>
        
              <View style={styles.section}>
                <Text style={styles.sectionText}>Recieved: 38</Text>
                <Text style={styles.sectionText}>Converted: 20</Text>
                <Text style={styles.sectionText}>Conversion Rate: 77%</Text>
              </View>
        
              <View style={styles.section}>
                <Text style={styles.bottomSection}>Top Referrers: </Text>
                <Text style={styles.bottomSectionReferrers}>Helen's Remodeling</Text>
                <Text style={styles.bottomSectionReferrers}>Stanely Steamers</Text>
              </View>
        
        
        
              <StatusBar style="auto" />
            </View>
          );
    }
}

const styles = StyleSheet.create({
    container: {
      alignItems: "center",
    },
    title: {
      color: '#ff8500',
      fontWeight: '500',
      fontSize: 15
    },
    logoContainer: {
      alignItems: 'center',
      paddingTop: '10%',
    },
    logo: {
      width: 300,
      height: 60,
    },
    profilePicture: {
      width: 170,
      height: 170,
      marginLeft: 'auto',
      marginRight: 'auto'
    },  
    section: {
        marginTop: 30,
        alignItems: 'center'
    },
    sectionText: {
      fontSize: 20
    },
    bottomSection: {
      fontWeight: 'bold',
      fontSize: 25
    },
    bottomSectionReferrers: {
      fontSize: 20,
      color: '#ff8500'
    },
    back: {
      top: '7%',
      textAlign:'left',
      width: '90%'
    },
    backButton: {
      fontSize: 35,
      color: '#c4c4c4'
    }
  });