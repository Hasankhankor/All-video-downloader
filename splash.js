import React, { useEffect, useRef } from 'react';
import { View, Text, Image, StyleSheet, Dimensions, ImageBackground } from 'react-native';
import * as Animatable from 'react-native-animatable';
import BG from "./assets/mainbg.png"

const { width, height } = Dimensions.get('window');

const SplashScreen = () => {
  const logoRef = useRef(null);

  useEffect(() => {
    // Trigger the continuous bouncing animation when the component mounts
    logoRef.current?.bounce(800).then((endState) => {
      if (endState.finished) {
        // Trigger the animation again when it's finished
        logoRef.current?.bounce(800);
      }
    });
  }, []);

  return (

      <ImageBackground source={BG} resizeMode='cover' style={styles.container} >




      <Animatable.Image
        ref={logoRef}
        animation="bounce"
        duration={800}
        iterationCount="infinite"
        source={require('./assets/logo.png')}

        style={styles.logo}
      />
      <View style={styles.fallingLogoContainer}>
        <Animatable.Image
          animation="slideInDown"
          duration={2000}
          iterationCount={3}
          source={require('./assets/falling.png')}
          style={styles.fallingLogo}
        />
      </View>
      <Text style={styles.title}>ALL Video Downloader</Text>
      <Text style={styles.subtitle}>Capture Videos, Create Collections!</Text>
      <Text style={styles.description}>
        The All Video Downloader promises uninterrupted entertainment and a
        buffer-free experience for your favorite YouTube content. This
        user-friendly tool helps you to download videos effortlessly,
        eliminating the frustration of buffering. With a simple interface, the
        downloader makes video downloads a breeze.
      </Text>
      </ImageBackground>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width, // Set to full screen width
    height: height, // Set to full screen height
    justifyContent: 'center',
    backgroundColor: 'transparent',
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: width * 0.3,
    height: width * 0.3,
    resizeMode: 'contain',
    marginVertical: 20,
  },
  fallingLogoContainer: {
    position: 'absolute',
    top: 0,
    alignItems: 'center',
  },
  fallingLogo: {
    width: width * 0.2,
    height: width * 0.2,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 24,
    lineHeight: 50,
    fontWeight: 'bold',
    color: '#ffffff',
    marginVertical: 10,
  },
  subtitle: {
    fontSize: 18,
    color: '#ffffff',
    marginBottom: 20,
  },
  description: {
    fontSize: 14,
    color: '#ffffff',
    textAlign: 'center',
    lineHeight: 22,
  },
});

export default SplashScreen;
