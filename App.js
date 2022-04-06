import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ImageBackground, Dimensions } from 'react-native';
import { gestureHandlerRootHOC, ScrollView, TextInput } from 'react-native-gesture-handler';

export default function App() {
  return (
    <View style={styles.container}>

      <View style={styles.back}>
        <Text style={styles.backButton}>X</Text>
      </View>
        
      <View style={styles.logoContainer}>
        <Image source={{uri: 'https://sizze-figma-plugin-images-upload.s3.us-east-2.amazonaws.com/c82344d2997beafd4ad030577f9ebc2b'}} style={styles.logo} />
      </View>

      <Text style={styles.title}>My Referrals</Text>

      <Image source={{uri: 'https://sizze-figma-plugin-images-upload.s3.us-east-2.amazonaws.com/c65e6af836c384405da617fc659d1e70'}} style={styles.profilePicture} />

      <View style={styles.section}>
        <Text style={styles.sectionText}>Given: 52</Text>
        <Text style={styles.sectionText}>Converted: 46</Text>
        <Text style={styles.sectionText}>Conversion Rate: 88%</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionText}>Recieved: 48</Text>
        <Text style={styles.sectionText}>Converted: 40</Text>
        <Text style={styles.sectionText}>Conversion Rate: 80%</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.bottomSection}>Top Referrers: </Text>
        <Text style={styles.bottomSectionReferrers}>Logo Lawncare</Text>
        <Text style={styles.bottomSectionReferrers}>Carrie's Carpet Cleaning</Text>
      </View>



      <StatusBar style="auto" />
    </View>
  );
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