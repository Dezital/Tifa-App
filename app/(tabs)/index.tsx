import React from "react";
import { StyleSheet, ScrollView } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import {HeaderLayoutDesign} from "../../components/HeaderLayoutDesign";

//import trainingData from "../../components/Training.json";
//const placeholder = require("../assets/images/Tifa-loading-Screen.jpg"); //use this as placeholder for all images
//import * as Sentry from '@sentry/react-native';
//Sentry.init({
//  dsn: 'https://3755b9ec8c49c3fbd0083f13850eab21@o4508324793221120.ingest.us.sentry.io/4508341657272322',
//  debug: true, // If `true`, Sentry will try to print out useful debugging information if something goes wrong with sending the event. Set it to `false` in production
//});

function Index() {
  return (
    <SafeAreaProvider style={{backgroundColor: "rgba(0, 54, 171, 1)"}}>
      <SafeAreaView style={styles.container}>
      <ScrollView style={{ width: "100%" }} contentContainerStyle={styles.scrollContainer}>
      <HeaderLayoutDesign routeName="index" routeTitle="TIFA" /> 
</ScrollView>

      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    marginTop: 24,
  },
  scrollContainer: {
    width: "100%", // Ensures full-width
    backgroundColor: "rgba(21, 23, 24, 1)",
    
  },
});

//export default Sentry.wrap(Index)
export default Index





/*
import auth from "@react-native-firebase/auth"; // Import Firebase Auth
import { useSession } from "../../ctx";



  const { signOut } = useSession();

  const handleSignOut = async () => {
    try {
      await auth().signOut(); // Sign out from Firebase
      signOut();
      Alert.alert("Success", "You have successfully signed out.");
    } catch (error) {
      console.error("Sign out error: ", error);
      signOut();
    }

  };

  <Text onPress={handleSignOut}>Sign Out</Text> 
  */