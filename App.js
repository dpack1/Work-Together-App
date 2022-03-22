import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import { gestureHandlerRootHOC, ScrollView, TextInput } from 'react-native-gesture-handler';

export default function App() {
  return (
    <View style={styles.container}>
        
      <View style={styles.logoContainer}>
        <Image source={{uri: 'https://sizze-figma-plugin-images-upload.s3.us-east-2.amazonaws.com/c82344d2997beafd4ad030577f9ebc2b'}} style={styles.logo} />
      </View>

      <Text style={{ color: 'chocolate' }}> Refer Buisness Name</Text>

      <View style={styles.logoContainer}>
        <Image source={{uri: 'https://sizze-figma-plugin-images-upload.s3.us-east-2.amazonaws.com/623f61d9a46df121536ebc0cc3691d30'}} style={{height: 150, width: 200}} />
      </View>

      <Text style={{ color: 'chocolate' }}> Enter the client's email</Text>


      <TextInput placeholder="Client Name" style={styles.search}/>
      <TextInput placeholder="Client Email" style={styles.search}/>
      <TextInput placeholder="Message" style={styles.searchMessage}/>






      

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>

        
      </ScrollView>

      <View style={styles.NavBar}>
        <Image source={{ uri: 'https://work-together-app-icons.s3.amazonaws.com/favorites.png'}} style={styles.NavBarIcon}/>
        <Image source={{ uri: 'https://work-together-app-icons.s3.amazonaws.com/home.png'}} style={styles.NavBarIcon}/>
        <Image source={{ uri: 'https://work-together-app-icons.s3.amazonaws.com/profile.png'}} style={styles.NavBarIcon}/>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

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
  searchMessage: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    height: 100,
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
    paddingTop: 20
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