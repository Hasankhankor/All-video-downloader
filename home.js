import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  SafeAreaView,
  FlatList,
  Dimensions,
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const windowWidth = Dimensions.get('screen');

const icons = [
  { id: '1', name: 'Facebook', uri: 'https://cdn-icons-png.flaticon.com/256/124/124010.png' },
  { id: '2', name: 'Instagram', uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/600px-Instagram_icon.png' },
  { id: '3', name: 'youtube', uri: 'https://cdn-icons-png.flaticon.com/256/1384/1384060.png' },
  { id: '4', name: 'tiktok', uri: 'https://static-00.iconduck.com/assets.00/tik-tok-icon-1024x1024-zwq641op.png' },
  { id: '5', name: 'dailymotion', uri: 'https://cdn2.iconfinder.com/data/icons/social-icons-33/128/Dailymotion-512.png' },
  { id: '6', name: 'whatsapp ', uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/WhatsApp_icon.png/479px-WhatsApp_icon.png' },
  { id: '7', name: 'vimeo', uri: 'https://cdn-icons-png.flaticon.com/512/124/124036.png' },
  { id: '8', name: 'pinterest', uri: 'https://cdn-icons-png.flaticon.com/512/174/174863.png' },
  { id: '9', name: 'reddit', uri: 'https://cdn3.iconfinder.com/data/icons/2018-social-media-logotypes/1000/2018_social_media_popular_app_logo_reddit-512.png' },
];

const AppIcon = ({ uri }) => (
  <TouchableOpacity style={styles.appIconContainer}>
    <Image source={{ uri }} style={styles.appIcon} />
  </TouchableOpacity>
);

const AppIconCard = ({ uri }) => (
  <TouchableOpacity style={styles.appIconCardContainer}>
    <View style={styles.appIconCard}>
      <AppIcon uri={uri} />
    </View>
  </TouchableOpacity>
);

const MainScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => {}}>
          <Image
            source={require('./assets/logo.png')}
            style={styles.logo}
          />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>ALL Video Downloader</Text>
      </View>
      <View style={styles.searchContainer}>
  <FontAwesome name="link" size={24} color="#999" style={styles.linkIcon} />
  <TextInput
    style={styles.searchInput}
    placeholder="Enter URL here..."
  />
        <TouchableOpacity style={styles.goButton}>
          <Text style={styles.goButtonText}>GO</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.supportedText}>Supported Apps & Websites</Text>
      <FlatList
        data={icons}
        renderItem={({ item }) => <AppIconCard uri={item.uri} />}
        keyExtractor={(item) => item.id}
        numColumns={4}
        columnWrapperStyle={styles.iconRow}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    width: windowWidth.width,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',  // Center items horizontally
    justifyContent: 'center',  // Center items vertically
    backgroundColor: '#978AFF',
    paddingVertical: 20,
    paddingHorizontal: 20,
    elevation: 3,
  },
  logo: {
    width: 30,
    height: 30,
    marginRight:12,
  },
  headerTitle: {
    color: '#FFFFFF',
    fontSize: 20,

    fontWeight: 'bold',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    margin: 20,
    paddingHorizontal: 15,
  },
  searchInput: {
    flex: 1,
    paddingVertical: 10,
  },
  goButton: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: '#978AFF',
    borderRadius: 5,
    marginLeft: 10,
  },
  goButtonText: {
    color: '#FFFFFF',
  },
  supportedText: {
    marginHorizontal: 20,
    marginBottom: 10,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  linkIcon: {
    marginLeft: 10,
    flex:1, // Add margin to create space between icon and input
  },
  iconRow: {
    justifyContent: 'space-evenly',
    paddingHorizontal: 20,
    flexDirection: 'row',
    paddingHorizontal: 69,
    marginBottom: 20,
  },
  appIconContainer: {
    alignItems: 'center',
  },
  appIcon: {
    width: 50,
    height: 50,
  },
  appIconCardContainer: {
    alignItems: 'center',
    margin: 1,
  },
  appIconCard: {
    backgroundColor: '#FFFFFF',
    padding: 10,
    borderRadius: 20,
    margin: -5,

    elevation: 6,
  },
});

export default MainScreen;
