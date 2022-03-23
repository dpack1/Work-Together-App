import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Button, Pressable, Text, View, Image, ImageBackground, Alert, SafeAreaView } from 'react-native';
import { gestureHandlerRootHOC, ScrollView, TextInput } from 'react-native-gesture-handler';

export default function App() {
  return (
    <View style={styles.container}>
      
        
      <View style={styles.logoContainer}>
        <Image source={{uri: 'https://sizze-figma-plugin-images-upload.s3.us-east-2.amazonaws.com/c82344d2997beafd4ad030577f9ebc2b'}} style={styles.logo} />
      </View>

      <Text style={{ color: 'chocolate', fontSize: 20  }}> Refer Buisness Name</Text>

      

      <View style={styles.logoContainer}>
        <Image source={{uri: 'https://sizze-figma-plugin-images-upload.s3.us-east-2.amazonaws.com/623f61d9a46df121536ebc0cc3691d30'}} style={{height: 100, width: 150}} />
      </View>

      <Text style={{ color: 'chocolate', fontSize: 20 }}> Enter the client's email</Text>



      <TextInput placeholder="Client Name" style={styles.search}/>
      <TextInput placeholder="Client Email" style={styles.search}/>


      <TextInput placeholder="Message" style={styles.searchMessage}/>


      <View style={styles.button}>
        <Button
          title="send"
          color="orange"
          onPress={() => Alert.alert('Button with adjusted color pressed')}
        />
      </View>
      
      <View style={styles.footer}>
        <Image source={{ uri: 'https://work-together-app-icons.s3.amazonaws.com/favorites.png'}} style={styles.NavBarIcon}/>
        <Image source={{ uri: 'https://work-together-app-icons.s3.amazonaws.com/home.png'}} style={styles.NavBarIcon}/>
        <Image source={{ uri: 'https://work-together-app-icons.s3.amazonaws.com/profile.png'}} style={styles.NavBarIcon}/>

        
      </View>



      <StatusBar style="auto" />
    </View>
  );
}

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
    width: '30%',
    borderRadius: 50,
   // backgroundColor: "#e5e5e5",

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




{/* <Pressable
        onPress={() => {
          setTimesPressed((current) => current + 1);
        }}
        style={({ pressed }) => [
          {
            backgroundColor: pressed
              ? 'rgb(210, 230, 255)'
              : 'white'
          },
          styles.wrapperCustom
        ]}>
        {({ pressed }) => (
          <Text style={styles.text}>
            {pressed ? 'Pressed!' : 'Press Me'}
          </Text>
        )}
      </Pressable> */}
      

{/*       
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
      </ScrollView> */}