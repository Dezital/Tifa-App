import React from 'react';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { StyleSheet, Image, View } from 'react-native';
const logoImage = require('../assets/images/tifa-logo-blue.png'); 
const backgroundImage = require("../assets/images/Tifa-loading-Screen.jpg");

const LoadingScreen = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container} edges={['left', 'right']}>
        {/* Background image */}
        <Image style={styles.background} source={backgroundImage} />

        {/* Overlay */}
        <View style={styles.overlay} />

        {/* Logo image */}
        <Image style={styles.logo} source={logoImage} />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },
  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.6)', // 60% black overlay
  },
  logo: {
    width: 160,
    height: 100,
    zIndex: 1,
  },
});

export default LoadingScreen;
