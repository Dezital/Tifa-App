import React, { useState } from "react";
import { StyleSheet, ScrollView, View } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { HeaderLayoutDesign } from "../../components/HeaderLayoutDesign";
import IndexData from "../../components/IndexData.json";
import HeaderOverlayBox from "@/components/UI/Training/HeaderOverlayBox";
import HomeContent from "@/components/UI/Home/HomeContent";
import ModalComponent from "@/components/UI/Modal";
import { ThemedText } from "@/components/ThemedText";

//import trainingData from "../../components/Training.json";
//const placeholder = require("../assets/images/Tifa-loading-Screen.jpg"); //use this as placeholder for all images
//import * as Sentry from '@sentry/react-native';
//Sentry.init({
//  dsn: 'https://3755b9ec8c49c3fbd0083f13850eab21@o4508324793221120.ingest.us.sentry.io/4508341657272322',
//  debug: true, // If `true`, Sentry will try to print out useful debugging information if something goes wrong with sending the event. Set it to `false` in production
//});

function Index() {
  const { Index } = IndexData;
  // State to manage active selection
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <SafeAreaProvider style={{ backgroundColor: "rgba(0, 54, 171, 1)" }}>
      <SafeAreaView style={styles.container}>
        <ScrollView
          style={{ width: "100%" }}
          contentContainerStyle={styles.scrollContainer}
        >
          <ModalComponent
            openPopup={true} // Automatically opens the modal
            closePopup={() => console.log("Modal closed")}
          >
            <ThemedText type="default">Custom content inside modal</ThemedText>
          </ModalComponent>

          <HeaderLayoutDesign routeName="index" routeTitle="HOME" />
          <View style={{ marginTop: -65, paddingHorizontal: 20 }}>
            <HeaderOverlayBox
              dataInd={Index}
              activeIndex={activeIndex}
              setActiveIndex={setActiveIndex}
              routeName="index"
            />
          </View>
          <HomeContent activeIndex={activeIndex} routeName="index" />
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    marginTop: 10,
  },
  scrollContainer: {
    width: "100%", // Ensures full-width
    backgroundColor: "rgba(21, 23, 24, 1)",
  },
});

//export default Sentry.wrap(Index)
export default Index;

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
