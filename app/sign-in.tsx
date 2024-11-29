import { ImageBackground, StyleSheet, Text, View, Image } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { ReuseButton } from '@/components/UI/Button';

const image = require('../assets/images/get-Started-Screen.png');
const logo = require('../assets/images/tifa-logo-blue.png');

export default function SignIn() {
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
            <Text style={styles.headerText}>Start your future with TIFA</Text>
            <Text style={styles.headerDesc}>Your journey to become the next football
            start begins here!</Text>
            <ReuseButton formatBlue="blue" routeLink="/sign-up" Title="GET STARTED / SIGN UP" />
            <ReuseButton formatBlue="transparent" routeLink="/login-in" Title="I ALREADY HAVE AN ACCOUNT" />
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
  headerText: {
    color: 'white',
    fontSize: 28,
    lineHeight: 32,
    textAlign: 'center',
    zIndex: 1, // Ensures text is above the overlay
  },
  headerDesc: {
    fontSize: 16,
    lineHeight: 21,
    textAlign: 'center',
    color: 'rgba(199, 199, 199, 1)',
    zIndex: 1, // Ensures text is above the overlay
  },
  footerText: {
    color: 'black',
    fontSize: 12,
    marginBottom: 20,
    textAlign: 'center',
    zIndex: 1, // Ensures text is above the overlay
  },
});

