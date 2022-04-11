import { StatusBar } from 'expo-status-bar';
import { TouchableHighlight, Pressable, StyleSheet, Text, View, Image, ImageBackground, Dimensions } from 'react-native';
import { gestureHandlerRootHOC, ScrollView, TextInput } from 'react-native-gesture-handler';
import {StackNavigator} from 'react-navigation';
//import { createStackNavigator, createAppContainer } from 'react-navigation-stack';

import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import React, { Component } from 'react';

export default class SearchResult extends Component {
    render() {
        return (
            <View style={styles.FavoritesView}>
      <View style={styles.PlusButtonView}>
        <Image
          style={styles.Vector9}
          source={{
            uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/k61yg9rrv6-2%3A299?alt=media&token=8e7d0de2-6b7e-46fd-93ac-d16a5c220b8e",
          }}
        />
        <Text style={styles.Txt467}>103</Text>
        <Text style={styles.Txt451}>Allen Lawncare</Text>
        <Text style={styles.Txt81010}>50% of the leads they pass convert</Text>
        <Image
          style={styles.Star6}
          source={{
            uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/k61yg9rrv6-2%3A304?alt=media&token=e2803f64-e905-4faa-8c9c-2e22487595b0",
          }}
        />
        <Image
          style={styles.Star8}
          source={{
            uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/k61yg9rrv6-2%3A305?alt=media&token=03f703e4-7ecd-4410-8ccd-1000e5f01adc",
          }}
        />
        <Image
          style={styles.Star9}
          source={{
            uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/k61yg9rrv6-2%3A306?alt=media&token=8e5f2f9e-685a-4dd3-952c-d4aca2f6e460",
          }}
        />
        <Image
          style={styles.Star10}
          source={{
            uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/k61yg9rrv6-2%3A307?alt=media&token=38a83856-00fd-4f86-813a-12f2eb689f68",
          }}
        />
        <Image
          style={styles.Vector10}
          source={{
            uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/k61yg9rrv6-2%3A308?alt=media&token=3ad4fde5-c333-4cad-9186-add77f810aa3",
          }}
        />
        <Text style={styles.Txt312}>Trucut Lawn</Text>
        <Text style={styles.Txt1015}>35% of the leads they pass convert</Text>
        <Image
          style={styles.Star11}
          source={{
            uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/k61yg9rrv6-2%3A312?alt=media&token=acf46586-4867-4be3-8bc7-0ccf30050f5c",
          }}
        />
        <Image
          style={styles.Star12}
          source={{
            uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/k61yg9rrv6-2%3A313?alt=media&token=4217fd65-5210-4350-81f8-46f46ede7d12",
          }}
        />
        <Image
          style={styles.Star13}
          source={{
            uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/k61yg9rrv6-2%3A314?alt=media&token=fe455adb-865e-4965-84c0-1b24e5c1b42d",
          }}
        />
        <Image
          style={styles.Star14}
          source={{
            uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/k61yg9rrv6-2%3A315?alt=media&token=c20a2b90-5df9-40c2-9007-31c14a81899a",
          }}
        />
        <Image
          style={styles.Star15}
          source={{
            uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/k61yg9rrv6-2%3A316?alt=media&token=4a7a4e86-7b44-4892-b5d5-d1860a5d7c06",
          }}
        />
        <Text style={styles.Txt144}>35</Text>
        <Image
          style={styles.MaskGroup}
          source={{
            uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/k61yg9rrv6-2%3A318?alt=media&token=36437bb9-ae3e-46eb-b9f1-0d093193868f",
          }}
        />
        <Image
          style={styles.Vector8}
          source={{
            uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/k61yg9rrv6-2%3A325?alt=media&token=74bcb70e-cdba-414b-b86d-a3b7551c5e64",
          }}
        />
        <Text style={styles.Txt838}>Logo Lawncare</Text>
        <Text style={styles.Txt1052}>70% of the leads they pass convert</Text>
        <Image
          style={styles.Star1}
          source={{
            uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/k61yg9rrv6-2%3A329?alt=media&token=01e59752-a7cb-4955-aebb-fc228c4d9965",
          }}
        />
        <Image
          style={styles.Star5}
          source={{
            uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/k61yg9rrv6-2%3A330?alt=media&token=a57fce26-7cb4-468a-a05c-a2394d590c7d",
          }}
        />
        <Image
          style={styles.Star2}
          source={{
            uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/k61yg9rrv6-2%3A331?alt=media&token=fc6ba906-3091-4031-aa4f-b81ac0f9dd55",
          }}
        />
        <Image
          style={styles.Star3}
          source={{
            uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/k61yg9rrv6-2%3A332?alt=media&token=9aa5926a-df6e-4fd4-afc5-2c07597dd721",
          }}
        />
        <Image
          style={styles.Star4}
          source={{
            uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/k61yg9rrv6-2%3A333?alt=media&token=fa12388c-baad-4f1e-809f-3824e1fe450a",
          }}
        />
        <Text style={styles.Txt833}>56</Text>
        
        <Image
          style={styles.Image49}
          source={{
            //uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/k61yg9rrv6-2%3A342?alt=media&token=35a4561e-b0ba-4d89-96c4-e796c51396fd",
          }}
        />
        <Image
          style={styles.Image50}
          source={{
            //uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/k61yg9rrv6-2%3A343?alt=media&token=ec22ac5b-5bba-4460-9218-1b850ab714d0",
          }}
        />
        <View style={styles.Group9107}>
          <TextInput placeholder="Lawncare Services" style={styles.search}/>
          <Text style={styles.Txt1094}>
            Select Business
          </Text>
          <Image
            style={styles.OffendingRectangle}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/k61yg9rrv6-2%3A344?alt=media&token=78376bee-eed0-48c2-885c-e3f4d0e9efc5",
            }}
          />
          <Image
            style={styles.NavBar}
            source={{
              uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/k61yg9rrv6-2%3A335?alt=media&token=04cf803c-96cd-414e-947c-abc9c01cddd5",
            }}
          />
        </View>
        <Image
          style={styles.Image501}
          source={{
            //uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/k61yg9rrv6-2%3A345?alt=media&token=90f4aaac-e286-4249-bd54-864503a3ae05",
          }}
        />
        <Image
          style={styles.GutterGuyLogo}
          source={{
            uri: "https://work-together-app-icons.s3.amazonaws.com/lawnLogo1.jpg",
          }}
        />
        <Image
          style={styles.Image54}
          source={{
            //uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/k61yg9rrv6-2%3A347?alt=media&token=79245935-f123-4161-96b7-f2aa2a4c2ec7",
          }}
        />
        <Image
          style={styles.Image57}
          source={{
            uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/k61yg9rrv6-2%3A348?alt=media&token=2eff237d-58cc-40bd-b2bc-e7c01b7940ee",
          }}
        />
      </View>

      <TouchableHighlight onPress={() => this.props.navigation.navigate('ExternalProfile')}>
      <Image
        style={styles.CarrieSCarpetLogo}
        source={{
          uri: "https://sizze-figma-plugin-images-upload.s3.us-east-2.amazonaws.com/623f61d9a46df121536ebc0cc3691d30",
        }}
      />  
    </TouchableHighlight>

      <Image
        style={styles.NixitHandymanLogo}
        source={{
          uri: "https://work-together-app-icons.s3.amazonaws.com/lawnLogo2.jpg",

        }}
      />
      <Text style={styles.Txt888}>75% of the leads they pass convert</Text>
      <Image
        style={styles.LogoLawncareLogo}
        source={{
          uri: "https://work-together-app-icons.s3.amazonaws.com/lawnLogo3.jpg",
        }}
      />
      <Image
        style={styles.Star61}
        source={{
          uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/k61yg9rrv6-2%3A360?alt=media&token=4d923e9d-d22c-4154-8dd4-4b515022409f",
        }}
      />
      <Image
        style={styles.Star7}
        source={{
          uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/k61yg9rrv6-2%3A361?alt=media&token=eb6c4690-6b23-419b-a89c-5433796bb5df",
        }}
      />
      <Image
        style={styles.Star81}
        source={{
          uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/k61yg9rrv6-2%3A362?alt=media&token=269580a8-a7ac-4584-81f6-795b0cb309a1",
        }}
      />
      <Image
        style={styles.Star91}
        source={{
          uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/k61yg9rrv6-2%3A363?alt=media&token=e8410aa2-e38d-446c-9b10-2a67742a789b",
        }}
      />
      <Image
        style={styles.Star101}
        source={{
          uri: "https://firebasestorage.googleapis.com/v0/b/unify-bc2ad.appspot.com/o/k61yg9rrv6-2%3A364?alt=media&token=191aa82f-850c-41f9-a135-b5e9594a1bf5",
        }}
      />
      <Text style={styles.Txt544}>82</Text>
      <Text style={styles.Txt392}>Lawn Co.</Text>
    </View>
        );
    }
}

const styles = StyleSheet.create({
    FavoritesView: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
      alignItems: "flex-start",
      position: "relative",
      borderRadius: 45,
      backgroundColor: "rgba(250,250,250,1)",
      width: 375,
      height: 814,
    },
    PlusButtonView: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
      alignItems: "flex-start",
      position: "absolute",
      top: 8,
      left: 0,
      borderRadius: 45,
      backgroundColor: "rgba(250,250,250,1)",
      width: 375,
      height: 813,
    },
    Vector9: {
      position: "absolute",
      top: 264,
      left: 30,
      width: 334,
      height: 88,
    },
    Txt467: {
      position: "absolute",
      top: 297,
      left: 213,
      fontSize: 12,
      fontFamily: "Arial",
      fontWeight: "400",
      color: "rgba(128,128,128,1)",
      width: 27,
      height: 18,
    },
    Txt451: {
      position: "absolute",
      top: 275,
      left: 128,
      fontSize: 12,
      fontFamily: "Arial",
      fontWeight: "400",
      color: "rgba(102,120,141,1)",
      width: 103,
      height: 24,
    },
    Txt81010: {
      position: "absolute",
      top: 323,
      left: 126,
      fontSize: 12,
      fontFamily: "Arial",
      fontWeight: "400",
      color: "rgba(102,120,141,1)",
      width: 194,
      height: 20,
    },
    Star6: {
      position: "absolute",
      top: 294,
      left: 126,
      width: 22,
      height: 23,
    },
    Star8: {
      position: "absolute",
      top: 294,
      left: 146,
      width: 22,
      height: 23,
    },
    Star9: {
      position: "absolute",
      top: 294,
      left: 188,
      width: 22,
      height: 23,
    },
    Star10: {
      position: "absolute",
      top: 294,
      left: 166,
      width: 22,
      height: 23,
    },
    Vector10: {
      position: "absolute",
      top: 365,
      left: 28,
      width: 334,
      height: 88,
    },
    Txt312: {
      position: "absolute",
      top: 376,
      left: 128,
      fontSize: 12,
      fontFamily: "Arial",
      fontWeight: "400",
      color: "rgba(102,120,141,1)",
      width: 127,
      height: 23,
    },
    Txt1015: {
      position: "absolute",
      top: 425,
      left: 126,
      fontSize: 12,
      fontFamily: "Arial",
      fontWeight: "400",
      color: "rgba(102,120,141,1)",
      width: 196,
      height: 20,
    },
    Star11: {
      position: "absolute",
      top: 398,
      left: 126,
      width: 22,
      height: 23,
    },
    Star12: {
      position: "absolute",
      top: 398,
      left: 208,
      width: 22,
      height: 23,
    },
    Star13: {
      position: "absolute",
      top: 398,
      left: 146,
      width: 22,
      height: 23,
    },
    Star14: {
      position: "absolute",
      top: 398,
      left: 188,
      width: 22,
      height: 23,
    },
    Star15: {
      position: "absolute",
      top: 398,
      left: 166,
      width: 22,
      height: 23,
    },
    Txt144: {
      position: "absolute",
      top: 401,
      left: 233,
      fontSize: 12,
      fontFamily: "Arial",
      fontWeight: "400",
      color: "rgba(128,128,128,1)",
      width: 27,
      height: 18,
    },
    MaskGroup: {
      position: "absolute",
      top: 384,
      left: 37,
      width: 50.94,
      height: 50,
    },
    Vector8: {
      position: "absolute",
      top: 160,
      left: 30,
      width: 334,
      height: 88,
    },
    Txt838: {
      position: "absolute",
      top: 170,
      left: 128,
      fontSize: 12,
      fontFamily: "Arial",
      fontWeight: "400",
      color: "rgba(102,120,141,1)",
      width: 137,
      height: 14,
    },
    Txt1052: {
      position: "absolute",
      top: 221,
      left: 128,
      fontSize: 12,
      fontFamily: "Arial",
      fontWeight: "400",
      color: "rgba(102,120,141,1)",
      width: 204,
      height: 17,
    },
    Star1: {
      position: "absolute",
      top: 190,
      left: 126,
      width: 22,
      height: 23,
    },
    Star5: {
      position: "absolute",
      top: 190,
      left: 208,
      width: 22,
      height: 23,
    },
    Star2: {
      position: "absolute",
      top: 190,
      left: 146,
      width: 22,
      height: 23,
    },
    Star3: {
      position: "absolute",
      top: 190,
      left: 188,
      width: 22,
      height: 23,
    },
    Star4: {
      position: "absolute",
      top: 190,
      left: 166,
      width: 22,
      height: 23,
    },
    Txt833: {
      position: "absolute",
      top: 193,
      left: 233,
      fontSize: 12,
      fontFamily: "Arial",
      fontWeight: "400",
      color: "rgba(128,128,128,1)",
      width: 27,
      height: 18,
    },
    NavBarIcons: {
      position: "absolute",
      top: 749,
      left: 71,
      width: 233,
      height: 40,
      opacity: 0.6,
    },
    Image49: {
      position: "absolute",
      top: 172,
      left: 324,
      width: 23,
      height: 22,
    },
    Image50: {
      position: "absolute",
      top: 275,
      left: 324,
      width: 23,
      height: 22,
    },
    Group9107: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      position: "absolute",
      top: 49,
      width: 375,
      height: 755,
    },
    Txt955: {
      fontSize: 24,
      fontFamily: "Montserrat Alternates, sans-serif",
      fontWeight: "400",
      lineHeight: 42,
      color: "rgba(255,140,0,1)",
      textAlign: "center",
      justifyContent: "center",
      width: 201,
      height: 35,
      marginBottom: 14,
    },
    Txt1094: {
      fontSize: 16,
      fontFamily: "Arial",
      fontWeight: "400",
      color: "rgba(151,151,151,1)",
      textAlign: "left",
      justifyContent: "center",
      width: 208,
      height: 25,
      marginBottom: 349,
    },
    OffendingRectangle: {
      width: 334, 
      height: 88,
      marginBottom: 174
    },
    NavBar: {
      width: 375,
      height: 70,
    },
  
    Image501: {
      position: "absolute",
      top: 376,
      left: 324,
      width: 23,
      height: 22,
    },
    GutterGuyLogo: {
      position: "absolute",
      top: 376,
      left: 37,
      width: 79,
      height: 70,
    },
    Image54: {
      position: "absolute",
      top: 484,
      left: 324,
      width: 23,
      height: 22,
    },
    Image57: {
      position: "absolute",
      top: 11,
      left: 62,
      width: 260,
      height: 49,
    },
  
    CarrieSCarpetLogo: {
      position: "absolute",
      top: 173,
      left: 37,//48,
      width: 77,
      height: 67//75,
    },
    NixitHandymanLogo: {
      position: "absolute",
      top: 274,
      left: 37,
      width: 77,
      height: 67,
    },
    Txt888: {
      position: "absolute",
      top: 533,
      left: 128,
      fontSize: 12,
      fontFamily: "Arial",
      fontWeight: "400",
      color: "rgba(102,120,141,1)",
      width: 195,
      height: 24,
    },
    LogoLawncareLogo: {
      position: "absolute",
      top: 493,
      left: 37,
      width: 77,
      height: 67,
    },
    Star61: {
      position: "absolute",
      top: 510,
      left: 126,
      width: 22,
      height: 23,
    },
    Star7: {
      position: "absolute",
      top: 510,
      left: 208,
      width: 22,
      height: 23,
    },
    Star81: {
      position: "absolute",
      top: 510,
      left: 146,
      width: 22,
      height: 23,
    },
    Star91: {
      position: "absolute",
      top: 510,
      left: 188,
      width: 22,
      height: 23,
    },
    Star101: {
      position: "absolute",
      top: 510,
      left: 168,
      width: 22,
      height: 23,
    },
    Txt544: {
      position: "absolute",
      top: 513,
      left: 233,
      fontSize: 12,
      fontFamily: "Arial",
      fontWeight: "400",
      color: "rgba(128,128,128,1)",
      width: 27,
      height: 18,
    },
    Txt392: {
      position: "absolute",
      top: 488,
      left: 130,
      fontSize: 12,
      fontFamily: "Arial",
      fontWeight: "400",
      color: "rgba(102,120,141,1)",
      width: 101,
      height: 27,
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
  });