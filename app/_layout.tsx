
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';
import LoadingScreen from '@/components/LoadingScreen';
import { setStatusBarStyle } from "expo-status-bar";
import { Slot } from "expo-router"
import { SessionProvider } from '../ctx';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    Vermin: require('../assets/fonts/VerminVibesSlant.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);
  
  useEffect(() => {
    setTimeout(() => {
      setStatusBarStyle("light");
    }, 0);
  }, []);

  if (!loaded) {
    return <LoadingScreen />
  }

  return (
    <SessionProvider>
    <Slot />
    </SessionProvider>
  );
}


////redooooooooooooooooooooooooo