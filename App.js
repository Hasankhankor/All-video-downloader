
import { StyleSheet, Text, View } from 'react-native';
import SplashScreen from './splash';
import MainScreen from './home';
import VideoDownloaderScreen from './videodown';
import ReviewScreen from './review'
import HomeScreen from './videolist'
import  StatusSaverScreen from './whatsapp'
import { NavigationContainer } from '@react-navigation/native';





export default function App() {
  return (
    <View style={styles.container}>
      {/* <SplashScreen/> */}
      {/* <MainScreen/> */}
{/* < StatusSaverScreen/> */}

      {/* <ReviewScreen/> */}
      {/* <HomeScreen/> */}
      <VideoDownloaderScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
