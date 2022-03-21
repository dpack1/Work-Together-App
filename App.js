import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import { gestureHandlerRootHOC, ScrollView, TextInput } from 'react-native-gesture-handler';

export default function App() {
  return (
    <View style={styles.container}>
        
      <View style={styles.logoContainer}>
        <Image source={{uri: 'https://sizze-figma-plugin-images-upload.s3.us-east-2.amazonaws.com/c82344d2997beafd4ad030577f9ebc2b'}} style={styles.logo} />
      </View>

      <TextInput placeholder="Search" style={styles.search}/>

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>

        <View style={styles.listElement}>
          <View style={styles.elementTopRow}>
            <Image source={{uri: 'https://sizze-figma-plugin-images-upload.s3.us-east-2.amazonaws.com/623f61d9a46df121536ebc0cc3691d30'}} style={styles.profilePicture} />
            <Text style={styles.itemCompanyName}>Logo Lawncare</Text>
          </View>
          <View>
            <Image source={{uri: 'https://sizze-figma-plugin-images-upload.s3.us-east-2.amazonaws.com/5525ee56a5fb0861a6699a14dc3e0dbb'}} style={styles.itemCompanyPicture} />
          </View>
          <View style={styles.elementBottomRow}>
            <Text>Fresh Cut</Text>
          </View>
        </View>

        <View style={styles.listElement}>
          <View style={styles.elementTopRow}>
            <Image source={{uri: 'https://sizze-figma-plugin-images-upload.s3.us-east-2.amazonaws.com/c65e6af836c384405da617fc659d1e70'}} style={styles.profilePicture} />
            <Text style={styles.itemCompanyName}>Werken</Text>
          </View>
          <View>
            <Image source={{uri: 'https://sizze-figma-plugin-images-upload.s3.us-east-2.amazonaws.com/01d1f304d219cb7161b5d9cf9c8714ba'}} style={styles.itemCompanyPicture} />
          </View>
          <View style={styles.elementBottomRow}>
            <Text>Squeaky Clean Windows</Text>
          </View>
        </View>

        <View style={styles.listElement}>
          <View style={styles.elementTopRow}>
            <Image source={{uri: 'https://sizze-figma-plugin-images-upload.s3.us-east-2.amazonaws.com/859b3eaa8179524d4ee554368115f94e'}} style={styles.profilePicture} />
            <Text style={styles.itemCompanyName}>Art City AutoBody</Text>
          </View>
          <View>
            <Image source={{uri: 'https://sizze-figma-plugin-images-upload.s3.us-east-2.amazonaws.com/5525ee56a5fb0861a6699a14dc3e0dbb'}} style={styles.itemCompanyPicture} />
          </View>
          <View style={styles.elementBottomRow}>
            <Text>Simply The Best</Text>
          </View>
        </View>

      </ScrollView>

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
    borderRadius: 10,
    backgroundColor: "#e5e5e5",
  },
  profilePicture: {
    width: 75,
    height: 75,
  },
  listElement: {
    paddingTop: 15
  },
  elementTopRow: {
    flexDirection: "row",
    alignItems: 'center',
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
    height: 300
  },
  scrollView: {
    width: '80%',
    height: '75%',
    
  },
  elementBottomRow: {
    alignItems: 'center',
    paddingTop: 15
  }
});
