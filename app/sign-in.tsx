import { ImageBackground, StyleSheet, Text, View, Image } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { ReuseButton } from '@/components/UI/Button';
import { ThemedText } from '@/components/ThemedText';
import { useEffect } from 'react';
import { setStatusBarHidden } from 'expo-status-bar';

const image = require('../assets/images/get-Started-Screen.png');
const logo = require('../assets/images/tifa-logo-blue.png');

export default function SignIn() {
  useEffect(() => {
    setStatusBarHidden(true);
  },[])
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container} edges={['left', 'right']}>
        <ImageBackground source={image} resizeMode="cover" style={styles.image}>
          {/* Overlay */}
          <View style={styles.overlay} />
          <View >
            <Image style={styles.logo} source={logo} />
          </View>
          {/* Content on top of overlay */}
          <View style={styles.buttonContainer}>
            <View>
            <ThemedText type="variantHeading">START DEVELOPING WITH TIFA</ThemedText>
            <ThemedText type="secondary" style={{ textAlign: 'center', paddingBottom: 10 }}>Your roadmap to become an elite player starts here!</ThemedText>
            </View>
            <ReuseButton formatBlue="blue" routeLink="/sign-up" Title="SIGN UP" />
            <ReuseButton formatBlue="transparent" routeLink="/login-in" Title="LOGIN" />
          </View>
        </ImageBackground>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 40,
    paddingRight: 40,
    paddingTop: 50,
    paddingBottom: 30,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject, // Fills the ImageBackground completely
    backgroundColor: 'rgba(0, 0, 0, 0.6)', // 60% black overlay
  },
  logo: {
    width: 160,
    height: 100,
    zIndex: 1, // Ensures logo is above the overlay
  },
  buttonContainer: {
    borderRadius: 30,
    gap: 20,
    justifyContent: 'space-between',
    backgroundColor: 'rgba(27, 27, 27, 0.73)',
    paddingVertical: 25,
    paddingHorizontal: 27,
    width: '100%',
    zIndex: 1, // Ensures buttons are above the overlay
  },
});

