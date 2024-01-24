import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// Create screen components
const HomeScreen = () => {
  return (
    <View style={styles.screen}>
      <Text>Home Screen</Text>
    </View>
  );
};

const WhatsAppScreen = () => {
  return (
    <View style={styles.screen}>
      <Text>WhatsApp Screen</Text>
    </View>
  );
};

const DownloadsScreen = () => {
  return (
    <View style={styles.screen}>
      <Text>Downloads Screen</Text>
    </View>
  );
};

// Create bottom tab navigator
const Tab = createBottomTabNavigator();

const Navigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'WhatsApp') {
            iconName = 'whatsapp';
          } else if (route.name === 'Downloads') {
            iconName = 'download';
          }

          // You can return any component that you like here!
          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="WhatsApp" component={WhatsAppScreen} />
      <Tab.Screen name="Downloads" component={DownloadsScreen} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Navigation;
