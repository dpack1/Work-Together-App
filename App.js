import { StatusBar } from 'expo-status-bar';
import { TouchableHighlight, Button, Pressable, StyleSheet, Text, View, Image, ImageBackground, Dimensions } from 'react-native';
import { gestureHandlerRootHOC, ScrollView, TextInput } from 'react-native-gesture-handler';
import {StackNavigator} from 'react-navigation';
//import { createStackNavigator, createAppContainer } from 'react-navigation-stack';

import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import React, { Component } from 'react';

export default class ExternalProfile extends Component {
    render() {
        return (
            <View style={styles.InternalProfileView}>
            <Image
              style={styles.MaskGroup}
              source={{
                uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/k61yg9rrv6-2%3A353?alt=media&token=0126d103-d201-46ad-9bb7-f0a8c67ef488",
              }}
            />
            <Text onPress={() => this.props.navigation.navigate('PassALead')} style={styles.Txt861}>Pass A Lead</Text>
            <Text style={styles.Txt645}>given: 19</Text>
            <Text style={styles.Txt811}>converted: 27</Text>
            <Text style={styles.Txt101}>Reviews</Text>
            <Text style={styles.Txt427}>
              We'll clean your carpets
            </Text>
            <Text style={styles.Txt932}>Carrie's Carpet Clean</Text>
            <Image
              style={styles.Star1}
              source={{
                uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/m8jo9g8y6hh-2%3A42?alt=media&token=be688578-57a2-4020-bb22-78d1cf2408d3",
              }}
            />
            <Image
              style={styles.Star5}
              source={{
                uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/m8jo9g8y6hh-2%3A43?alt=media&token=8d5491a5-8c47-4d93-bd6c-4afdbd933442",
              }}
            />
            <Image
              style={styles.Star2}
              source={{
                uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/m8jo9g8y6hh-2%3A44?alt=media&token=e3dc0827-5e79-4a4b-9ee1-bd521d51bf35",
              }}
            />
            <Image
              style={styles.Star3}
              source={{
                uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/m8jo9g8y6hh-2%3A45?alt=media&token=add6a2ee-f227-4cf1-bd2d-fff1f7b60c6c",
              }}
            />
            <Image
              style={styles.Star4}
              source={{
                uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/m8jo9g8y6hh-2%3A46?alt=media&token=68e55804-4dfd-414e-b91a-b6d1bd067907",
              }}
            />
            <Text style={styles.Txt744}>(76)</Text>
            <View style={styles.Group642}>
              <Image
                style={styles.Image24}
                source={{
                  uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/m8jo9g8y6hh-2%3A61?alt=media&token=340e8b51-9d17-400a-bedf-5e1b881bb9e8",
                }}
              />
              <View style={styles.Group270}>
                <Image
                  style={styles.Frame4}
                  source={{
                    uri: "https://work-together-app-icons.s3.amazonaws.com/carpet.jpg",
                  }}
                />
                <View style={styles.Group210}>
                  <Image
                    style={styles.FrameCustom}
                    source={{uri: "https://work-together-app-icons.s3.amazonaws.com/carpetClean.jpg",}}
                  />
    
                </View>
                <View style={styles.Group400}>
                  <Image
                    style={styles.Frame6}
                    source={{
                      uri: "https://work-together-app-icons.s3.amazonaws.com/carpetCleaner.jpg",
                    }}
                  />
                  <Image
                    style={styles.Frame5}
                    source={{
                      uri: "https://work-together-app-icons.s3.amazonaws.com/carpetVacuum.jpg",
                    }}
                  />
                </View>
              </View>
              
              <View style={styles.NavBar}>
                

                <TouchableHighlight onPress={() => this.props.navigation.navigate('Favorites')}>
                <Image source={{ uri: 'https://work-together-app-icons.s3.amazonaws.com/favorites.png'}} style={styles.NavBarIcon}/>      
                </TouchableHighlight>

                <TouchableHighlight onPress={() => this.props.navigation.navigate('Home')}>
                    <Image source={{ uri: 'https://work-together-app-icons.s3.amazonaws.com/home.png'}} style={styles.NavBarIcon}/>
                </TouchableHighlight>


                <TouchableHighlight onPress={() => this.props.navigation.navigate('InternalProfile')}>
                <Image source={{ uri: 'https://work-together-app-icons.s3.amazonaws.com/profile.png'}} style={styles.NavBarIcon}/>
                </TouchableHighlight>
                
              </View>

            </View>
            <Text onPress={() => this.props.navigation.navigate('LeadsInfo')} style={styles.Txt553}>Leads this quarter</Text>
          </View>
        );
    }
}

const WINDOW_HEIGHT = Dimensions.get("window").height;
const WINDOW_WIDTH = Dimensions.get("window").width;

const styles = StyleSheet.create({
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
        backgroundColor: 'green'
      },
    InternalProfileView: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
      alignItems: "flex-start",
      position: "relative",
      borderRadius: 45,
      backgroundColor: "white",
      /*  linear-gradient(0deg, rgba(250,250,250,1), rgba(250,250,250,1)), linear-gradient(0deg, rgba(241,241,241,1), rgba(241,241,241,1)) */
      width: 380,
      height: 817,
    },
    MaskGroup: {
      position: "absolute",
      top: 34,
      left: 36,
      width: 132,
      height: 132,
    },
    Txt861: {
      position: "absolute",
      top: 85,
      left: 221,
      fontSize: 16,
      fontFamily: "sans-serif",
      fontWeight: "400",
      lineHeight: 42,
      color: "rgba(255,140,0,1)",
      width: 154,
      height: 179,
    },
    Txt645: {
      position: "absolute",
      top: 226,
      left: 217,
      fontSize: 16,
      fontFamily: "sans-serif",
      fontWeight: "400",
      lineHeight: 42,
      color: "rgba(128,128,128,1)",
      width: 113,
      height: 44,
    },
    Txt811: {
      position: "absolute",
      top: 247,
      left: 217,
      fontSize: 16,
      fontFamily: "sans-serif",
      fontWeight: "400",
      lineHeight: 42,
      color: "rgba(128,128,128,1)",
      width: 118,
      height: 30,
    },
    Txt101: {
      position: "absolute",
      top: 206,
      left: 59,
      fontSize: 16,
      fontFamily: "sans-serif",
      fontWeight: "400",
      lineHeight: 42,
      color: "rgba(255,133,0,1)",
      width: 94,
      height: 45,
    },
    Txt427: {
      position: "absolute",
      top: 165,
      left: 41,
      fontSize: 10,
      fontFamily: "sans-serif",
      fontWeight: "400",
      lineHeight: 42,
      color: "rgba(128,128,128,1)",
      textAlign: "center",
      justifyContent: "center",
      width: 299,
      height: 37,
    },
    Txt932: {
      position: "absolute",
      top: 56,
      left: 186,
      fontSize: 18,
      fontFamily: "sans-serif",
      fontWeight: "700",
      color: "rgba(70,70,70,1)",
      width: 203,
      height: 20,
      opacity: 0.6,
    },
    Star1: {
      position: "absolute",
      top: 244,
      left: 44,
      width: 22,
      height: 21,
    },
    Star5: {
      position: "absolute",
      top: 244,
      left: 126,
      width: 22,
      height: 21,
    },
    Star2: {
      position: "absolute",
      top: 244,
      left: 64,
      width: 22,
      height: 21,
    },
    Star3: {
      position: "absolute",
      top: 244,
      left: 106,
      width: 22,
      height: 21,
    },
    Star4: {
      position: "absolute",
      top: 244,
      left: 84,
      width: 22,
      height: 21,
    },
    Txt744: {
      position: "absolute",
      top: 247,
      left: 151,
      fontSize: 12,
      fontFamily: "sans-serif",
      fontWeight: "400",
      color: "rgba(128,128,128,1)",
      width: 27,
      height: 16,
    },
    Group642: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      position: "absolute",
      top: 97,
      width: 375,
      height: 720,
    },
    Image24: {
      width: 34,
      height: 22,
      opacity: 0.6,
      marginBottom: 194,
    },
    Group270: {
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: 230,
    },
    Frame4: {
      width: 143,
      height: 131,
      marginBottom: 20,
    },
    Group210: {
      display: "flex",
      flexDirection: "row",
      marginBottom: 8,
    },
    Frame6: {
      width: 143,
      height: 131,
      marginRight: 9,
    },
    FrameCustom: {
      width: 143,
      height: 131,
      paddingLeft: 10,
      marginLeft: 8,
    },
    Frame5: {
      width: 143,
      height: 131,
    },
  
    Group400: {
      display: "flex",
      flexDirection: "row",
    },
    Frame6: {
      width: 143,
      height: 131,
      marginRight: 9,
    },
    Frame5: {
      width: 143,
      height: 131,
    },
  
    Group170: {
      paddingTop: 13,
      paddingBottom: 15,
      paddingLeft: 67,
      paddingRight: 71,
      borderRadius: 30,
      backgroundColor: "rgba(255, 255, 255, 1)",
      shadowColor: "rgba(0,0,0,0.1)",
      elevation: 5,
      shadowOffset: { width: 0, height: -5 },
      width: 375,
      height: 70,
    },
    NavBarIcons: {
      width: 234.99,
      height: 40,
    },
  
    Txt553: {
      position: "absolute",
      top: 201,
      left: 196,
      fontSize: 16,
      fontFamily: "sans-serif",
      fontWeight: "400",
      lineHeight: 42,
      color: "rgba(255,140,0,1)",
      width: 165,
      height: 33,
    },
  })