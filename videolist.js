import React, { useState } from 'react';
import {
  SafeAreaView, StyleSheet, View, Text, FlatList, TouchableOpacity, Image, Dimensions
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const HomeScreen = () => {
  const { width } = Dimensions.get('window');
  const tabs = ['All', 'Instagram', 'Facebook', 'TikTok'];
  const [selectedTab, setSelectedTab] = useState('All');

  // Default placeholder images
  const images = new Array(8).fill(null).map((_, index) => ({
    id: String(index),
    uri: `https://via.placeholder.com/150x150.png?text=${index + 1}`,
  }));

  const renderTab = ({ item }) => (
    <TouchableOpacity
      style={[styles.tab, selectedTab === item && styles.selectedTab]}
      onPress={() => setSelectedTab(item)}
    >
      <Text style={[styles.tabText, selectedTab === item && styles.selectedTabText]}>{item}</Text>
    </TouchableOpacity>
  );

  const renderImage = ({ item }) => {
    const isCentered = selectedTab !== 'All';
    const imageWidth = isCentered ? (width - 24) : (width - 24) / 3; // Set the image width accordingly
    return (
      <View style={[styles.imageContainer, { width: imageWidth }, isCentered && styles.centeredContent]}>
        <Image resizeMode='cover' style={styles.image} source={{ uri: item.uri }} />
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>ALL Video Downloader</Text>
      </View>

      {/* Tabs */}
      <View style={styles.tabsWrapper}>
        <FlatList
          horizontal
          data={tabs}
          renderItem={renderTab}
          keyExtractor={item => item}
          contentContainerStyle={styles.tabsContainer}
          showsHorizontalScrollIndicator={false}
        />
      </View>

      {/* Image Grid */}
      <View style={styles.centeredContainer}>
        <FlatList
          data={images}
          renderItem={renderImage}
          keyExtractor={item => item.id}
          numColumns={3} // Display images in 3 columns
          showsVerticalScrollIndicator={false}
          style={styles.imageGrid}
        />
      </View>

      {/* Bottom Navigation */}
      <View style={styles.bottomNavigation}>
        <TouchableOpacity style={styles.bottomNavItem}>
          <Icon name="home" size={24} color="#000" />
          <Text style={styles.bottomNavText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomNavItem}>
          <Icon name="whatsapp" size={24} color="#000" />
          <Text style={styles.bottomNavText}>WhatsApp</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomNavItem}>
          <Icon name="download" size={24} color="#000" />
          <Text style={styles.bottomNavText}>Download</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#978AFF',
    paddingVertical: 10,
  },
  headerTitle: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
  },
  tabsWrapper: {
    height: 50, // Fixed height for the tabs container
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
  },
  tabsContainer: {
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  tab: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    marginHorizontal: 4,
    backgroundColor: '#e4e4e4',
    borderRadius: 20,
  },
  selectedTab: {
    backgroundColor: '#978AFF', // Customize the selected tab style
    marginLeft:110,
  },
  tabText: {
    color: 'black',
    fontWeight: 'bold',

  },
  selectedTabText: {
    color: 'white', // Customize the selected tab text style
  },
  imageGrid: {
    flex: 1, // Ensure the image grid takes up the remaining space
    margin: 4,
  },
  imageContainer: {
    height: 'auto', // Adjust height dynamically based on content
    aspectRatio: 1, // Maintain aspect ratio
    margin: 4,
    borderRadius: 10,
    overflow: 'hidden',
  },
  image: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  bottomNavigation: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  bottomNavItem: {
    alignItems: 'center',
  },
  bottomNavText: {
    marginTop: 4,
  },
  centeredContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  centeredContent: {
    alignSelf: 'center',
  },
});

export default HomeScreen;
